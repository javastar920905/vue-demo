<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'

export default {
  name: 'App',
  components:{
    BlogHeader,AddBlog,ShowBlog
  }
}
</script>

<style>


</style>
