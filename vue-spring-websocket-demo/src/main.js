// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// webSocket 实现方式二 全局定义  但是依然在每个页面调用,没有实现单例
// Vue.prototype.initWebSocket = function() {
//   const currentProtocol = window.location.protocol;
//     let result = '';
//     if (currentProtocol === 'http:') {
//         if ('WebSocket' in window) {
//         result = 'ws://';
//         } else {
//         result = 'http://';
//         }
//     } else {
//         if ('WebSocket' in window) {
//             result = 'wss://';
//         } else {
//             result = 'https://';
//         }
//     }
 
//   let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXllcjEwMyIsImlwIjoiNTguNjEuMzAuMjkiLCJpc1VudXN1YWwiOmZhbHNlLCJjbGllbnQiOiJtb3ppbGxhLzUuMCAod2luZG93cyBudCAxMC4wOyB3aW42NDsgeDY0KSBhcHBsZXdlYmtpdC81MzcuMzYgKGtodG1sLCBsaWtlIGdlY2tvKSBjaHJvbWUvNzEuMC4zNTc4Ljk4IHNhZmFyaS81MzcuMzYiLCJpc3N1ZURhdGUiOjE1NDcxODAzOTkzODMsInVzZXJJZCI6MTAwNzU1LCJpc1dlY2hhdEF1dGhvcml6YXRpb24iOiJkZW55In0.GbiJ4-S8gtL0-zYyyazn0G2ewbfsm5cSZuxYTbbV3u8";
    
//   const url =  result+"127.0.0.1:7114";
//   if ('WebSocket' in window) {
//     Vue.prototype.websock = new WebSocket(url + '/msg/ws?pageName=pageHeader&busiType=unReadCount1&token=' + token);
//   } else {
//     console.log(222)
//     Vue.prototype.websock = new SockJS(url + '/msg/ws/sockjs?pageName=pageHeader&busiType=unReadCount1&token=' + token);
//   }

//   Vue.prototype.websock.onopen = () => {
//     // Web Socket 已连接上，使用 send() 方法发送数据
//     let actions = {"test":"12345"}; 
//     console.log('数据发送中...')       
//     Vue.prototype.websock.send(JSON.stringify(actions));
//     console.log('数据发送完成...')  
//   }
//   Vue.prototype.websock.onmessage = evt => {
//     //const redata = JSON.parse(e.data);
//     console.log('数据已接收...')
//     console.log(evt);
//   }
//   Vue.prototype.websock.onclose = function () {
//     // 关闭 websocket
//     console.log('连接已关闭...')
//   }
 
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
