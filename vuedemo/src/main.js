import Vue from 'vue'
import router from './router'
import store from './store/store'

//开启debug模式
Vue.config.debug = true
window.log = console.log

// let data = {
//   el:'#app',
//   router,
//   store
// }
// //创建一个app实例，并且挂载到选择符#app匹配的元素上
// new Vue(data).$mount('#app')

new Vue({
  el:'#app',
  template: 
      `<div>
          <span>text1:</span> {{text1}}
          <span>text2:</span> {{text3}}
      </div>`,
  data: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3'
  }
});

Vue.prototype.post = function (url,params,fn) {
  var xhr = new XMLHttpRequest()
  xhr.open("POST", url, true)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    var XMLHttpReq = xhr;
    if (XMLHttpReq.readyState == 4) {
      if (XMLHttpReq.status == 200) {
        var text = XMLHttpReq.responseText
        var res = JSON.parse(text)
        fn(res)
      }
    }
  }
  xhr.send(params)
}

