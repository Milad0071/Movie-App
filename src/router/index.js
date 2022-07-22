import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/layout/body/HomePage.vue'
import DetailPage from '@/views/layout/body/DetailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/details/:post(\\d+)',
    name: 'details',
    component: DetailPage
  }
]

const router = new VueRouter({
  routes
})

export default router
