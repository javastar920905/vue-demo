import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SpringWebSocket from '@/components/SpringWebSocket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:SpringWebSocket
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
