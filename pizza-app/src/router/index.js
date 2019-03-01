import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/about/About'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',component: Home},
    { path: '/about',component: About},
    { path: '/admin',component: Admin},
    { path: '/login',component: Login},
    { path: '/register',component: Register},
    { path: '/menu',component: Menu}
    
    ,{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
