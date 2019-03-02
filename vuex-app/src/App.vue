<template>
  <div id="app">
    <!--父组件传值 -->
    <ProductListOne v-bind:products="products"></ProductListOne>
    <product-list-two v-bind:products="products"></product-list-two>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import ProductListOne from '@/components/ProductListOne';
import ProductListTwo from '@/components/ProductListTwo';

export default {
  name: 'App',
  components:{
    ProductListOne,ProductListTwo
  },
  data(){
    return {
      products:[
        {name:"马云",price:200},
        {name:"马化腾",price:140},
        {name:"马冬梅",price:20},
        {name:"马荣",price:10}
      ]
    }
  }
}
</script>

<style>

</style>
