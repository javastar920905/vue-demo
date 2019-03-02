import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

//export 后外部才能正常import
export const store = new Vuex.Store({
  strict:true,
  state: {
    products:[
      {name:"马云",price:200},
      {name:"马化腾",price:140},
      {name:"马冬梅",price:20},
      {name:"马荣",price:10}
    ]
  },
  getters:{
    saleProducts:(state)=>{
        let saleProducts=state.products.map(
          p=>{
            return {
              name:"**"+p.name+"**",
              price:p.price/2
            }
          }
        );
        return saleProducts;
    }
  },
  mutations: {
    reducePrice:(state,payload)=>{
      //payload 接收commit 中的参数
        state.products.forEach(p => {
          p.price-=payload;
          });
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
        //payload 接收dispatch 中的参数
        context.commit('reducePrice',payload);
    }
  }
});
