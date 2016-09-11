/**
 * Created by RK on 2016/9/6.
 * 阿里大鱼短信平台
 */

var sendSMS={
    forSignUp:forSignUp
};

function forSignUp(tel) {
    var promise=new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(tel+';'+Date.now());
        },2000)
    });
    return promise;
}

module.exports=sendSMS;