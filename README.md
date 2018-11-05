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

配置在`.env`文件中，endpoint已注释，docker用户把注释去掉即可，prisma cloud用户在创建服务后修改即可。

## 2. 部署 Prisma server和数据库

详见[prisma中文网址](https://prisma.1wire.com)

虽然dev依赖中有，但还是尽量确保你已经全局安装了prisma和graphqlgen@beta

docker用户需要先执行`docker-compose up -d`

没有docker的可以用demo服务器，配置详见[prisma中文网址](https://prisma.1wire.com)，直接执行以下命令即可创建。

```sh
prisma deploy
```

此时会得到generate目录和tmp-resolvers目录，prisma client和resolver脚手架已经创建好了，将tmp-resolvers目录拷贝到resolvers目录，然后将其中的代码修改为自己的业务逻辑即可。

## 3. 运行 GraphQL server

上面deploy好后就编辑自己的datamodel和schema，运行的话命令如下：（确保env文件endpoint修改为你的服务器地址）

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
