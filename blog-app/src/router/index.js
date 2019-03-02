import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import Blog from '@/components/Blog'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: ShowBlog
    },
    {
      path: '/addBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      component: Blog
    }
  ]
})
