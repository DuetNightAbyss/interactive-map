import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/icelake-city',
      name: '冰湖城',
      component: () => import('../views/IcelakeCityMap.vue'),
    },
    {
      path: '/icelake-sew',
      name: '冰湖城下水道',
      component: () => import('../views/IcelakeSewMap.vue'),
    },
    {
      path: '/glevum-pit',
      name: '格雷姆废矿',
      component: () => import('../views/GlevumPitMap.vue'),
    },
    {
      path: '/lonza-fortress',
      name: '龙莎要塞',
      component: () => import('../views/LonzaFortressMap.vue'),
    },
    {
      path: '/mistwharf',
      name: '烟津渡',
      component: () => import('../views/MistwharfMap.vue'),
    },
    {
      path: '/haojing',
      name: '皓京',
      component: () => import('../views/HaojingMap.vue'),
    },
    {
      path: '/outer-peaks',
      name: '山外山',
      component: () => import('../views/OuterPeaksMap.vue'),
    },
    {
      path: '/youlai-alley',
      name: '由来巷',
      component: () => import('../views/YoulaiAlleyMap.vue'),
    },
  ],
})

export default router
