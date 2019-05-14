git checkout .&&git pull&&docker build -t  docker-registry:5000/nuxtdemo .

service=nuxtdemo
image=docker-registry:5000/${service}

serviceport=8000

docker rm -f ${service}
# docker images | grep none | awk '{print $3}' | xargs docker rmi -f
# -p linuxport:docker port
docker run -d -m 1G --name  ${service}  -p ${serviceport}:8000 -t ${image}
# docker logs -f --tail 1000  ${service}

