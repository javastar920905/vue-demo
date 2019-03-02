// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局守卫
// router.beforeEach((to, from, next) => {
//   console.log('from');console.log(from);
//   console.log('to');console.log(to);
//   //判断store.getters.isLogin ===false 
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert("请先登录");
//     next('/login');
//   }
 
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
