import MainPage from '@/pages/MainPage.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/photos',
    component: () => import('@/pages/PhotosPage'),
  },
];

export default new VueRouter({
  routes,
  // mode: 'history ',
});
