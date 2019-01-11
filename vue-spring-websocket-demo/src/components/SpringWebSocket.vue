<template>
  <div class="test">
      spring websocket demo
  </div>
  </template>
  <script>
  export default {    
    name : 'test',
    data() {     
         return {        websock: null,
      }
    },
    created() {      
        this.initWebSocket();
    },
    destroyed() {      
        //this.websock.close() //离开路由之后断开websocket连接
    },    
    methods: {
      initWebSocket(){ //初始化weosocket
        const currentProtocol = window.location.protocol;
        let result = '';
        if (currentProtocol === 'http:') {
            if ('WebSocket' in window) {
            result = 'ws://';
            } else {
            result = 'http://';
            }
        } else {
            if ('WebSocket' in window) {
                result = 'wss://';
            } else {
                result = 'https://';
            }
        }
 
        let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXllcjEwMyIsImlwIjoiNTguNjEuMzAuMjkiLCJpc1VudXN1YWwiOmZhbHNlLCJjbGllbnQiOiJtb3ppbGxhLzUuMCAod2luZG93cyBudCAxMC4wOyB3aW42NDsgeDY0KSBhcHBsZXdlYmtpdC81MzcuMzYgKGtodG1sLCBsaWtlIGdlY2tvKSBjaHJvbWUvNzEuMC4zNTc4Ljk4IHNhZmFyaS81MzcuMzYiLCJpc3N1ZURhdGUiOjE1NDcxODAzOTkzODMsInVzZXJJZCI6MTAwNzU1LCJpc1dlY2hhdEF1dGhvcml6YXRpb24iOiJkZW55In0.GbiJ4-S8gtL0-zYyyazn0G2ewbfsm5cSZuxYTbbV3u8";

        const wsuri = result+"127.0.0.1:7114/msg/ws?pageName=pageHeade&token="+token;        
        this.websock = new WebSocket(wsuri);        
        this.websock.onmessage = this.websocketonmessage;        
        this.websock.onopen = this.websocketonopen;       
        this.websock.onerror = this.websocketonerror;        
        this.websock.onclose = this.websocketclose;
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        let actions = {"test":"12345"}; 
        console.log('数据发送中...')       
        this.websocketsend(JSON.stringify(actions));
        console.log('数据发送完成...')  
      },
      websocketonerror(){//连接建立失败重连
      console.log("建立websocket连接失败");
        //this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        //const redata = JSON.parse(e.data);
        console.log('数据已接收...')
        console.log(e);
      },
      websocketsend(Data){//数据发送
        this.websock.send(Data);
        console.log('数据发送中...')       
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
    },
  }
  </script>
  <style>
 </style>