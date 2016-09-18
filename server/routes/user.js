var express = require('express');
var router = express.Router();
var sendSMS = require('../src/sendSMS');
var cryptoUtils = require('../src/cryptoUtils');
//登陆
router.post('/login',function (req, res) {

});

//注册
router.post('/signup',function (req, res) {
    console.log(req.cookies);
    if(!req.cookies.verify){
        res.end('没 coockie');
        return;
    }
    var verifycookie=cryptoUtils.deCipher(req.cookies.verify);
    var verifycookie=JSON.parse(verifycookie);
    if(verify){
        if(Date.now()-verify.time>300000){
            res.end('验证码过期');
            return;
        }
        if(req.body.tel!=verify.tel){
            res.end('手机号码不匹配');
            return;
        }
        if(req.body.verifyCode!=verify.verifyCode){
            res.end('验证码错误');
        }
    }
    else {
        res.end('err');
    }
    res.end('注册成功');
});
//获取验证码
 router.post('/verifyCode',function (req, res) {
     var tel=req.body.tel;
     var verify={tel:tel,verifyCode:1234,time:Date.now()};
     var promise=sendSMS.forSignUp(tel);
     promise.then(function(value) {
         var verifycookie=cryptoUtils.cipher(JSON.stringify(verify));
         res.statusCode=200;
         res.cookie('verify',verifycookie);
         res.end(tel);
    }, function(value) {
        // failure
        res.end('errrrr');
    });
 });


module.exports = router;
