<template>
  <div id="product-list-two">
    <h2>product list two</h2>
    
     <ul>
      <li v-for="p in products" v-key="p.name">
        <span class="name">{{p.name}}</span>
         <span class="price">{{p.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-two',
  // 接收属性传值
  props:["products"],
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
#product-list-two{
  background: #D1E4FF;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom:30px;
  padding: 10px 20px; 
}
#product-list-two ul{
  list-style-type: none;
  padding:0; 
}
#product-list-two li{
 margin: 10px;
 padding: 20px;
 background: rgba(255, 255, 255, 0.7)
}
.price{
  font-weight: bold;
  color: orange;
  display: block;
}
</style>
