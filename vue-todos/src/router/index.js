import Vue from 'vue'// 导入Vue
import Router from 'vue-router'// 导入vue-router 库
import Layouts from '@/components/Layouts' // 导入layouts.vue 组件
import HelloWorld from '@/components/HelloWorld' 
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',//访问路径
      name:'layouts',
      component:Layouts, //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
      children:[{
        path:'/todo/:id',
        name:'todo',
        component:Todo
      }]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
