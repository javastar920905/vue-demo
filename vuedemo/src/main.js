// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from './ajax'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(VueResource)
axios.interceptors.request.use(function(request){
  console.log("axios request init")
  return request
})
axios.interceptors.response.use(function(response){
  console.log("axios request resp")
  return response
})
// 超时设置


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.message)
    this.$axios.get('static/china.json').then((response) => {
      console.log(response.data); this.data = response.data
    }, (response) => { // error
      console.log(response); console.log('axios err')
    })
  

    // this.$http.get('static/china.json').then(res => {
    //   console.log(res.body)
    //   console.log("json数据为:" + res.body)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
    // })
  },
  mounted:function(){
  
},
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3=new Vue({
  el:'#app-3',
  data:{
    seen:true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '创建激动人心的代码' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods:{
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
  
})

// 定义一个被命名为 todo-item 的新组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个 "prop"，
  // 类似于一个自定义属性。
  // 此 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '其他人类食物' }
    ]
  }
})
