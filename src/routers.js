export default (router) => {
  router.map({
    '/home': {
      name: 'home',
      component: require('./views/home'),
    },
    '/list': {
      name: 'list',
      component: require('./views/list'),
    },
    '/details': {
      name: 'details',
      component: require('./views/details'),
    },
    '/user': {
      name: 'user',
      component: require('./views/user'),
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

