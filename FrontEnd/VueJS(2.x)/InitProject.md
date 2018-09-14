<!-- TOC -->

- [简介](#简介)
  - [文件结构概要](#文件结构概要)
  - [router](#router)
  - [src](#src)
  - [软件环境](#软件环境)
- [项目初始化](#项目初始化)
  - [创建文件夹](#创建文件夹)
  - [npm init](#npm-init)
- [package.json](#packagejson)
  - [scripts](#scripts)
  - [npm install](#npm-install)
- [webpack.config.js](#webpackconfigjs)
  - [创建webpack.config.js文件](#创建webpackconfigjs文件)
  - [webpack.config.js配置](#webpackconfigjs配置)
- [src](#src-1)
  - [app.js](#appjs)
  - [app.vue](#appvue)
- [router](#router-1)
  - [views](#views)
    - [index.vue](#indexvue)
  - [.babelrc](#babelrc)

<!-- /TOC -->

# 简介

> 记录基于webpack,VueJs等初始化项目的步骤.

## 文件结构概要

```
.
├── package.json
├── webpack.config.js
├── node_modules
├── src
│   ├── app.js
│   └── app.vue
├── router
│   └── views
│       └── index.vue
└── .babelrc 

```
## router

router下面存放组件.

## src

src下面存放项目项目文件.

## 软件环境

> 下面为项目用到的插件及具体版本号.

名称|版本
-|-
vue|2.5.17
vue-router|3.0.1
vuex|3.0.1
babel|6.23.0
babel-cli|6.26.0
babel-core|6.26.3
babel-loader|7.1.2
babel-plugin-transform-runtime|6.23.0
babel-preset-env|1.6.1
babel-preset-es2015|6.24.1
babel-runtime|6.26.0
clean-webpack-plugin|0.1.19
css-loader|1.0.0
csv-loader|3.0.2
extract-text-webpack-plugin|4.0.0-beta.0
file-loader|2.0.0
html-webpack-plugin|3.2.0
lodash|4.17.10
now|11.4.1
papaparse|4.6.0
style-loader|0.23.0
vue-hot-reload-api|2.3.0
vue-loader|15.4.1
vue-style-loader|4.1.2
vue-template-compiler|2.5.17
vue-template-loader|1.0.0
webpack|4.17.2
webpack-cli|3.1.0
webpack-dev-server|3.1.8
xml-loader|1.2.1

# 项目初始化

> 纪要

0. 创建文件夹
0. npm init

## 创建文件夹

```bash
mkdir ProjectName
cd ProjectName
```

## npm init

```bash
# 参数y用于跳过格式,直接全部同意(yes)
npm init -y
```

# package.json

项目初始化完成后在目录下会生成一个package.json文件.<br>
其作用和Ruby中的Gemfile类似.

package.json示例:

```json
{
  "name": "ProjectName",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## scripts

scripts用于存放项目命令.<br>
可以通过 `npm run ScriptName`来执行命令

项目将使用webpack-dev-server启动服务,这里要在 *"scripts"*中添加两条启动命令:

```json
// ...
"scripts": {
  // ...
  "build": "webpack",
  // histroy-api-fallback选项代表启用HTML5的History路由模式
  "start": "webpack-dev-server --open --histroy-api-fallback"
}
// ...
```

如上述的start命令可以通过 `npm run start`开启动服务.

## npm install

完整的配置文件如下:

```json
{
  "name": "ProjectName",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open --histroy-api-fallback"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^6.26.0",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "csv-loader": "^3.0.2",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "lodash": "^4.17.10",
    "now": "^11.4.1",
    "papaparse": "^4.6.0",
    "style-loader": "^0.23.0",
    "vue-hot-reload-api": "^2.3.0",
    "vue-loader": "^15.4.1",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.17",
    "vue-template-loader": "^1.0.0",
    "webpack": "^4.17.2",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8",
    "xml-loader": "^1.2.1"
  },
  "dependencies": {
    "vue": "^2.5.17",
    "vue-router": "^3.0.1",
    "vuex": "^3.0.1"
  }
}

```
npm install用于安装项目所需插件.<br>
现在执行 npm install来安装这些插件.

# webpack.config.js

正如其后缀所述,webpack.config.js用于配置和管理项目中用到的插件.

> 纪要

0. 创建webpack.config.js文件
0. webpack.config.js配置


## 创建webpack.config.js文件

项目目录下创建webpack.config.js文件:

```bash
touch webpack.config.js
```

## webpack.config.js配置

配置文件完整如下:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  mode: "development",
  devtool: 'inline-source-map',// 追踪错误和警告(仅用于开发模式)
  // 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist',
    hot: true //热更新配置(仅用于开发模式)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Vuejs'
    }),
    new ExtractTextPlugin("app.css"),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(), //使用webpack内置的HMR插件(模块热替换(Hot Module Replacement 或 HMR))(仅用于开发模式)
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
};
```


# src

## app.js

作为入口文件,将初始化和配置入口页面的配置.

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { resolve } from 'url';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

function component() {

  var element = document.createElement("div"); 
  element.setAttribute("id","app");

  return element;
}

document.body.appendChild(component());


// 路由配置
const Routers = [
  {
    path: '/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../router/views/index.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/index'
  }
];

const RouterConfig = {
  // mode: 'history' // 需要服务端的支持
  routes: Routers
};

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

// 路由配置end

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

```

## app.vue

为入口文件提供所需VueJs代码.

```js
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>

```

# router

## views

router/views文件夹用于存放同名路由所对应的组件.

### index.vue

```html
<template>
  <div>
    <h1>HELLO WORLD</h1>
  </div>
</template>

<script>
  export default {
    
  }
</script>

```


## .babelrc

```json
{
  "presets": ["es2015"],
  "plugins": ["transform-runtime"],
  "comments": false
}
```


