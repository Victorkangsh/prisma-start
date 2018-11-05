# Prisma起步模板

## 1. 下载并安装依赖

在终端运行如下命令:

```sh
git clone git@github.com:victorkangsh/prisma-start.git
```

进入目录并安装依赖

```sh
cd prisma-start
yarn install
```

## 2. 部署 Prisma server和数据库

详见[prisma中文网址](https://prisma.1wire.com)

```sh
cd prisma
docker-compose up -d
cd ..
yarn prisma deploy
```

没有docker的可以用demo服务器，配置详见[prisma中文网址](https://prisma.1wire.com)

## 3. 运行 GraphQL server

上面deploy好后就编辑自己的datamodel和schema，运行的话命令如下：

```sh
yarn dev
```

## 你的环境变量在 `.env`文件中设置

建议创建 `.env.prod` 文件用于生产环境:

```sh
PRISMA_ENDPOINT="https://api.example.com"
PRISMA_SECRET="mysecret123"
APP_SECRET="appsecret321"
```
