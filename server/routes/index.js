var express = require('express');
var router = express.Router();

var cryptoUtils=require('../src/cryptoUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end(cryptoUtils.cipher('123456'));
});
router.get('/:d', function(req, res, next) {
  res.end(cryptoUtils.deCipher(req.params.d));
});
module.exports = router;
