export default (router) => {
  router.map({
    '/home': {
      name: 'home',
      component:function (resolve) {
          require(['./views/home'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component:function (resolve) {
          require(['./views/list'], resolve)
      }
    },
    '/details/:productid': {
      name: 'details',
      component:function (resolve) {
          require(['./views/details'], resolve)
      }
    },
    '/user': {
      name: 'user',
      component:function (resolve) {
          require(['./views/user'], resolve)
      }
    },
    '/login': {
      name: 'login',
      component:function (resolve) {
          require(['./views/login'], resolve)
      }
    },
    '/signup': {
      name: 'signup',
      component:function (resolve) {
          require(['./views/signup'], resolve)
      }
    },
  });
  router.redirect({
    // 重定向 /a 到 /b
    '/': '/home',
  });
  router.beforeEach((transition) => {
    console.log('beforeEach qq');
    transition.next();
  });
};
