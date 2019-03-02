<template>
  <!-- 内容展示区 -->
    <div  id="blog" class="blog">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>作者:{{blog.author}}</p>
      <p>博客分类:</p>
      <p>
         <template v-for="c in blog.category">
           {{c}}
         </template>
      </p>
      <p>博客内容:</p>
      <p>{{blog.body}}</p>
     
    </div>
</template>
<script>
export default {
  name:"blog",
  data(){
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    console.log(this.$route.params);
    let url="http://jsonplaceholder.typicode.com/posts";
    
    this.$http.get(url+"/"+this.id).then(function(data){
      console.log(data);
      this.blog=data.body;
    })
  }
}
</script>
