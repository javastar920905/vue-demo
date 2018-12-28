// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue 模块,App组件以及vue-router
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'; //  引入vuex实例
import Mock from './mock'; // 引入mock模块
Mock.start(); //并且执行初始化函数

// 关闭生产模式下给出的提示
Vue.config.productionTip = false


// 创建一个 Vue 的根实例
new Vue({
  el: '#app', //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router,// 注入路由配置。
  store, //注入vuex
  components: { App },// 注入组件
  template: '<App/>'//配置根模板 即打开页面显示那个组件
})
