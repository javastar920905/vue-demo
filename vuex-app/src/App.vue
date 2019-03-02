<template>
  <div id="app">
    <!--父组件传值 -->
    <ProductListOne ></ProductListOne>
    <product-list-two ></product-list-two>
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
     
    }
  }
}
</script>

<style>

</style>
