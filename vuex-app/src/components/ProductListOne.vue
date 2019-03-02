<template>
  <div id="product-list-one">
    <h2>product list one</h2>
    
    <ul>
      <li v-for="p in products" :key="p.name">
        <span class="name">{{p.name}}</span>
         <span class="price">{{p.price}}</span>
      </li>
    </ul>

    <button @click="reducePrice(4)">商品减价</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  methods:{
    // reducePrice:function(num){
    //     //this.$store.commit('reducePrice');
    //     this.$store.dispatch('reducePrice',num);
    // }
    ...mapActions([
      'reducePrice'
    ])
  },
  computed:{
    products(){
      return this.$store.state.products
    },
    // saleProducts(){
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      'saleProducts'
    ])
    
   
  }
}
</script>

<style scoped>
#product-list-one{
  background: yellow;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom:30px;
  padding: 10px 20px; 
}
#product-list-one ul{
  list-style-type: none;
  padding:0; 
}
#product-list-one li{
  display: inline-block;
 margin: 5px;
 padding: 20px;
 background: rgba(255, 255, 255, 0.7)
}
.price{
  font-weight: bold;
  color: orange;
  display: block;
}
</style>
