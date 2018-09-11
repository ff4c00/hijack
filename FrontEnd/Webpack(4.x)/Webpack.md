<!-- TOC -->

- [安装](#安装)
- [概念](#概念)
  - [入口(entry)](#入口entry)
  - [输出(output)](#输出output)
  - [loader](#loader)
  - [插件(plugins)](#插件plugins)
  - [模式](#模式)
- [入口起点(entry points)](#入口起点entry-points)
  - [多页面应用程序](#多页面应用程序)
- [输出(output)](#输出output-1)
  - [多个入口起点](#多个入口起点)
- [模式(mode)](#模式mode)
- [loader](#loader-1)
  - [实现方式](#实现方式)
    - [使用配置加载CSS和TypeScript文件](#使用配置加载css和typescript文件)
    - [内联](#内联)
    - [CLI](#cli)
  - [特性](#特性)
  - [解析loader](#解析loader)
- [模块(modules)](#模块modules)
  - [支持模块类型](#支持模块类型)
  - [模块解析(module resolution)](#模块解析module-resolution)
    - [解析规则](#解析规则)
      - [绝对路径](#绝对路径)
      - [相对路径](#相对路径)
      - [模块路径](#模块路径)

<!-- /TOC -->

# 安装


# 概念

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时,它会递归地构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块,然后将所有这些模块打包成一个或多个 bundle。

## 入口(entry)

入口起点(entry point)指示 webpack 应该使用哪个模块,来作为构建其内部依赖图的开始。进入入口起点后,webpack 会找出有哪些模块和库是入口起点(直接)间接)依赖的。
每个依赖项随即被处理,最后输出到称之为 bundles 的文件中.

```js

const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```
可以通过在 webpack 配置中配置 entry 属性,来指定一个入口起点(或多)入口起点)。默认值为 ./src。

```js

const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

```js
// webpack.config.js
module.exports = {
  // 根据应用程序的特定需求,可以以多种方式配置 entry 属性.
  entry: './path/to/my/entry/file.js'
};
```

## 输出(output)

output 属性告诉 webpack 在哪里输出它所创建的 bundles,以及如何命名这些文件,默认值为 ./dist。基本上,整个应用程序结构,都会被编译到指定的输出路径的文件夹中。可以通过在配置中指定一个 output 字段,来配置这些处理过程:

```js
// webpack.config.js
// 导入的 path 模块是一个 Node.js 核心模块,用于操作文件路径.
const path = require('path');

module.exports = {
  // 根据应用程序的特定需求,可以以多种方式配置 entry 属性.
  entry: './path/to/my/entry/file.js'
  // 通过 output.filename 和 output.path 属性,来告诉 webpack bundle 的名称,以及我们想要 bundle 生成(emit)到哪里.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```


## loader

loader被用于转换某些类型的模块.

loader 让 webpack 能够去处理那些非 JavaScript 文件(we)pack 自身只理解 JavaScript)。loader 可以将所有类型的文件转换为 webpac

```js

const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```k 能够处理的有效模块.<br>
本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图(和最)的 bundle)可以直接引用的模块。

```js

const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```
在更高层面,在 webpack 的配置中 loader 有两个目标:

0. test 属性,用于标识出应该被对应的 loader 进行转换的某个或某些文件.
0. use 属性,表示进行转换时,应该使用哪个 loader.

```js
// webpack.config.js
// 导入的 path 模块是一个 Node.js 核心模块,用于操作文件路径.
const path = require('path');

module.exports = {
  // 根据应用程序的特定需求,可以以多种方式配置 entry 属性.
  entry: './path/to/my/entry/file.js'
  // 通过 output.filename 和 output.path 属性,来告诉 webpack bundle 的名称,以及我们想要 bundle 生成(emit)到哪里.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      // test 属性,用于标识出应该被对应的 loader 进行转换的某个或某些文件.
      // use 属性,表示进行转换时,应该使用哪个 loader.
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

在上述配置中,对一个单独的module对象定义了rules属性,里面包含两个必须属性:test和use。这告诉webpack编译器(compiler):

当碰到「在require()/import语句中被解析为'.txt'的路径」时,在对它打包之前,先使用raw-loader转换一下。

在webpack配置中定义loader时,要定义在module.rules中,而不是rules.

## 插件(plugins)

插件是webpack的支柱功能,webpack自身也是构建于此,插件目的在于解决loader无法实现的其他事.

插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。

想要使用一个插件,只需要require()它,然后把它添加到plugins数组中。多数插件可以通过选项(option)自定义。也可以在一个配置文件中因为不同目的而多次使用同一个插件,这时需要通过使用new操作符来创建它的一个实例.

```js
// webpack.config.js
// 导入的 path 模块是一个 Node.js 核心模块,用于操作文件路径.
const path = require('path');
// 通过 npm 安装
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// 用于访问内置插件
const webpack = require('webpack');

module.exports = {
  // 根据应用程序的特定需求,可以以多种方式配置 entry 属性.
  entry: './path/to/my/entry/file.js'
  // 通过 output.filename 和 output.path 属性,来告诉 webpack bundle 的名称,以及我们想要 bundle 生成(emit)到哪里.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      // test 属性,用于标识出应该被对应的 loader 进行转换的某个或某些文件.
      // use 属性,表示进行转换时,应该使用哪个 loader.
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

## 模式

```js
// webpack.config.js
// 导入的 path 模块是一个 Node.js 核心模块,用于操作文件路径.
const path = require('path');
// 通过 npm 安装
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// 用于访问内置插件
const webpack = require('webpack');

module.exports = {
  // 根据应用程序的特定需求,可以以多种方式配置 entry 属性.
  entry: './path/to/my/entry/file.js'
  // 通过 output.filename 和 output.path 属性,来告诉 webpack bundle 的名称,以及我们想要 bundle 生成(emit)到哪里.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      // test 属性,用于标识出应该被对应的 loader 进行转换的某个或某些文件.
      // use 属性,表示进行转换时,应该使用哪个 loader.
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  // 通过选择development或production之中的一个,来设置mode参数,可以启用相应模式下的webpack内置的优化
  mode: 'production'
};
```

# 入口起点(entry points)

## 多页面应用程序

```js
// webpack.config.js
const config = {
  entry: {
    // 告诉webpack需要3个独立分离的依赖图
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};

module.exports = config;
```
在多页应用中,(每当页面跳转时)服务器将为你获取一个新的 HTML 文档。页面重新加载新文档,并且资源被重新下载.

# 输出(output)

配置output选项可以控制webpack如何向硬盘写入编译文件。注意,即使可以存在多个入口起点,但只指定一个输出配置。

在webpack中配置output属性的最低要求是,将它的值设置为一个对象,包括以下两点:

0. filename用于输出文件的文件名.
0. 目标输出目录path的绝对路径.

```js
// webpack.config.js

const config = {
  output: {
    filename: 'bundle.js',
    path: '/home/proj/public/assets'
  }
};

module.exports = config;
```

此配置将一个单独的 bundle.js 文件输出到 /home/proj/public/assets 目录中.

## 多个入口起点

```js
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}

// 写入到硬盘:./dist/app.js, ./dist/search.js
```

# 模式(mode)

提供 mode 配置选项,告知 webpack 使用相应模式的内置优化.

只在配置中提供 mode 选项:

```js
module.exports = {
  mode: 'production'
};
```

选项|描述
-|-
development|会将process.env.NODE_ENV的值设为development.启用:<br>NamedChunksPlugin<br>NamedModulesPlugin.
production|会将process.env.NODE_ENV 的值设为 production.启用:<br> FlagDependencyUsagePlugin<br> FlagIncludedChunksPlugin<br> ModuleConcatenationPlugin<br> NoEmitOnErrorsPlugin<br> OccurrenceOrderPlugin<br> SideEffectsFlagPlugin<br>UglifyJsPlugin


# loader

loader用于对模块的源代码进行转换。loader可以使你在import或"加载"模块时预处理文件。因此,loader类似于其他构建工具中 `任务(task)` ,并提供了处理前端构建步骤的强大方法。loader可以将文件从不同的语言(如TypeScript)转换为JavaScript,或将内联图像转换为data URL。loader甚至允许你直接在JavaScript模块中import CSS文件.



## 实现方式 

实现方式|操作
-|-
配置(推荐)|在webpack.config.js文件中指定loader.
内联|在每个import语句中显式指定loader.
CLI|在shell命令中指定它们.

### 使用配置加载CSS和TypeScript文件

可以使用loader告诉webpack加载CSS文件,或者将TypeScript转为JavaScript。为此,首先安装相对应的loader:

```bash
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

然后指示webpack对每个.css使用css-loader,以及对所有.ts文件使用ts-loader:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};
```

### 内联

可以在import语句或任何等效于"import"的方式中指定loader。使用 `!` 将资源中的loader分开。分开的每个部分都相对于当前目录解析.

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

> 尽可能使用 module.rules,因为这样可以减少源码中的代码量,并且可以在出错时,更快地调试和定位 loader 中的问题.

### CLI

```bash
# 对.jade文件使用jade-loader,对.css文件使用style-loader和css-loader
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

## 特性

0. loader支持链式传递。能够对资源使用流水线(pipeline)。一组链式的loader将按照相反的顺序执行。loader链中的第一个loader返回值给下一个loader。在最后一个loader,返回webpack所预期的JavaScript.
0. loader可以是同步的,也可以是异步的.
0. loader运行在Node.js中,并且能够执行任何可能的操作.
0. loader接收查询参数。用于对loader传递配置.
0. loader也能够使用options对象进行配置.
0. 除了使用package.json常见的main属性,还可以将普通的npm模块导出为loader,做法是在package.json里定义一个loader字段.
0. 插件(plugin)可以为loader带来更多特性.
0. loader能够产生额外的任意文件.

## 解析loader

loader遵循标准的模块解析。多数情况下,loader将从模块路径（通常将模块路径认为是 npm install, node_modules）解析.

loader模块需要导出为一个函数,并且使用Node.js兼容的JavaScript编写。通常使用npm进行管理,但是也可以将自定义loader作为应用程序中的文件。按照约定,loader通常被命名为xxx-loader（例如json-loader）.

# 模块(modules)

在模块化编程中,开发者将程序分解成离散功能块(discrete chunks of functionality),并称之为_模块_.

每个模块具有比完整程序更小的接触面,使得校验、调试、测试轻而易举。 精心编写的_模块_提供了可靠的抽象和封装界限,使得应用程序中每个模块都具有条理清楚的设计和明确的目的.

Node.js从最一开始就支持模块化编程。然而,在web,模块化的支持正缓慢到来。在web存在多种支持JavaScript模块化的工具,这些工具各有优势和限制。webpack 基于从这些系统获得的经验教训,并将_模块_的概念应用于项目中的任何文件.

## 支持模块类型

webpack 通过 loader 可以支持各种语言和预处理器编写模块。loader 描述了 webpack 如何处理 非 JavaScript(non-JavaScript) _模块_,并且在bundle中引入这些_依赖_。 webpack 社区已经为各种流行语言和语言处理器构建了 loader,包括：

0. CoffeeScript
0. TypeScript
0. ESNext (Babel)
0. Sass
0. Less
0. Stylus

## 模块解析(module resolution)

resolver 是一个库(library),用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块,然后被后者引用,如下：

```js
import foo from 'path/to/module'
// 或者
require('path/to/module')
```

所依赖的模块可以是来自应用程序代码或第三方的库(library)。resolver帮助webpack找到bundle中需要引入的模块代码,这些代码在包含在每个require/import语句中。当打包模块时,webpack使用enhanced-resolve来解析文件路径.

### 解析规则

#### 绝对路径

```js
import "/home/me/file";
import "C:\\Users\\me\\file";
```

#### 相对路径

```js
import "../src/file1";
import "./file2";
```

#### 模块路径

```js
import "module";
import "module/lib/file";
```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

