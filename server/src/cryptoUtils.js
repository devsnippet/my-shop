/**
 * Created by Administrator on 2016/9/8 0008.
 */
var crypto=require('crypto');

var key='zhengrenkun';

var cryptoUtils={
    cipher:cipher,
    deCipher:deCipher,
    toMD5:toMD5
};
//加密
function cipher(data) {
    var cipher = crypto.createCipher('aes192', key);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
}
//解密
function deCipher(data) {
    var decipher =crypto.createDecipher('aes192', key);
    return decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
}

function toMD5(content) {
    var md5 = crypto.createHash('md5');
    md5.update(content);
    return md5.digest('hex');
}
module.exports=cryptoUtils;