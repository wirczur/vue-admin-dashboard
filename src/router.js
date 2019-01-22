import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '*', redirect: '/' },
    { path: '/login', name: 'login', component: Login },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];

  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters.getIsAuthorization;
  console.log('loggedIn', loggedIn);
  console.log('authRequired', authRequired);
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  return next();
});

export default router;
