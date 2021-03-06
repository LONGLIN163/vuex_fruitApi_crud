import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '@/components/Pages/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
