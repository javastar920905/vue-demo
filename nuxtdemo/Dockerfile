FROM node:8-alpine
MAINTAINER ouzhx <javastar920905@163.com>

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# 创建app目录,保存我们的代码
RUN mkdir -p /usr/src/node/nuxtdemo
# 设置工作目录
WORKDIR /usr/src/node
# 复制所有文件到 工作目录。
COPY ../nuxtdemo/ /usr/src/node/nuxtdemo/
# 编译运行node项目，使用npm安装程序的所有依赖,利用taobao的npm安装
WORKDIR /usr/src/node/nuxtdemo
# 安装依赖和项目构建
RUN cnpm install &&cnpm install core-js@2&&npm run build
# 暴露container的端口
EXPOSE 8000
# 运行命令
ENTRYPOINT ["sh", "nuxt-start.sh"]
#CMD ["docsify", "serve","docs"]