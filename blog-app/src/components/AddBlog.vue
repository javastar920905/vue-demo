<template>
  <div id="add-blog">
    <h2>添加博客</h2>

    <!-- 博客表单 -->
    <form v-if="!saved" action="">
        <label for="">博客标题</label>
        <input type="text" v-model="blog.title" required/>

        <label for="">博客内容</label>
        <textarea type="text" v-model="blog.content" required> </textarea>

        <div id="checkboxes">
          <label for="">vue.js</label>
          <input type="checkbox" v-model="blog.category" value="vue.js"/>
           <label for="">node.js</label>
          <input type="checkbox" v-model="blog.category" value="node.js"/>
           <label for="">react.js</label>
          <input type="checkbox" v-model="blog.category" value="react.js"/>

        </div>

         <label for="">作者</label>
         <select name="" id="" v-model="blog.author">
           <option v-for=" author in authors" > {{author}}</option>
         </select>

        <!-- click.prevent 可以 防止刷新页面-->
         <button v-on:click.prevent="saveBlog">保存博客</button>
    </form>
    <hr/>

    <!-- 内容展示区 -->
    <div v-if="saved" id="preview" class="preview">
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
      <p>{{blog.content}}</p>
     
    </div>
   </div>
</template>

<script>
export default {
  name: 'AddBlog',
  data () {
    return {
      blog:{
        title: 'add blog title',
        content:"",
        category:[],
        author:""
      },
      authors:["zyan","abby","nobody"],
      saved:false
    }
  },
  methods:{
    saveBlog:function(){
      //使用工具网站
      let url="http://jsonplaceholder.typicode.com/posts";

      this.$http.post(url,{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      }).then(data=>{
        console.log(data);
        if(data!=null&&data.body.id!=null){
            this.saved=true;
             console.log("saved");
        }
          
      })
    }
  }
}
</script>

<style scoped>
#add-blog *{
   box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100px;
  padding: 8px;
}
textarea{
  height: 200px;
  width: 500px;
}

#checkboxes label{
  display: inline-block;
  margin-top:0 
}

#checkboxes input{
  display: inline-block;
  margin-right:10px; 
}

button{
  display: block;
  margin: 20px 0px;
  background:crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {margin-top: 10px}
</style>
