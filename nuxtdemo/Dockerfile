FROM node:8-alpine
MAINTAINER ouzhx <javastar920905@163.com>

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# 创建app目录,保存我们的代码
RUN mkdir -p /usr/src/node/nuxtdemo
# 设置工作目录
WORKDIR /usr/src/node
# 复制所有文件到 工作目录。ADD 命令自动解压
ADD ./nuxtdemo.zip /usr/src/node/nuxtdemo/
ADD ./*.sh /usr/src/node/nuxtdemo/
# 编译运行node项目，使用npm安装程序的所有依赖,利用taobao的npm安装
WORKDIR /usr/src/node/nuxtdemo
# 安装依赖和项目构建  run 多条命令 
#RUN /usr/local/bin/cnpm install && /usr/local/bin/cnpm install core-js@2
# 执行命令报错,可能和 WORKDIR 改变有关,一直有/bin/sh
# The command '/bin/sh -c /usr/local/bin/cnpm install && cnpm install core-js@2' returned a non-zero code: 1
# 运行命令
ENTRYPOINT ["sh", "nuxt-start.sh"]
# 暴露container的端口
EXPOSE 8000
#CMD ["docsify", "serve","docs"]