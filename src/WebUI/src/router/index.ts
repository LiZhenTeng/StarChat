import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Index.vue')
  },{
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Chat/Index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
