# nuxtdemo

## 参考文档
* [nuxt seo 总结 有道云笔记](http://note.youdao.com/noteshare?id=aff5329b589939c258caf04b7c19b9b3) 
* [vue-Nuxt.js 文档](https://zh.nuxtjs.org/guide/directory-structure/)

* NUXT为什么？  vue开发的SPA（单页应用）不利于搜索引擎的SEO优化。
* NUXT适用于：  Nuxt.js适合作新闻、博客、电影、咨询等需要搜索引擎提供流量的项目。

## nuxt 和 vue 编写区别
* vue-cli入口文件是app.vue，在nuxt开发当中则是./layout/default.vue
* nuxt按照 pages 文件夹的目录结构自动生成路由

## 项目启动步骤

``` bash
# 安装依赖
$ cnpm install
cnpm install core-js@2

Footer 组件和Top组件需要额外依赖
    cnpm install stylus
    cnpm install --save-dev stylus-loader  
    cnpm i element-ui -S 安装饿了么ui

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## 解决启动报错问题
* npm run build 报错  Can't resolve 'core-js/modules/es6.regexp.xxx
> 安装缺失依赖 cnpm install core-js@2
* Module not found: Error: Can't resolve 'stylus-loader' 
> cnpm install --save-dev stylus-loader
* nuxt HTMLElement is not define nuxt.js
> [解决参考文档](https://blog.csdn.net/qq_35023116/article/details/89575997)

## 使用docker 进行发布
* 把项目打包成zip包 排除 node_modules和.nuxt目录
* mkdir nuxtdemo
    * cd nuxtdemo/
    * 服务器端使用git clone 代码库
        * git clone https://github.com/javastar920905/vue-demo.git 
    * 进入到nuxtdemo 目录 cd vue-demo/nuxtdemo 
    * 手动build 镜像(node 镜像,cnpm cp项目代码到docker容器)
        * git pull 更新代码 
        * 构建镜像 docker build -t  docker-registry:5000/nuxtdemo .
        * 镜像调试 
            * docker run -it --net="host" --name npm-test  docker-registry:5000/nuxtdemo tail -f /etc/hosts
            * docker run -it --name npm-test -p 8001:8000 docker-registry:5000/nuxtdemo tail -f /etc/hosts
            * docker exec -it npm-test sh
        * 移除调试容器 docker rm -f npm-test 
* 编写 docker 容器启动脚本 docker-nuxt-restart.sh
    * 修改服务名称 端口 镜像名称
    * 启动容器 
        * chmod +x docker-nuxt-restart.sh && sh docker-nuxt-restart.sh
* 解决访问异常问题
    * Docker: curl 主机:端口  connection reset by peer
    * nuxt.config.js 配置server :{host: '0.0.0.0'}
    * 解决 docker run --net="host" 当指定了主机网络模式以后,-p 就没有用了,直接使用EXPOSE 3000的端口
    

## 如何和已有系统整合
    * [官方github issuse - How to add nuxt to an already existing project?](https://github.com/nuxt/nuxt.js/issues/2596)
        * 存在一个已有vue项目如何改造成nuxt?
            * 新建nuxt项目,copy 已有代码到nuxt
            * 组件内使用到浏览器相关api的部分需要判断环境
    * [Vue改造nuxt项目的详细教程](http://www.speedcode.cn/ArticleDetail?id=89)
    * [使用Nuxt.js改造已有项目](https://blog.csdn.net/wopelo/article/details/80486874)
    * [使用Nuxt.js改善现有项目 ](https://zhuanlan.zhihu.com/p/30025987)
        * 除了页面入口之外，其他的组件都可以在浏览器和服务端复用。需要改造的主要有两处：
        * 组件内使用到浏览器相关api的部分需要判断环境，比如初始化 iscroll，测量宽度等
        * 原来组件内直接从 url 上获取 query 参数的地方现在要改为由父级传入

    * 共用header 和登录状态
    * 共享登录状态方案二:
        * 传递token,不同域名能获取到token吗?
    * 共享登录状态方案一: cookies 存放在 .javabus.cn 下 
        * nuxt 操作cookie 方式不一样 ,没有document对象
        * article.javabus.cn 和 www.javabus.cn 可以实现共享cookie
        * 会出现问题:dev 和test 环境也共享cookie了, 不过可后台判断这两种环境 存放在完整cookie路径下