<template>
  <nav>
    <ul>
      <li>
         <router-link exact to="/">首页</router-link>
      </li>
       <li>
        <router-link exact to="/addBlog">写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name:"BlogHeader"
}
</script>
<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  padding: 12px;
}
nav{
  background: crimson;
  margin-bottom:40px;
  padding: 30px 0; 
}
.router-link-active{
  background: rgb(255, 255, 255,088);
  color: #444;
}
</style>


