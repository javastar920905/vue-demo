# nuxtdemo

## 参考文档
* [nuxt seo 总结](http://note.youdao.com/noteshare?id=aff5329b589939c258caf04b7c19b9b3) 
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
    

