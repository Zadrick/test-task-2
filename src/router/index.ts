import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('@/views/Home.vue')
  },
  {
    path: '/cart',
    name: 'Козина',
    component: ()=> import('@/views/Cart.vue')
  },
  {
    path: '/electronics',
    name: 'Электроника',
    component: ()=> import('@/views/Electronics/index.vue')
  },
  {
    path: '/entertainment',
    name: 'Развлечения',
    component: ()=> import('@/views/Entertainment/index.vue')
  },
  {
    path: '/books',
    name: 'Книги',
    component: ()=> import('@/views/Books/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
