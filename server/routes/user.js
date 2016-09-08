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
router.get('/signup/:tel',function (req, res) {
    var promise=sendSMS.forSignUp("11");
    promise.then(function(value) {
        // success
        var a=cryptoUtils.cipher('123456789');
        res.writeHead(200, {
            'Set-Cookie': 'myCookie='+a,
            'Content-Type': 'text/plain'
        });
        res.end(cryptoUtils.deCipher());
    }, function(value) {
        // failure
        res.end("failure");
    });
});

module.exports = router;
