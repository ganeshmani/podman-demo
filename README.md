# Containerizing a node.js application with Podman

## Dockerfile

```
FROM node:8
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["node", "app.js"]
```

## To Run Podman

Install Podman from the official site. (https://github.com/containers/libpod/blob/master/install.md)

```
$ podman build -t podmandemo .

$ podman run -d -p 3333:3333 podmandemo

```

![alt text](https://github.com/ganeshmani/podman-demo/blob/master/demo.png)
