import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/loginwithtoken', name: 'loginwithtoken', component: Login },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router