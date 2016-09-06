var express = require('express');
var router = express.Router();
var sendSMS = require('../src/sendSMS');
//登陆
router.post('/login',function (req, res) {

});

//注册
router.post('/signup',function (req, res) {

});
//注册
router.get('/signup/:tel',function (req, res) {
    var promise=sendSMS.forSignUp("11");
    promise.then(function(value) {
        // success
        res.end("success"+req.params.tel);
    }, function(value) {
        // failure
        res.end("failure");
    });
});

module.exports = router;
