<!-- TOC -->

- [准备](#准备)
  - [NodeJs和npm更新](#nodejs和npm更新)
    - [模块n安装](#模块n安装)
    - [升级NodeJs到最新稳定版](#升级nodejs到最新稳定版)
- [初始化配置](#初始化配置)
  - [package.json](#packagejson)
  - [安装](#安装)
  - [--save-dev](#--save-dev)
  - [webpack](#webpack)
  - [webpack-dev-server](#webpack-dev-server)
  - [export&import](#exportimport)
  - [export default](#export-default)
  - [webpack.config.js](#webpackconfigjs)
  - [启动服务](#启动服务)
    - [npm run](#npm-run)
- [Entry&Output](#entryoutput)
  - [main.js](#mainjs)
- [Hello World !](#hello-world-)
- [加载器](#加载器)
  - [css](#css)
  - [module](#module)
- [.vue单文件组件](#vue单文件组件)
  - [\<style>](#\style)
    - [\<style scoped>](#\style-scoped)
    - [\<style lang=" ">](#\style-lang-)

<!-- /TOC -->

# 准备

## NodeJs和npm更新

### 模块n安装

node有一个模块叫n,用来管理node.js的版本.

```bash
npm install -g n
```

### 升级NodeJs到最新稳定版

```bash
n stable
```

# 初始化配置

## package.json
hex
项目根目录下运行:

```bash
npm init
```

最终会生成一个 *package.json* 文件.

package.json文件一般用于项目的初始化(如启动服务),之后其会去加载webpack.config.js中的内容.

## 安装

## --save-dev

命令中的 `--save-dev` 参数代表以开发模式去安装该软件.

## webpack

在本地局部安装webpack:

```bash
npm install webpack --save-dev
```

--save-dev会作为开发依赖来安装webpack.<br>
安装成功后在package.json中会多出一些配置项:

```json
{
...
  "devDependencies": {
    // 如果存在该节点表示安装成功
    "webpack": "^4.17.2"
  }
}
```

## webpack-dev-server

webpack-dev-server可以在开发环境中提供诸如:

0. 启动服务
0. 热更新
0. 接口代理

局部安装: 

```bash
npm install webpack-dev-server --save-dev
```
安装成功后在package.json中会多出一些配置项:

```json
{
...
  "devDependencies": {
    "webpack": "^4.17.2",
    // 如果存在该节点表示安装成功
    "webpack-dev-server": "^3.1.8"
  }
}
```

## export&import

export和import用于导出和导入模块.<br>
一个模块就是一个js文件,它拥有独立的作用域,里面定义的变量外部无法获取.

```js
//config,js
var Config = {
  version: '1.0.0'
}

export {Config}

//main.js
import {Config} from './config.js'
console.log(Config) //=> {version: '1.0.0'}
```

## export default

如果想自定义名称,或者根本不在意模块的名称是什么,<br>
可以使用export default来输出默认的模块.

```js
//config,js
export default {
  version: '1.0.0'
};

//main.js
import conf from './config.js'
console.log(conf) //=> {version: '1.0.0'}
```

## webpack.config.js


webpack的本质就是一个.js的配置文件,架构的好或差都会体现在这个配置内.

现在在项目的根目录下创建一个js文件webpack.config.js用于存放项目的配置项.

```js
// webpack.config.js
var config = {
  
}

module.exports = config;
```

## 启动服务

使用webpack-dev-server 启动服务的命令格式:

```bash
webpack-dev-server --open --config 需要读取配置项的文件名称
```

--open参数是指在运行命令时在浏览器打开页面.<br>
默认打开地址是127.0.0.1(localhost)及8080端口.<br>
如果需要自定义ip和端口,可以这样启动:

```bash
webpack-dev-server --host ip地址 --port 端口号 --open --config 需要读取配置项的文件名称
```

### npm run

不难发现,命令太长如果每次这样启动不免麻烦,这里可以为将其写进一个 **package.json** 中并设置一个别名.<br>
这样就可以通过 `npm run 别名` 来启动服务了.

如将上述启动命令写入package.json并设置别名为dev.
```json
// package.json
{
  ...
  "scripts": {
    ...
    "dev": "./node_modules/.bin/webpack-dev-server --host 127.0.0.1 --port 8080 --open --config webpack.config.js"
  }
  ...
}
```

通过上述配置就可以通过 `npm run dev` 来启动项目了.


# Entry&Output

webpack配置中最重要的也是必选的来嗯个选项就是入口(entry)和出口(output).<br>
入口的作用时告诉webpack从哪里开始寻找依赖,并且编译.<br>
出口则是用来配置编译后的文件存储位置和文件名.

## main.js

一般会在项目根目录下新建一个main.js作为入口文件.<br>
出口文件也就是编译后的文件一般放在根目录下的dist文件夹(新建)下,文件名和入口文件名保持一致.<br>

现在需要将入口和出口在webpack.config.js中进行配置

```js
// webpack.config.js
var path = require('path');

var config = {
  entry: {
    main: './main'
  },
  output: {
    path: path.join(_dirname, './dist'),
    // publicpath: 指定资源文件引用的目录,如果资源存放在CDN上,这里也可以填CDN的网址.
    publicpath: '/dist/',
    // 在html中引用'/dist/main.js'就可以了.
    filename: 'main.js'
  },
};

module.exports = config;
```

# Hello World !

接下来在根目录下新建index.html(package.json中的配置)来作为SPA的入口.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title> hello webpack </title>
</head>
<body>
  <div id="app">
    Hello World !
  </div>
  <script type="text/javascript" src="/dist/main.js"></script>
</body>
</html>
```

接下来运行 `npm run dev`来启动.

# 加载器

在webpack的世界里,每个文件(编译后生成的文件)都是一个模块,比如.css,.js,.html,.jpg,.less等.<br>
对于不同的模块就要用不同的加载器(loaders)来处理,加载器是webpack最重要的功能.<br>
通过安装不同的加载器可以对各种后缀名的文件进行处理.

## css

webpack加载css样式需要用到style-loader和css-loader.

通过npm来安装:

```bash
npm install css-loader --save-dev
npm install style-loader --save-dev
```

在webpack.config.js中配置laoder:

```js
var config = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;
```

## module

在module对象的rules属性中可以指定一系列的loaders,每一个loader都必须包含test和use两个选项.<br>
其含义为当webpack过程中遇到require()或import语句导入一个后缀为.css的文件时,先将它通过css-loader转换,再通过style-loader转换,然后继续打包.<br>
use选项可以是数组或字符串,如果是数组,它的编译顺序为 **从后往前**.

# .vue单文件组件

.vue单文件组件就是一个后缀为.vue的文件,在webpack中使用vue-loader就可以对.vue格式的文件进行处理.

.vue文件一般包含三部分: \<template>, \<script>, \<style>

## \<style>

### \<style scoped>

scoped属性表示但前的css只对这个组件有效,不应用到整个项目.

### \<style lang=" ">

\<style>还可以结合css预编译一起使用,比如使用Less处理:

\<style lang="less">


```js

```








```bash

```


```js

```

```html

```