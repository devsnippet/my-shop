var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登陆
router.post('/login',function (req, res) {

});

//注册
router.post('/signup',function (req, res) {

});

module.exports = router;
