// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//全局配置
axios.defaults.baseURL=""

Vue.config.productionTip = false
//自定义指令-rainbow
Vue.directive("rainbow",{
  bind(el,binding,vnode){
      el.style.color="#"+Math.random().toString(16).slice(2,8);
  }
})
//自定义过滤器
Vue.filter("to-uppercase",function(value){
  if(value==null)return "";
  return value.toUpperCase();
})
Vue.filter("snippet",function(value){
  if(value==null)return "";
  return value.slice(0,100)+"...";
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
