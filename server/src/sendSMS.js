/**
 * Created by RK on 2016/9/6.
 * http://www.yuntongxun.com/
 * 注册邮箱1051455824@qq.com
 * 注册手机号18094159838
 * 密码zxcvbnm8
 */
var request = require('request');
var cryptoUtils=require('./cryptoUtils');
var moment = require('moment');//轻量级时间格式化组件

var sendSMS={
    forSignUp:forSignUp
};

function forSignUp(tel) {
    var promise=new Promise(function (resolve, reject) {
        sms(resolve, reject);
    });
    return promise;
}

function sms(resolve, reject) {
    console.log('0');
    var time=moment().format('YYYYDDMMHHmmss');
    console.log(time);
    var baseurl='https://app.cloopen.com:8883';
    var accountSid='8a216da8570874940157214133d70d51';
    var AppID= '8a216da8570874940157214136190d58';
    var AUTHTOKEN='9b0acf0a983e489c8890cb2d0320479c';
    var SigParameter=AppID+AUTHTOKEN+time;
        SigParameter=cryptoUtils.toMD5(SigParameter).toUpperCase();//根据平台要求转换
    console.log('1');
    var data= {to:"15159041052"
        ,appId: AppID
        ,templateId:"1"
        ,datas:["1234","仁焜"]};
    console.log('2');
    var options = {
        method: 'post',
        body: JSON.stringify(data),
        url: baseurl+'/2013-12-26/Accounts/'+accountSid+'+/SMS/TemplateSMS?sig='+SigParameter,
        headers: {
            'content-length':JSON.stringify(data).length,
            'Accept':'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization':new Buffer(AppID+':'+time).toString('base64')
        }
    };
    console.log('3');
    request(options, function (err, res, body) {
        console.log('4');
        console.log(body);
        if(err){
            reject(err);
        }else {
            resolve(body);
        }
    });

}

module.exports=sendSMS;