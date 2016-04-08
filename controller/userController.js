
/**
 * Created by wuwy on 2016/3/17.
 */

var agent = require('superagent');
var api_request_url = require("../utils/util.js").api_request_url;

module.exports = {
    //增加
    create: function(user,cb){
        //调用接口保存到数据库
        cb(null,user);

        //var url = api_request_url + "/user";
        //agent
        //    .post(url)
        //    .set('Content-Type', 'application/x-www-form-urlencoded')  // !important
        //    .send(params)
        //    .end(function (err, response) {
        //        cb(err,response.text);
        //    });
    },
    //修改
    update:function(params,cb){

    },
    /*
     方法： 获取服务列表
     参数： 无
     */
    getList:function(params,cb){

    },
    /*
     方法：详情
     参数：  uid --用户id
     */
    getInfo:function(params,cb){
        cb(null,teacherInfoResult);
    },

    /* 方法：删除
     * 参数：uid
     * */
    delete:function(params,cb){

    },



};


var userInfoResult = {
    uid:"2001",
    name:"wuwanyu",
    age:"23",
    type:"student",
    description:"我是在校大学生"
}

var teacherInfoResult = {
    uid:"2002",
    name:"teacher",
    age:"43",
    type:"teacher",
    description:"全栈工程师，喜欢新鲜事物，勇于尝试，勇于探索，有代码洁癖，最喜欢JavaScript。"
}