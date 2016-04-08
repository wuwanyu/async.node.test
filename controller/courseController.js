
/**
 * Created by wuwy on 2016/3/17.
 */

var agent = require('superagent');
var api_request_url = require("../utils/util.js").api_request_url;

module.exports = {
    //增加
    create: function(course,cb){
        //调用数据保存到数据库
        cb(null,course);

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
    update:function(course,cb){

    },
    /*
     方法： 获取服务列表
     参数： 无
     */
    getList:function(params,cb){
        cb(null,courseListResult);
    },
    /*
     方法：详情
     参数：  uid --用户id
     */
    getInfo:function(params,cb){
        cb(null,courseInfoResult);
    },

    /* 方法：删除
     * 参数：uid
     * */
    delete:function(params,cb){

    },

    count:function(params,cb){
        cb(null,courseListResult.length);
    },



};


var courseInfoResult = {
    courseid:"1001",
    teacherid:"2001",
    name:"NodeJS基础视频教程一",
    url:"http://video.com",
    description:"NodeJS基础视频教程一简介"
}

var courseListResult = [
    {
        courseid:"1001",
        teacherid:"2001",
        name:"NodeJS基础视频教程一",
        url:"http://video.com",
        description:"NodeJS基础视频教程一简介"
    },
    {
        courseid:"1002",
        teacherid:"2002",
        name:"NodeJS基础教程二",
        url:"http://video.com",
        description:"NodeJS基础视频教程二简介"
    },
    {
        courseid:"1001",
        teacherid:"2001",
        name:"NodeJS基础视频教程三",
        url:"http://video.com",
        description:"NodeJS基础视频教程三简介"
    },
    {
        courseid:"1002",
        teacherid:"2002",
        name:"NodeJS基础教程四",
        url:"http://video.com",
        description:"NodeJS基础视频教程四简介"
    }
]