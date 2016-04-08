var express = require('express');
var router = express.Router();
var async = require('async');
var util = require("../utils/util.js"),
    userCtrl = require("../controller/userController.js");


/*

输入：（form格式）
 uid: 1001
 icon:
 name: wuwanyu
 age: 23
 description: 测试注册
 type: student

返回值：
{
    "code": "200",
    "msg": "注册成功！",
    "user": {
        "uid": "1001",
        "name": "wuwanyu",
        "age": "23",
        "description": "测试注册",
        "type": "student",
        "icon": "public\upload\upload_cc82ef732b7bb7b06237d609a67d676f.jpg"
}
}*/

router.post('/register', function(req, res) {
  async.waterfall([
      function(cb){
        util.formParse(req,function(err,result){
          cb(err,result);
        })
      },
    function(user,cb){
      userCtrl.create(user,function(err,result){
        cb(err,result);
      })
    },
  ],function(err,result){
      var results = util.response.regSuccess;
      results.user = result;
      res.send(results);
  })
});

/*
输入：
 name
返回值：
{
    "code": "200",
    "msg": "登录成功！",
    "user": {
        "uid": "2002",
        "name": "teacher",
        "age": "43",
        "type": "teacher",
        "description": "全栈工程师，喜欢新鲜事物，勇于尝试，勇于探索，有代码洁癖，最喜欢JavaScript。"
}
}*/

router.post('/login', function(req, res) {
  userCtrl.getInfo({ name:req.body.name},function(err,result){
      var results = util.response.loginSuccess;
      results.user = result;
      res.send(results);
  })
});

module.exports = router;
