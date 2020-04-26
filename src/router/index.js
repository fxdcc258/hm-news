// 路由规则
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/Home.vue'
import Login from 'pages/Login.vue'
import User from 'pages/User.vue'
import Register from 'pages/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/Login' },
    { path: '/Home', component: Home },
    { path: '/Login', component: Login },
    { path: '/User', component: User },
    { path: '/Register', component: Register }
  ]
})
export default router
