
docker system prune -a --volumes
docker build -t vue-nginx .
docker run --rm -it -p 8080:80 vue-nginx
