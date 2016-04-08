var express = require('express');
var router = express.Router();
var async = require('async');
var util = require("../utils/util.js"),
    courseCtrl = require('../controller/courseController.js'),
    userCtrl = require("../controller/userController.js");

/*
 方法名：
 创建课程
 参数：（form格式）
   courseid  -课程id（可以使用uuid生成）
   teacherid -讲师id
   name -课程名
   description -课程描述
   url -课程视频
 返回值：
 {
 "code": "200",
 "msg": "创建成功！",
 "course": {
   "courseid": "1001",
   "teacherid": "2001",
   "name": "NodeJS基础视频教程一",
   "description": "NodeJS基础视频教程一简介",
   "url": ""
 }
 }
 */
router.post('/create', function(req, res) {

  async.waterfall([
    function(cb){
      util.formParse(req,function(err,result){  //解析表单，上传视频
        cb(err,result);
      })
    },
    function(course,cb){
      courseCtrl.create(course,function(err,result){ //保存到数据库
        cb(err,result);
      })
    },
  ],function(err,result){
    var results = util.response.createSuccess;
    results.course = result
    res.send(results);
  })

});

/*
 方法名：
    获取课程详情
 参数：
    courseid -课程id
 返回值：
 {
   "code": "200",
   "msg": "获取信息成功！",
   "course": {
       "courseid": "1001",
       "teacherid": "2001",
       "name": "NodeJS基础视频教程一",
       "url": "http://video.com",
       "description": "NodeJS基础视频教程一简介"
   }
 }
 */

router.get('/info', function(req, res) {
    async.auto({
        couseInfo:function(cb){
            courseCtrl.getInfo(req.query.courseid, function (err, result) {  //课程信息
                cb(err,result);
            });
        },
        tearcherInfo:['couseInfo', function(results,cb) {
            userCtrl.getInfo({uid:results.couseInfo.teacherid},function(err,result){  //讲师信息
                cb(err,result);
            });
        }]
    },function(err,result){
        if (err) throw err;
        var results = util.response.getInfoSuccess;
        results.result = result;
        res.send(results);

    });

});

/*
 方法名：
 获取课程列表
 参数：
    无
 返回值：
 {
 "code": "200",
 "msg": "获取列表成功！",
 "result": {
   "count": 2,
   "list": [
       {
           "courseid": "1001",
           "teacherid": "2001",
           "name": "NodeJS基础视频教程一",
           "url": "http://video.com",
           "description": "NodeJS基础视频教程一简介"
       },
       {
           "courseid": "1002",
           "teacherid": "2002",
           "name": "NodeJS基础教程二",
           "url": "http://video.com",
           "description": "NodeJS基础视频教程二简介"
       }
   ]
   }
 }
 */
router.get('/list', function(req, res) {

  async.parallel({
    count:function(cb){
      courseCtrl.count( null ,cb);   //课程数目
    },
    list:function(cb){
      courseCtrl.getList( null ,cb);   //课程列表
    }
  },function(err,result){
    var results = util.response.getListSuccess;
    results.result = result;
    res.send(results);
  });

});


/*
方法名：
  获取用户收藏的课程
参数：
  uid - 用户id
  courseid  -课程id
返回值：
 {
 "code": "200",
 "msg": "获取信息成功！",
 "result": {
     "userInfo": {
         "uid": "2002",
         "name": "teacher",
         "age": "43",
         "type": "teacher",
         "description": "全栈工程师，喜欢新鲜事物，勇于尝试，勇于探索，有代码洁癖，最喜欢JavaScript。"
         },
     "couseInfo": {
         "courseid": "1001",
         "teacherid": "2001",
         "name": "NodeJS基础视频教程一",
         "url": "http://video.com",
         "description": "NodeJS基础视频教程一简介"
         },
     "tearcherInfo": {
         "uid": "2002",
         "name": "teacher",
         "age": "43",
         "type": "teacher",
         "description": "全栈工程师，喜欢新鲜事物，勇于尝试，勇于探索，有代码洁癖，最喜欢JavaScript。"
         }
     }
 }
*/
router.get('/collect', function(req, res) {

  async.auto({
    userInfo:function(cb){
      userCtrl.getInfo({uid:req.query.uid}, function (err, result) {   //用户信息
        cb(err,result);
      });
    },
    couseInfo:function(cb){
      courseCtrl.getInfo(req.query.courseid, function (err, result) {  //课程信息
        cb(err,result);
      });
    },
    tearcherInfo:['couseInfo', function(results,cb) {
      userCtrl.getInfo({uid:results.couseInfo.teacherid},function(err,result){  //讲师信息
        cb(err,result);
      });
    }]
  },function(err,result){
    if (err) throw err;
    var results = util.response.getInfoSuccess;
    results.result = result;
    res.send(results);

  });

});



module.exports = router;
