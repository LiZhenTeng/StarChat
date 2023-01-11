import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'chat',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Chat/views/Chat.vue')
  },{
    path: '/send-message',
    name: 'SendMessage',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Chat/components/SendMessage.vue')
  },{
    path: '/private-message',
    name: 'PrivateMessage',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Chat/views/PrivateMessage.vue')
  },{
    path: '/chat-login',
    name: 'ChatLogin',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Login.vue')
  },{
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "Index" */ '@/views/User/views/Friends.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
