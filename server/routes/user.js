var express = require('express');
var router = express.Router();
var sendSMS = require('../src/sendSMS');
var cryptoUtils = require('../src/cryptoUtils');
//登陆
router.post('/login',function (req, res) {

});

//注册
router.post('/signup',function (req, res) {

});
//获取验证码
 router.post('/verifyCode',function (req, res) {
    var tel=req.body.tel;
    console.log(req.cookies.verifyCode);
    var promise=sendSMS.forSignUp(tel);
    promise.then(function(value) {
        var a=cryptoUtils.cipher(value);
        res.writeHead(200, {
            'Set-Cookie': 'verifyCode='+a,
            'Content-Type': 'text/plain'
        });
        res.end(tel);
    }, function(value) {
        // failure
        res.end('errrrr');
    });
 });


module.exports = router;
