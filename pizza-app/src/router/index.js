import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Menu from '@/components/Menu'

// 二级路由
import About from '@/components/about/About'
import History from '@/components/about/History'
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import OrderGuid from '@/components/about/OrderGuid'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',components:{
      default:Home,
      "orderGuid":OrderGuid,
      "delivery":Delivery,
      "history":History
    }},
    { path: '/admin',component: Admin},
    { path: '/login',component: Login},
    { path: '/register',component: Register},
    { path: '/menu',component: Menu},
    { path: '/about',component: About,redirect:'/about/contact',
      children:[
        {path:'/about/contact',component:Contact},
        {path:'/about/history',component:History},
        {path:'/about/delivery',component:Delivery},
        {path:'/about/orderGuid',component:OrderGuid},
      ]
    },
    
    ,{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    //return { x: 0, y: 100 };
    return {selector:'.btn'}//自动滚动到带.btn样式的按钮位置
  }
})


