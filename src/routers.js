export default (router) => router.map({
  '/': {
    name: 'home',
    component: require('./views/home'),
  },
  '/user': {
    name: 'user',
    component: require('./views/user'),
  },
});

