# pizza-app

> demo reference tencent course app

# 项目参考文档
[vue学习笔记](http://note.youdao.com/noteshare?id=81a73f48d7622874aa6ada6446034bc0)

# 项目初始化
## 使用vue-cli 生成项目脚手架

  vue init webpack pizza-app

## 分析创建需要的组件

  Header.vue
  Footer.vue
  Home.vue
  Menu.vue
  Login.vue
  Register.vue

## 使用bootstrap布局页面

  http://www.bootcss.com/ bootstrap 中文网->bootstrap4 中文文档->bootstrap cdn->复制css部分
  https://v4.bootcss.com/ copy 到index.html 粘贴即可

## 编写header.vue 样式

  https://v4.bootcss.com/->快速入门->components->navbar->copy 所需要样式的class

  配置路由跳转:src/router/index.js

  使用router-link进行页面跳转而不是 a标签
  
  <router-link to="/login" class="nav-link">登录</router-link>

## 预览样式

  当前页面依赖: index.html->main.js->app.vue->router下index.js /->home.vue
  在app.vue import header.vue 并当作标签使用,即可预览页面显示












## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

