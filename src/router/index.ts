import Profile from '@/views/Profile.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
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
    meta: {
      visible: true,
      label: 'Mon profile',
    },
  },
  {
    name: 'history',
    path: '/history',
    component: Profile,
    meta: {
      visible: true,
      label: 'Historique',
    },
  },
  {
    name: 'seasonPath',
    path: '/seasson-path',
    component: Profile,
    meta: {
      visible: true,
      label: 'Season Pass',
    },
  },
  {
    name: 'account',
    path: '/account',
    component: Profile,
    meta: {
      visible: true,
      label: 'Mon compte',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
