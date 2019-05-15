// // 使用饿了么ui
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// 然后, 在 nuxt.config.js 内配置 plugins 如下：
// 由于element ui 只运行在客户端,需要设置ssr: false属性
// module.exports = {
//     plugins: [{ src: '@/plugins/element-ui', ssr: false}]
//   }