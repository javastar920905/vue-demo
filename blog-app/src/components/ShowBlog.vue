<template>
  <div id="ShowBlog">
   <h1>博客总览</h1>

<input type="text" v-model="search" placeholder="搜索文章标题" />
 <!-- 博客列表 -->
   <template v-for="blog in filterBlogs" v-key="blog.id">
      <div class="single-blog"> 
        <router-link v-bind:to="'/blog/'+blog.id">
          <h2 v-rainbow>{{blog.title}}</h2>
        </router-link>
        <p>by-{{blog.userId}}</p>
        <article>{{ blog.body |snippet}}</article>
      </div>
   </template>
  </div>
</template>

<script>

export default {
  name: 'ShowBlog',
  data(){
    return {
      blogs:[],
      search:''
    }
  },
  computed:{
    //博客过滤
    filterBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    }
  },
  created(){
     let url="http://jsonplaceholder.typicode.com/posts";
    this.$http.get(url)
    .then(data=>{
      console.log(data)
      this.blogs=data.body.slice(0,10);
    });
  }
}
</script>

<style>
#ShowBlog{
  max-width: 800px;
  margin: 0 auto;
}
#ShowBlog a{
  text-decoration: none;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
