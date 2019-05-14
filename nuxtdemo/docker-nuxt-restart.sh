git pull
docker build -t  docker-registry:5000/nuxtdemo .

service=nuxtdemo
image=docker-registry:5000/${service}

serviceport=3001

docker rm -f ${service}
# docker images | grep none | awk '{print $3}' | xargs docker rmi -f
docker run -m 1G --name  ${service}  -p ${serviceport}:${serviceport} -t ${image}
# docker logs -f --tail 1000  ${service}

