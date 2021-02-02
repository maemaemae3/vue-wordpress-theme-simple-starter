import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/:year/:month/:day/:postSlug',
      name: 'Post',
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import(/* webpackChunkName: "preview" */ '@/views/Preview.vue')
    },
    {
      path: '/:pageSlug',
      name: 'Page',
      component: () => import(/* webpackChunkName: "page" */ '@/views/Page.vue')
    },
  ],
  mode: 'history',
  base: '',

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
