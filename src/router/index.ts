import Profile from '@/views/Profile.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: () => ({
      name: 'profile',
    }),
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
