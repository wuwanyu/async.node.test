/**
 * Created by wuwy on 2016/4/7.
 */
var formidable = require('formidable');

/*
解析后obj：
{
    "courseid": "1001",
    "teacherid": "2001",
    "name": "NodeJS基础视频教程一",
    "description": "NodeJS基础视频教程一简介",
    "url": {
    "size": 34299,
        "path": "public\upload\upload_1995e7d69f39510e169994af46df74fe.jpeg",  //路径
        "name": "05f5ab01d56ee6d904c81cf4d0427740.jpeg",  //原名
        "type": "image/jpeg",  //文件类型
        "mtime": "2016-04-07T14:00:00.484Z"  //上传日期
}
}
*/

exports.formParse = function(req,callback){
    var obj ={};
    var form = new formidable.IncomingForm({
        encoding:"utf-8",
        uploadDir:"public/upload",  //文件上传地址
        keepExtensions:true  //保留后缀
    });
    form.parse(req)
        .on('field', function(name, value) {  // 字段
            obj[name] = value;
        })
        .on('file', function(name, file) {  //文件
            obj[name] = file.path;
        })
        .on('error', function(error) {  //结束
            callback(error);
        })
        .on('end', function() {  //结束
            callback(null,obj);
        });
}


exports.response = {
    loginSuccess:{
        code:"200",
        msg:"登录成功！"
    },
    regSuccess:{
        code:"200",
        msg:"注册成功！"
    },
    createSuccess:{
        code:"200",
        msg:"创建成功！"
    },
    getListSuccess:{
        code:"200",
        msg:"获取列表成功！"
    },
    getInfoSuccess:{
        code:"200",
        msg:"获取信息成功！"
    },
}