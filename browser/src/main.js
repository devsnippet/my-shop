import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './routers';
import VueResource from'vue-resource';
import VueLazyload from 'vue-lazyload';
import { toprice } from './filters';

Vue.filter('toprice',toprice);
Vue.use(VueResource);
//Vue.http.options.root = 'http://movielife.top:3000';
Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/error.png',
  loading: '/static/img/loading.gif',
  try: 3
});

//字体设置 将屏幕宽度保存在全局变量@screanWidth中，方便使用
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            window.screanWidth = docEl.clientWidth;
            if (!window.screanWidth) return;
            if(window.screanWidth>=1280){
                docEl.style.fontSize = '60px';
            }else{
                docEl.style.fontSize = 30 * (window.screanWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

router.start(App, '#app');
