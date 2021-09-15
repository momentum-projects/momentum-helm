# Docker

## Installing

1. [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Getting Started

1. [Docker Architecture](https://docs.docker.com/get-started/overview/#docker-architecture)
1. Running a container
1. What is a container?
1. Downloading Images

`docker run --rm hello-world`

1. Docker vs Podman
1. `docker-compose`
1. Running Postgres via `docker-compose`
1. Using `psql` via the console

## History of docker commands we ran

```bash
docker run hello-world
docker export hello-world > export.tgz
docker export --help hello-world > export.tgz
docker export --help
docker
docker save hello-world > export.tar
file export.tar
mkdir d
cd
j link
ls
cd d
ls
tar xvf ../export.tar
ls
tree
cd a803ca04f00ecd1c10fb4978f7a963d1461f4225e568901bc6990cb46a3e04be/
ls
tar xvf layer.tar
ls -al
file hello
./hello
cd ..
ls
cd ..
rm -rf d
docker ps -a
docker start 392307b88a15
docker rm 392307b88a15
docker ps
docker ps -a
docker run --rm hello-world
docker ps -a
docker run hello-world
dcoker ps -a
docker ps -a
docker rm ad2140a1fa58
docker run -it ubuntu ls
docker ps -a
docker ps -a
docker exec --help
docker exec -it 0c4308727c9a bash
docker rm 0c4308727c9a
docker run -it --rm ubuntu bash
docker run -it --rm ubuntu bash
docker images
docker pull ubuntu
docker pull ubuntu:xenial
docker run -it --rm ubuntu:xenial bash
docker help run
docker run -mit 40000 --rm ubuntu:xenial bash
docker run -itm 40000 --rm ubuntu:xenial bash
docker run -itm 40000000 --rm ubuntu:xenial bash
docker run --interactive --tty --rm ubuntu:xenial bash
```
