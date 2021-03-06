import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/windows/Main'
import Setting from '@/windows/Setting'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/main',
}, {
  path: '/main',
  name: 'main',
  component: Main
}, {
  path: '/setting',
  name: 'setting',
  component: Setting
}]

const router = new VueRouter({routes})

export default router
