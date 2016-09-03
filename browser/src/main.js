import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './routers';
import VueResource from'vue-resource';
import VueLazyload from 'vue-lazyload';
import { toprice } from './filters';

Vue.filter('toprice',toprice);
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/error.png',
  loading: '/static/img/loading.gif',
  try: 3
});

router.start(App, '#app');
