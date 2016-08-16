import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import configRouter from './routers';

Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);

router.start(App, '#app');
