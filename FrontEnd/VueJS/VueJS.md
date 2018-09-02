
<!-- TOC -->

- [1. 前言](#1-前言)
  - [鸣谢](#鸣谢)
  - [1.1. 关于truthy](#11-关于truthy)
  - [1.2. 兼容性](#12-兼容性)
- [2. 安装](#2-安装)
  - [2.1. npm安装](#21-npm安装)
  - [2.2. 命令行工具 (CLI)](#22-命令行工具-cli)
  - [2.3. Vue Devtools](#23-vue-devtools)
- [3. Vue 实例](#3-vue-实例)
  - [3.1. 创建一个 Vue 实例](#31-创建一个-vue-实例)
  - [3.2. 数据与方法](#32-数据与方法)
  - [3.3. 实例生命周期钩子](#33-实例生命周期钩子)
  - [3.4. 生命周期图示](#34-生命周期图示)
- [4. 模板语法](#4-模板语法)
  - [4.1. \<script\>标签](#41-\script\标签)
  - [4.2. “Mustache”语法 (双大括号) 的文本插值](#42-mustache语法-双大括号-的文本插值)
    - [4.2.1. 原始HTML](#421-原始html)
  - [4.3. 指令](#43-指令)
  - [4.4. 参数](#44-参数)
  - [4.5. 修饰符](#45-修饰符)
  - [4.6. 缩写](#46-缩写)
    - [4.6.1. `v-bind` 缩写](#461-v-bind-缩写)
    - [4.6.2. `v-on` 缩写](#462-v-on-缩写)
- [5. 计算属性(computed)](#5-计算属性computed)
  - [5.1. 缓存和再次执行](#51-缓存和再次执行)
    - [5.1.1. 为什么缓存?](#511-为什么缓存)
  - [5.2. 计算属性 vs 侦听属性](#52-计算属性-vs-侦听属性)
    - [5.2.1. 计算属性的 setter](#521-计算属性的-setter)
- [6. 侦听器](#6-侦听器)
- [7. Class与Style绑定](#7-class与style绑定)
  - [7.1. 绑定 HTML Class](#71-绑定-html-class)
    - [7.1.1. 对象语法](#711-对象语法)
    - [7.1.2. 数组语法](#712-数组语法)
    - [7.1.3. 用在组件上](#713-用在组件上)
  - [7.2. 绑定内联样式](#72-绑定内联样式)
    - [7.2.1. 对象语法](#721-对象语法)
    - [7.2.2. 数组语法](#722-数组语法)
    - [7.2.3. 自动添加前缀](#723-自动添加前缀)
    - [7.2.4. 多重值](#724-多重值)
- [8. 条件渲染](#8-条件渲染)
  - [8.1. `v-if`](#81-v-if)
    - [8.1.1. 在 `<template>` 元素上使用 `v-if` 条件渲染分组](#811-在-template-元素上使用-v-if-条件渲染分组)
    - [8.1.2. `v-else`](#812-v-else)
    - [8.1.3. `v-else-if`](#813-v-else-if)
    - [8.1.4. 用 `key` 管理可复用的元素](#814-用-key-管理可复用的元素)
  - [8.2. `v-show`](#82-v-show)
  - [8.3. `v-if` vs `v-show`](#83-v-if-vs-v-show)
  - [8.4. `v-if` 与 `v-for` 一起使用](#84-v-if-与-v-for-一起使用)
- [9. 列表渲染](#9-列表渲染)
  - [9.1. 用 `v-for` 把一个数组对应为一组元素](#91-用-v-for-把一个数组对应为一组元素)
  - [9.2. 对象的 `v-for`](#92-对象的-v-for)
  - [9.3. `key`](#93-key)
  - [9.4. 数组更新检测](#94-数组更新检测)
    - [9.4.1. 变异方法](#941-变异方法)
    - [9.4.2. 替换数组](#942-替换数组)
    - [9.4.3. 注意事项](#943-注意事项)
    - [9.4.4. 方式1](#944-方式1)
    - [9.4.5. 方式2](#945-方式2)
  - [9.5. 显示过滤/排序结果](#95-显示过滤排序结果)
  - [9.6. 一段取值范围的 `v-for`](#96-一段取值范围的-v-for)
  - [9.7. `v-for` on a `<template>`](#97-v-for-on-a-template)
  - [9.8. `v-for` with `v-if`](#98-v-for-with-v-if)
  - [9.9. 组件的 `v-for`](#99-组件的-v-for)
- [10. 事件处理](#10-事件处理)
  - [10.1. 监听事件](#101-监听事件)
  - [10.2. 事件处理方法](#102-事件处理方法)
  - [10.3. 内联处理器中的方法](#103-内联处理器中的方法)
  - [10.4. 事件修饰符](#104-事件修饰符)
  - [10.5. 按键修饰符](#105-按键修饰符)
    - [10.5.1. 自动匹配按键修饰符](#1051-自动匹配按键修饰符)
  - [10.6. 系统修饰键](#106-系统修饰键)
    - [10.6.1. `.exact` 修饰符](#1061-exact-修饰符)
    - [10.6.2. 鼠标按钮修饰符](#1062-鼠标按钮修饰符)
  - [10.7. 为什么在 HTML 中监听事件?](#107-为什么在-html-中监听事件)
- [11. 表单输入绑定](#11-表单输入绑定)
  - [11.1. 基础用法](#111-基础用法)
    - [11.1.1. 文本](#1111-文本)
    - [11.1.2. 多行文本](#1112-多行文本)
    - [11.1.3. 复选框](#1113-复选框)
    - [11.1.4. 单选按钮](#1114-单选按钮)
    - [11.1.5. 选择框](#1115-选择框)
  - [11.2. 值绑定](#112-值绑定)
    - [11.2.1. 复选框](#1121-复选框)
    - [11.2.2. 单选按钮](#1122-单选按钮)
    - [11.2.3. 选择框的选项](#1123-选择框的选项)
  - [11.3. 修饰符](#113-修饰符)
    - [11.3.1. `.lazy`](#1131-lazy)
    - [11.3.2. `.number`](#1132-number)
    - [11.3.3. `.trim`](#1133-trim)
- [12. 组件基础](#12-组件基础)
  - [12.1. 基本示例](#121-基本示例)
  - [12.2. 组件的复用](#122-组件的复用)
    - [12.2.1. `data` 必须是一个函数](#1221-data-必须是一个函数)
  - [12.3. 组件的组织](#123-组件的组织)
  - [12.4. 通过 Prop 向子组件传递数据](#124-通过-prop-向子组件传递数据)
  - [12.5. 单个根元素](#125-单个根元素)
  - [12.6. 通过事件向父级组件发送消息](#126-通过事件向父级组件发送消息)
    - [12.6.1. 使用事件抛出一个值](#1261-使用事件抛出一个值)
    - [12.6.2. 在组件上使用 `v-model`](#1262-在组件上使用-v-model)
  - [12.7. 通过插槽分发内容](#127-通过插槽分发内容)
  - [12.8. 动态组件](#128-动态组件)
  - [12.9. 解析 DOM 模板时的注意事项](#129-解析-dom-模板时的注意事项)

<!-- /TOC -->

# 1. 前言

## 鸣谢
翻译人员|
-|
[dingyiming](https://github.com/dingyiming)|
[70data](https://github.com/70data)|
[hijiangtao](https://github.com/hijiangtao)|
[ATLgo](https://github.com/ATLgo)|
[daix6](https://github.com/daix6)|
[595074187](https://github.com/595074187)|
[hgcoder](https://github.com/hgcoder)|
[tingtien](https://github.com/tingtien)|
[yangzj1992](https://github.com/yangzj1992)|
[ezreally](https://github.com/ezreally)|
[awe](https://github.com/hilongjw)|
[bhnddowinf](https://github.com/bhnddowinf)|
[StoneQI](https://github.com/StoneQI)|
[veaba](https://github.com/veaba)|
[hurrytospring](https://github.com/hurrytospring)|
[zhouzihanntu](https://github.com/zhouzihanntu)|
[mlyknown](https://github.com/mlyknown)|
[dear-lizhihua](https://github.com/dear-lizhihua)|
[yongbolv](https://github.com/yongbolv)|
[forzajuve10](https://github.com/forzajuve10)|
[yizhixiaolongxia](https://github.com/yizhixiaolongxia)|
[coolzjy](https://github.com/coolzjy)|
[lindazhang102](https://github.com/lindazhang102)|
等其他所有参与翻译的朋友|


## 1.1. 关于truthy
truthy 不是 `true`,详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 的解释.

## 1.2. 兼容性

Vue **不支持** IE8 及以下版本,因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性.但它支持所有[兼容 ECMAScript 5 的浏览器](https://caniuse.com/#feat=es5).

> 方法只有纯粹的数据逻辑,而不是去处理 DOM 事件细节. 

# 2. 安装
## 2.1. npm安装
``` bash
npm install vue
```
## 2.2. 命令行工具 (CLI)
Vue 提供了一个[官方的 CLI](https://github.com/vuejs/vue-cli),为单页面应用 (SPA) 快速搭建繁杂的脚手架.它为现代前端工作流提供了 batteries-included 的构建设置.只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验,以及生产环境可用的构建版本.更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org).

CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解.如果是新手,强烈建议先在不用构建工具的情况下通读指南,在熟悉 Vue 本身之后再使用 CLI.</p>

## 2.3. Vue Devtools

在使用 Vue 时,推荐在浏览器上安装 [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools).它允许在一个更友好的界面中审查和调试 Vue 应用.

# 3. Vue 实例

## 3.1. 创建一个 Vue 实例

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的:

```js
var vm = new Vue({
  // 选项
})
```

虽然没有完全遵循 [MVVM 模型](https://zh.wikipedia.org/wiki/MVVM),但是 Vue 的设计也受到了它的启发.<br>
因此在文档中经常会使用 `vm` (ViewModel 的缩写) 这个变量名表示 Vue 实例.

一个 Vue 应用由一个通过 `new Vue` 创建的**根 Vue 实例**,以及可选的嵌套的、可复用的组件树组成.<br>
举个例子,一个 todo 应用的组件树可以是这样的:

```
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```
## 3.2. 数据与方法

当一个 Vue 实例被创建时,它向 Vue 的**响应式系统**中加入了其 `data` 对象中能找到的所有的属性.<br>
当这些属性的值发生改变时,视图将会产生“响应”,即匹配更新为新的值.

```js
// 的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时,视图会进行重渲染.<br>
值得注意的是只有当实例被创建时 `data` 中存在的属性才是**响应式**的.<br>
也就是说如果添加一个新的属性,比如:

```js
vm.b = 'hi'
```

那么对 `b` 的改动将不会触发任何视图的更新.<br>
如果知道会在晚些时候需要一个属性,但是一开始它为空或不存在,那么仅需要设置一些初始值.<br>
比如:

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

这里唯一的例外是使用 `Object.freeze()`,这会阻止修改现有的属性,也意味着响应系统无法再*追踪*变化.

```js
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 `foo` 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据属性,Vue 实例还暴露了一些有用的实例属性与方法.<br>
它们都有前缀 `$`,以便与用户定义的属性区分开来.<br>
例如:

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```
## 3.3. 实例生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如,需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等.<br>
同时在这个过程中也会运行一些叫做**生命周期钩子**的函数,这给了用户在不同阶段添加自己的代码的机会.

比如 [`created`](../api/#created) 钩子可以用来在一个实例被创建之后执行代码:

```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

也有一些其它的钩子,在实例生命周期的不同阶段被调用,如 [`mounted`](../api/#mounted)、[`updated`](../api/#updated) 和 [`destroyed`](../api/#destroyed).<br>
生命周期钩子的 `this` 上下文指向调用它的 Vue 实例.

不要在选项属性或回调上使用[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions),比如:<br>
 `created: () => console.log(this.a)` 或 <br>
 
 `vm.$watch('a', newValue => this.myMethod())`.<br>
 因为箭头函数是和父级上下文绑定在一起的,`this` 不会是如所预期的 Vue 实例,<br>
 
 经常导致 `Uncaught TypeError: Cannot read property of undefined` 或<br>
 
`Uncaught TypeError: this.myMethod is not a function` 之类的错误.

## 3.4. 生命周期图示

下图展示了实例的生命周期.<br>
不需要立马弄明白所有的东西,不过随着的不断学习和使用,它的参考价值会越来越高.

![Vue 实例生命周期](asserts/images/lifecycle.png)

# 4. 模板语法

## 4.1. \<script\>标签

vuejs的内容直接放在\<script\>标签即可.

## 4.2. “Mustache”语法 (双大括号) 的文本插值

``` html
<span>Message: {{ msg }}</span>
```

{{}}标签将会被替代为对应数据对象上 `msg` 属性的值.<br>
无论何时,绑定的数据对象上 `msg` 属性发生了改变,插值处的内容都会更新.

通过使用v-once指令,也能执行一次性地插值, **当数据改变时,插值处的内容不会更新** .但请留心 **这会影响到该节点上的其它数据绑定** :

``` html
<span v-once>这个将不会改变: {{ msg }}</span>
```

### 4.2.1. 原始HTML

双大括号会将数据解释为普通文本,而非 HTML 代码.为了输出真正的 HTML,需要使用 `v-html` 指令:

``` html
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

## 4.3. 指令

指令 (Directives) 是带有 `v-` 前缀的特殊特性.<br>
指令特性的值预期是**单个 JavaScript 表达式** (`v-for` 是例外情况,稍后再讨论).<br>
**指令的职责是,当表达式的值改变时,将其产生的连带影响,响应式地作用于 DOM.**

## 4.4. 参数

一些指令能够接收一个“参数”,在指令名称之后以冒号表示.<br>
例如,`v-bind` 指令可以用于响应式地更新 HTML 特性:

``` html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数,告知 `v-bind` 指令将该元素的 `href` 特性与表达式 `url` 的值绑定(bind,angularjs一般称为binding).

另一个例子是 `v-on` 指令,它用于监听 DOM 事件:

``` html
<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名.

## 4.5. 修饰符

修饰符 (Modifiers) 是以半角句号 `.` 指明的特殊后缀,用于指出一个指令应该以特殊方式绑定.<br>
例如,`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`:

``` html
<form v-on:submit.prevent="onSubmit">...</form>
```

## 4.6. 缩写

`v-` 前缀作为一种视觉提示,用来识别模板中 Vue 特定的特性.<br>
在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时,`v-` 前缀很有帮助,然而,对于一些频繁用到的指令来说,就会感到使用繁琐.<br>
同时,在构建由 Vue.js 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时,`v-` 前缀也变得没那么重要了.<br>
因此,Vue.js 为 `v-bind` 和 `v-on` 这两个最常用的指令,提供了特定简写:

### 4.6.1. `v-bind` 缩写

``` html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

### 4.6.2. `v-on` 缩写

``` html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

它们看起来可能与普通的 HTML 略有不同,但 `:` 与 `@` 对于特性名来说都是合法字符,在所有支持 Vue.js 的浏览器都能被正确地解析.<br>
而且,它们不会出现在最终渲染的标记中.缩写语法是完全可选的.


# 5. 计算属性(computed)

模板内的表达式非常便利,但是设计它们的初衷是用于简单运算的.在模板中放入太多的逻辑会让模板过重且难以维护.例如:

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方,模板不再是简单的声明式逻辑.必须看一段时间才能意识到,这里是想要显示变量 `message` 的翻转字符串.当想要在模板中多次引用此处的翻转字符串时,就会更加难以处理.

所以,对于任何复杂逻辑,都应当使用**计算属性**.

``` html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

``` js
<script>
  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  })
</script>
```

## 5.1. 缓存和再次执行

计算属性|方法
-|-
**计算属性是基于它们的依赖进行缓存的**,<br>在相关依赖发生改变时它们才会重新求值.|调用方法将**总会**再次执行函数.

可能已经注意到可以通过在表达式中调用方法来达到同样的效果:

``` html
<p>Reversed message: "{{ reversedMessage() }}"</p>
```

``` js
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

可以将同一函数定义为一个方法而不是一个计算属性.<br>
两种方式的最终结果确实是完全相同的.<br>
然而,不同的是**计算属性是基于它们的依赖进行缓存的**.只在相关依赖发生改变时它们才会重新求值.<br>
这就意味着只要 `message` 还没有发生改变,多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果,而不必再次执行函数.<br>

相比之下,每当触发重新渲染时,调用方法将**总会**再次执行函数.

### 5.1.1. 为什么缓存?
假设有一个性能开销比较大的计算属性 **A**,它需要遍历一个巨大的数组并做大量的计算.<br>
然后可能有其他的计算属性依赖于 **A** .如果没有缓存,将不可避免的多次执行 **A** 的 getter！<br>
如果不希望有缓存,请用方法来替代.

## 5.2. 计算属性 vs 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动:**侦听属性**.<br>
当有一些数据需要随着其它数据变动而变动时,很容易滥用 `watch`——特别是如果之前使用过 AngularJS.<br>
然而,通常更好的做法是使用计算属性而不是命令式的 `watch` 回调.<br>
细想一下这个例子:

``` html
<div id="demo">{{ fullName }}</div>
```

``` js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的.将它与计算属性的版本进行比较:

``` js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

### 5.2.1. 计算属性的 setter

计算属性默认只有getter,不过在需要时也可以提供一个setter:

``` js
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时,setter会被调用,`vm.firstName` 和 `vm.lastName`也会相应地被更新.

# 6. 侦听器

虽然计算属性在大多数情况下更合适,但有时也需要一个自定义的侦听器.<br>
这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法,来响应数据的变化.<br>
当需要在数据变化时执行异步或开销较大的操作时,这个方式是最有用的.<br>


例如:

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

```html
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富,Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简.<br>
这也可以让自由选择自己更熟悉的工具.<br>
 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变,这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数.
    // 在这个例子中,希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出.想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识,
    // 请参考:https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```

# 7. Class与Style绑定

## 7.1. 绑定 HTML Class

### 7.1.1. 对象语法

可以传给 `v-bind:class` 一个对象,以动态地切换class:

``` html
<div v-bind:class="{ active: isActive }"></div>
```
上面的语法表示 `active` 这个 class 存在与否将取决于数据属性 `isActive` 的 [truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy).

可以在对象中传入更多属性来动态切换多个 class.<br>
此外,`v-bind:class` 指令也可以与普通的 class 属性共存.<br>
当有如下模板:

``` html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```

和如下 data:

``` js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为:

``` html
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时,class 列表将相应地更新.<br>
例如,如果 `hasError` 的值为 `true`,class 列表将变为 `"static active text-danger"`.<br>


绑定的数据对象不必内联定义在模板里:

``` html
<div v-bind:class="classObject"></div>
```

``` js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

渲染的结果和上面一样.<br>
也可以在这里绑定一个返回对象的计算属性.<br>
这是一个常用且强大的模式:

``` html
<div v-bind:class="classObject"></div>
```

``` js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

### 7.1.2. 数组语法

可以把一个数组传给 `v-bind:class`,以应用一个 class 列表:

``` html
<div v-bind:class="[activeClass, errorClass]"></div>
```

``` js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为:

``` html
<div class="active text-danger"></div>
```

如果也想根据条件切换列表中的class,可以用三元表达式:

``` html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`,但是只有在 `isActive` 是 truthy 时才添加 `activeClass`.<br>


不过,当有多个条件 class 时这样写有些繁琐.<br>
所以在数组语法中也可以使用对象语法:

``` html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

### 7.1.3. 用在组件上

当在一个自定义组件上使用 `class` 属性时,这些类将被添加到该组件的根元素上面.<br>
这个元素上已经存在的类不会被覆盖.<br>


例如,如果声明了这个组件:

``` js
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

然后在使用它的时候添加一些 class:

``` html
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为:

``` html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用:

``` html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 truthy时,HTML 将被渲染成为:

``` html
<p class="foo bar active">Hi</p>
```

## 7.2. 绑定内联样式

### 7.2.1. 对象语法

css属性名形式|示例
-|-
驼峰式|camelCase
短横线分隔|'kebab-case'

`v-bind:style` 的对象语法十分直观——看着非常像 CSS,但其实是一个JavaScript对象.<br>
CSS属性名可以用驼峰式(camelCase)或短横线分隔(kebab-case,记得 **用单引号括起来**)来命名:

``` html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

``` js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好,这会让模板更清晰:

``` html
<div v-bind:style="styleObject"></div>
```

``` js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
同样的,对象语法常常结合返回对象的计算属性使用.

### 7.2.2. 数组语法

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上:

``` html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### 7.2.3. 自动添加前缀

当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时,<br>

如 `transform`,Vue.js 会自动侦测并添加相应的前缀.

### 7.2.4. 多重值

从 **2.3.0** 起可以为 `style` 绑定中的属性提供一个包含多个值的数组,常用于提供多个带前缀的值,例如:

``` html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值.<br>
在本例中,如果浏览器支持不带浏览器前缀的 flexbox,那么就只会渲染 `display: flex`.<br>


# 8. 条件渲染
## 8.1. `v-if`

在字符串模板中,比如 Handlebars,得像这样写一个条件块:

``` html
<!-- Handlebars 模板 -->
{{#if ok}}
  <h1>Yes</h1>
{{/if}}
```

在 Vue 中,使用 `v-if` 指令实现同样的功能:

``` html
<h1 v-if="ok">Yes</h1>
```

也可以用 `v-else` 添加一个“else 块”:

``` html
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

### 8.1.1. 在 `<template>` 元素上使用 `v-if` 条件渲染分组

因为 `v-if` 是一个指令,所以必须将它添加到一个元素上.<br>
但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素,并在上面使用 `v-if`.<br>
最终的渲染结果将不包含 `<template>` 元素.<br>


``` html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### 8.1.2. `v-else`

可以使用 `v-else` 指令来表示 `v-if` 的“else 块”:

``` html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面,否则它将不会被识别.<br>


### 8.1.3. `v-else-if`

> 2.1.0 新增

`v-else-if`,顾名思义,充当 `v-if` 的“else-if 块”,可以连续使用:

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

类似于 `v-else`,`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后.<br>


### 8.1.4. 用 `key` 管理可复用的元素

Vue 会尽可能高效地渲染元素,通常会复用已有元素而不是从头开始渲染.<br>
这么做除了使 Vue 变得非常快之外,还有其它一些好处.<br>
例如,如果允许用户在不同的登录方式之间切换:

``` html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```

那么在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容.<br>
因为两个模板使用了相同的元素,`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`.<br>


这样也不总是符合实际需求,所以 Vue 为提供了一种方式来表达“这两个元素是完全独立的,不要复用它们”.<br>
只需添加一个具有唯一值的 `key` 属性即可:

``` html
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

注意,`<label>` 元素仍然会被高效地复用,因为它们没有添加 `key` 属性.<br>


## 8.2. `v-show`

另一个用于根据条件展示元素的选项是 `v-show` 指令.<br>
用法大致一样:

``` html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在DOM中.<br>
`v-show` 只是简单地切换元素的 CSS 属性 `display`.<br>


注意,`v-show` 不支持 `<template>` 元素,也不支持 `v-else`.

## 8.3. `v-if` vs `v-show`

`v-if` 是“真正”的条件渲染,因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建.

`v-if` 也是**惰性的**:如果在初始渲染时条件为假,则什么也不做——直到条件第一次变为真时,才会开始渲染条件块.

相比之下,`v-show` 就简单得多——不管初始条件是什么,元素总是会被渲染,并且只是简单地基于 CSS 进行切换.<br>


一般来说,`v-if` 有更高的切换开销,而 `v-show` 有更高的初始渲染开销.<br>
因此,如果需要非常频繁地切换,则使用 `v-show` 较好；如果在运行时条件很少改变,则使用 `v-if` 较好.<br>


## 8.4. `v-if` 与 `v-for` 一起使用

当 `v-if` 与 `v-for` 一起使用时,`v-for` 具有比 `v-if` 更高的优先级.<br>


# 9. 列表渲染

## 9.1. 用 `v-for` 把一个数组对应为一组元素

用 `v-for` 指令根据一组数组的选项列表进行渲染.<br>
`v-for` 指令需要使用 `item in items` 形式的特殊语法,`items` 是源数据数组并且 `item` 是数组元素迭代的别名.

``` html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```

``` js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

在 `v-for` 块中,拥有对父作用域属性的完全访问权限.<br>
`v-for` 还支持一个可选的第二个参数为当前项的索引.

``` html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

``` js
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

也可以用 `of` 替代 `in` 作为分隔符,因为它是最接近 JavaScript 迭代器的语法:

``` html
<div v-for="item of items"></div>
```

## 9.2. 对象的 `v-for`

也可以用 `v-for` 通过一个对象的属性来迭代.

``` html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

``` js
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```

也可以提供第二个的参数为键名:

``` html
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```

第三个参数为索引:

``` html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

在遍历对象时,是按 `Object.keys()` 的结果遍历, **但是不能保证它的结果在不同的 JavaScript 引擎下是一致的.**


## 9.3. `key`

当 Vue.js 用 `v-for` 正在更新已渲染过的元素列表时,它默认用“就地复用”策略.<br>
如果数据项的顺序被改变,Vue 将不会移动 DOM 元素来匹配数据项的顺序, 而是简单复用此处每个元素,并且确保它在特定索引下显示已被渲染过的每个元素.<br>


这个默认的模式是高效的,但是只适用于**不依赖子组件状态或临时 DOM 状态 (例如:表单输入值) 的列表渲染输出**.

为了给 Vue 一个提示,以便它能跟踪每个节点的身份,从而重用和重新排序现有元素,需要为每项提供一个唯一 `key` 属性.<br>
理想的 `key` 值是每项都有的且唯一的 id.<br>
这个特殊的属性相当于 Vue 1.x 的 `track-by` ,但它的工作方式类似于一个属性,所以需要用 `v-bind` 来绑定动态值 (在这里使用简写):

``` html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

建议尽可能在使用 `v-for` 时提供 `key`,除非遍历输出的 DOM 内容非常简单,或者是刻意依赖默认行为以获取性能上的提升.

因为它是 Vue 识别节点的一个通用机制,`key` 并不与 `v-for` 特别关联,key 还具有其他用途,将在后面的指南中看到其他用途.

## 9.4. 数组更新检测

### 9.4.1. 变异方法

Vue 包含一组观察数组的变异方法,所以它们也将会触发视图更新.<br>
这些方法如下:

0. `push()`
0. `pop()`
0. `shift()`
0. `unshift()`
0. `splice()`
0. `sort()`
0. `reverse()`

### 9.4.2. 替换数组

变异方法 (mutation method),顾名思义,会改变被这些方法调用的原始数组.<br>
相比之下,也有非变异 (non-mutating method) 方法,例如:`filter()`, `concat()` 和 `slice()` .<br>
这些不会改变原始数组,但**总是返回一个新数组**.<br>
当使用非变异方法时,可以用新数组替换旧数组:

``` js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表.<br>
幸运的是,事实并非如此.<br>
Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法,所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作.

### 9.4.3. 注意事项

由于 JavaScript 的限制,Vue 不能检测以下变动的数组:

1. 当利用索引直接设置一个项时,例如:`vm.items[indexOfItem] = newValue`
2. 当修改数组的长度时,例如:`vm.items.length = newLength`

举个例子:

``` js
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```

为了解决第一类问题,以下两种方式都可以实现和 `vm.items[indexOfItem] = newValue` 相同的效果,同时也将触发状态更新:

### 9.4.4. 方式1
``` js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
```
例如,对于:

``` js
var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
```

可以添加一个新的 `age` 属性到嵌套的 `userProfile` 对象:

``` js
Vue.set(vm.userProfile, 'age', 27)
```

有时可能需要为已有对象赋予多个新属性,比如使用 `Object.assign()` 或 `_.extend()`.<br>
在这种情况下,应该用两个对象的属性创建一个新的对象.<br>
所以,如果想添加新的响应式属性,不要像这样:

``` js
Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

应该这样做:

``` js
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

### 9.4.5. 方式2
使用 [`vm.$set`](https://vuejs.org/v2/api/#vm-set) 实例方法,该方法是全局方法 `Vue.set` 的一个别名:

``` js
vm.$set(vm.items, indexOfItem, newValue)
```

为了解决第二类问题,可以使用 `splice`:

``` js
vm.items.splice(newLength)
```

## 9.5. 显示过滤/排序结果

有时,想要显示一个数组的过滤或排序副本,而不实际改变或重置原始数据.<br>
在这种情况下,可以创建返回过滤或排序数组的计算属性.<br>


例如:

``` html
<li v-for="n in evenNumbers">{{ n }}</li>
```

``` js
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

在计算属性不适用的情况下 (例如,在嵌套 `v-for` 循环中) 可以使用一个 method 方法:

``` html
<li v-for="n in even(numbers)">{{ n }}</li>
```

``` js
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

## 9.6. 一段取值范围的 `v-for`

`v-for` 也可以取整数.<br>
在这种情况下,它将重复多次模板.<br>


``` html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

## 9.7. `v-for` on a `<template>`

类似于 `v-if`,也可以利用带有 `v-for` 的 `<template>` 渲染多个元素.<br>
比如:

``` html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## 9.8. `v-for` with `v-if`

当它们处于同一节点,`v-for` 的优先级比 `v-if` 更高,这意味着 **`v-if` 将分别重复运行于每个 `v-for` 循环中** .<br>
当想为仅有的*一些*项渲染节点时,这种优先级的机制会十分有用,如下:

``` html
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面的代码只传递了未完成的 todos.<br>


而如果的目的是有条件地跳过循环的执行,那么可以将 `v-if` 置于外层元素或 `<template>`上.如:

``` html
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

## 9.9. 组件的 `v-for`

在自定义组件里,可以像任何普通元素一样用 `v-for` .

``` html
<my-component v-for="item in items" :key="item.id"></my-component>
```

**在组件中使用 `v-for` 时,`key` 现在是必须的.**

然而,任何数据都不会被自动传递到组件里,因为组件有自己独立的作用域.<br>
为了把迭代数据传递到组件里,要用 `props` :

``` html
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>
```

不自动将 `item` 注入到组件里的原因是,这会使得组件与 `v-for` 的运作紧密耦合.<br>
明确组件数据的来源能够使组件在其他场合重复使用.<br>


下面是一个简单的 todo list 的完整例子:

``` html
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
```

注意这里的 `is="todo-item"` 属性.<br>
这种做法在使用 DOM 模板时是十分必要的,因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容.<br>
这样做实现的效果与 `<todo-item>` 相同,但是可以避开一些潜在的浏览器解析错误.

``` js
Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
```

# 10. 事件处理

## 10.1. 监听事件

可以用 `v-on` 指令监听 DOM 事件,并在触发时运行一些 JavaScript 代码.

示例:

``` html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

``` js
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

## 10.2. 事件处理方法

然而许多事件处理逻辑会更为复杂,所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的.<br>
因此 `v-on` 还可以接收一个需要调用的方法名称.

示例:

``` html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

``` js
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```

## 10.3. 内联处理器中的方法

除了直接绑定到一个方法,也可以在内联 JavaScript 语句中调用方法:

``` html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```
``` js
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

有时也需要在内联语句处理器中访问原始的 DOM 事件.<br>
可以用特殊变量 `$event` 把它传入方法:

``` html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

``` js
// ...
methods: {
  warn: function (message, event) {
    // 现在可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
}
```

## 10.4. 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求.<br>
尽管可以在方法中轻松实现这点,但更好的方式是:方法只有纯粹的数据逻辑,而不是去处理 DOM 事件细节.

为了解决这个问题,Vue.js 为 `v-on` 提供了**事件修饰符**.<br>
之前提过,修饰符是由点开头的指令后缀来表示的.

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

``` html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理,然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

使用修饰符时,顺序很重要；相应的代码会以同样的顺序产生.<br>
因此,用 `v-on:click.prevent.self` 会阻止**所有的点击**,而 `v-on:click.self.prevent` 只会阻止对元素自身的点击.


``` html
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

不像其它只能对原生的 DOM 事件起作用的修饰符,`.once` 修饰符还能被用到自定义的[组件事件](components-custom-events.html)上.<br>
如果还没有阅读关于组件的文档,现在大可不必担心.

Vue 还对应 [`addEventListener` 中的 `passive` 选项](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters)提供了 `.passive` 修饰符.

``` html
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

这个 `.passive` 修饰符尤其能够提升移动端的性能.

不要把 `.passive` 和 `.prevent` 一起使用,因为 `.prevent` 将会被忽略,同时浏览器可能会向展示一个警告.<br>
请记住,`.passive` 会告诉浏览器*不*想阻止事件的默认行为.

## 10.5. 按键修饰符

在监听键盘事件时,经常需要检查常见的键值.<br>
Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符:

``` html
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">
```

记住所有的 `keyCode` 比较困难,所以 Vue 为最常用的按键提供了别名:

``` html
<!-- 同上 -->
<input v-on:keyup.enter="submit">

<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

全部的按键别名:

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

可以通过全局 `config.keyCodes` 对象 自定义按键修饰符别名:

``` js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

### 10.5.1. 自动匹配按键修饰符

也可直接将 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符:

```html
<input @keyup.page-down="onPageDown">
```

在上面的例子中,处理函数仅在 `$event.key === 'PageDown'` 时被调用.

有一些按键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果想支持 IE9,它们的内置别名应该是首选.

## 10.6. 系统修饰键

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器.

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

> 注意:在 Mac 系统键盘上,meta 对应 command 键 (⌘).<br>
在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞).<br>
在 Sun 操作系统键盘上,meta 对应实心宝石键 (◆).<br>
在其他特定键盘上,尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品,比如 Knight 键盘、space-cadet 键盘,meta 被标记为“META”.<br>
在 Symbolics 键盘上,meta 被标记为“META”或者“Meta”.

例如:

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

请注意修饰键与常规按键不同,在和 `keyup` 事件一起用时,事件触发时修饰键必须处于按下状态.<br>
换句话说,只有在按住 `ctrl` 的情况下释放其它按键,才能触发 `keyup.ctrl`.<br>
而单单释放 `ctrl` 也不会触发事件.<br>
如果想要这样的行为,请为 `ctrl` 换用 `keyCode`:`keyup.17`.

### 10.6.1. `.exact` 修饰符

`.exact` 修饰符允许控制由精确的系统修饰符组合触发的事件.

``` html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

### 10.6.2. 鼠标按钮修饰符

- `.left`
- `.right`
- `.middle`

这些修饰符会限制处理函数仅响应特定的鼠标按钮.

## 10.7. 为什么在 HTML 中监听事件?

可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统.<br>
但不必担心,因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上,它不会导致任何维护上的困难.<br>
实际上,使用 `v-on` 有几个好处:

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法.

2. 因为无须在 JavaScript 里手动绑定事件,的 ViewModel 代码可以是非常纯粹的逻辑,和 DOM 完全解耦,更易于测试.

3. 当一个 ViewModel 被销毁时,所有的事件处理器都会自动被删除.<br>
无须担心如何清理它们.

# 11. 表单输入绑定

## 11.1. 基础用法

可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定.<br>
它会根据控件类型自动选取正确的方法来更新元素.<br>
尽管有些神奇,但 `v-model` 本质上不过是语法糖.<br>
它负责监听用户的输入事件以更新数据,并对一些极端场景进行一些特殊处理.

`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源.<br>
**应该通过 JavaScript 在组件的 `data` 选项中声明初始值**.

对于需要使用[输入法](https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E6%B3%95) (如中文、日文、韩文等) 的语言,会发现 `v-model` 不会在输入法组合文字过程中得到更新.<br>
如果也想处理这个过程,请使用 `input` 事件.

### 11.1.1. 文本

``` html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### 11.1.2. 多行文本

``` html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>

<textarea v-model="message" placeholder="add multiple lines"></textarea>
```
在文本区域插值 (`<textarea>{{text}}</textarea>`) 并不会生效,应用 `v-model` 来代替.

### 11.1.3. 复选框

单个复选框,绑定到布尔值:

``` html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

多个复选框,绑定到同一个数组:

``` html
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

``` js
new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
```

### 11.1.4. 单选按钮

``` html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  
  <span>Picked: {{ picked }}</span>
</div>
```

``` js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```

### 11.1.5. 选择框

单选时:

``` html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

``` js
new Vue({
  el: 'example-5',
  data: {
    selected: ''
  }
})
```

如果 `v-model` 表达式的初始值未能匹配任何选项,`<select>` 元素将被渲染为“未选中”状态.<br>
在 iOS 中,这会使用户无法选择第一个选项.<br>
因为这样的情况下,iOS 不会触发 change 事件.<br>
因此,更推荐像上面这样提供一个值为空的禁用选项.

多选时 (绑定到一个数组):

``` html
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  
  <span>Selected: {{ selected }}</span>
</div>
```

``` js
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

用 `v-for` 渲染的动态选项:

``` html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

``` js
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

## 11.2. 值绑定

对于单选按钮,复选框及选择框的选项,`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值):

``` html
<!-- 当选中时,`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时,`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时可能想把值绑定到 Vue 实例的一个动态属性上,这时可以用 `v-bind` 实现,并且这个属性的值可以不是字符串.

### 11.2.1. 复选框

``` html
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
```

``` js
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

这里的 `true-value` 和 `false-value` 特性并不会影响输入控件的 `value` 特性,因为浏览器在提交表单时并不会包含未被选中的复选框.<br>
如果要确保表单中这两个值中的一个能够被提交,(比如“yes”或“no”),请换用单选按钮.

### 11.2.2. 单选按钮

``` html
<input type="radio" v-model="pick" v-bind:value="a">
```

``` js
// 当选中时
vm.pick === vm.a
```

### 11.2.3. 选择框的选项

``` html
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

``` js
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

## 11.3. 修饰符

### 11.3.1. `.lazy`

在默认情况下,`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](#vmodel-ime-tip)输入法组合文字时).<br>
可以添加 `lazy` 修饰符,从而转变为使用 `change` 事件进行同步:

``` html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

### 11.3.2. `.number`

如果想自动将用户的输入值转为数值类型,可以给 `v-model` 添加 `number` 修饰符:

``` html
<input v-model.number="age" type="number">
```

这通常很有用,因为即使在 `type="number"` 时,HTML 输入元素的值也总会返回字符串.

### 11.3.3. `.trim`

如果要自动过滤用户输入的首尾空白字符,可以给 `v-model` 添加 `trim` 修饰符:

```html
<input v-model.trim="msg">
```

# 12. 组件基础

## 12.1. 基本示例

这里有一个 Vue 组件的示例:

``` js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

组件是可复用的 Vue 实例,且带有一个名字:在这个例子中是 `<button-counter>`.<br>
可以在一个通过 `new Vue` 创建的 Vue 根实例中,把这个组件作为自定义元素来使用:

```html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

```js
new Vue({ el: '#components-demo' })
```

因为组件是可复用的 Vue 实例,所以它们与 `new Vue` 接收相同的选项,例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等.<br>
仅有的例外是像 `el` 这样根实例特有的选项.

## 12.2. 组件的复用

可以将组件进行任意次数的复用:

```html
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

注意当点击按钮时,每个组件都会各自独立维护它的 `count`.<br>
因为每用一次组件,就会有一个它的新**实例**被创建.

### 12.2.1. `data` 必须是一个函数

当定义这个 `<button-counter>` 组件时,可能会发现它的 `data` 并不是像这样直接提供一个对象:

```js
data: {
  count: 0
}
```

取而代之的是,**一个组件的 `data` 选项必须是一个函数**,因此每个实例可以维护一份被返回对象的独立的拷贝:

```js
data: function () {
  return {
    count: 0
  }
}
```

## 12.3. 组件的组织

通常一个应用会以一棵嵌套的组件树的形式来组织:

![Component Tree](asserts/images/components.png)

例如,可能会有页头、侧边栏、内容区等组件,每个组件又包含了其它的像导航链接、博文之类的组件.

为了能在模板中使用,这些组件必须先注册以便 Vue 能够识别.<br>
这里有两种组件的注册类型:**全局注册**和**局部注册**.<br>
至此,的组件都只是通过 `Vue.component` 全局注册的:

```js
Vue.component('my-component-name', {
  // ... options ...
})
```

全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例,也包括其组件树中的所有子组件的模板中.

## 12.4. 通过 Prop 向子组件传递数据

早些时候,提到了创建一个博文组件的事情.<br>
问题是如果不能向这个组件传递某一篇博文的标题或内容之类的想展示的数据的话,它是没有办法使用的.<br>
这也正是 prop 的由来.

Prop 是可以在组件上注册的一些自定义特性.<br>
当一个值传递给一个 prop 特性的时候,它就变成了那个组件实例的一个属性.<br>
为了给博文组件传递一个标题,可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中:

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

一个组件默认可以拥有任意数量的 prop,任何值都可以传递给任何 prop.<br>
在上述模板中,会发现能够在组件实例中访问这个值,就像访问 `data` 中的值一样.

一个 prop 被注册之后,就可以像这样把数据作为一个自定义特性传递进来:

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

然而在一个典型的应用中,可能在 `data` 里有一个博文的数组:

```js
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
```

并想要为每篇博文渲染一个组件:

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```

如上所示,会发现可以使用 `v-bind` 来动态传递 prop.<br>
这在一开始不清楚要渲染的具体内容,比如[从一个 API 获取博文列表](https://jsfiddle.net/chrisvfritz/sbLgr0ad)的时候,是非常有用的.

## 12.5. 单个根元素

当构建一个 `<blog-post>` 组件时,的模板最终会包含的东西远不止一个标题:

```html
<h3>{{ title }}</h3>
```

最最起码,会包含这篇博文的正文:

```html
<h3>{{ title }}</h3>
<div v-html="content"></div>
```

然而如果在模板中尝试这样写,Vue 会显示一个错误,并解释道 **every component must have a single root element (每个组件必须只有一个根元素)**.<br>
可以将模板的内容包裹在一个父元素内,来修复这个问题,例如:

```html
<div class="blog-post">
  <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
```

看起来当组件变得越来越复杂的时候,的博文不只需要标题和内容,还需要发布日期、评论等等.<br>
为每个相关的信息定义一个 prop 会变得很麻烦:

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
  v-bind:content="post.content"
  v-bind:publishedAt="post.publishedAt"
  v-bind:comments="post.comments"
></blog-post>
```

所以是时候重构一下这个 `<blog-post>` 组件了,让它变成接受一个单独的 `post` prop:

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>
```

```js
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})
```

上述的这个和一些接下来的示例使用了 JavaScript 的[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)来让多行的模板更易读.<br>
它们在 IE 下并没有被支持,所以如果需要在不 (经过 Babel 或 TypeScript 之类的工具) 编译的情况下支持 IE,请使用[折行转义字符](https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/)取而代之.

现在,不论何时为 `post` 对象添加一个新的属性,它都会自动地在 `<blog-post>` 内可用.

## 12.6. 通过事件向父级组件发送消息

在开发 `<blog-post>` 组件时,它的一些功能可能要求和父级组件进行沟通.<br>
例如可能会引入一个可访问性的功能来放大博文的字号,同时让页面的其它部分保持默认的字号.

在其父组件中,可以通过添加一个 `postFontSize` 数据属性来支持这个功能:

```js
new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [/* ... */],
    postFontSize: 1
  }
})
```

它可以在模板中用来控制所有博文的字号:

```html
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    ></blog-post>
  </div>
</div>
```

现在在每篇博文正文之前添加一个按钮来放大字号:

```js
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
```

问题是这个按钮不会做任何事:

```html
<button>
  Enlarge text
</button>
```

当点击这个按钮时,需要告诉父级组件放大所有博文的文本.<br>
幸好 Vue 实例提供了一个自定义事件的系统来解决这个问题.<br>
可以调用内建的 [**`$emit`** 方法](../api/#vm-emit)并传入事件的名字,来向父级组件触发一个事件:

```html
<button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>
```

然后可以用 `v-on` 在博文组件上监听这个事件,就像监听一个原生 DOM 事件一样:

```html
<blog-post
  ...
  v-on:enlarge-text="postFontSize += 0.1"
></blog-post>
```
### 12.6.1. 使用事件抛出一个值

有的时候用一个事件来抛出一个特定的值是非常有用的.<br>
例如可能想让 `<blog-post>` 组件决定它的文本要放大多少.<br>
这时可以使用 `$emit` 的第二个参数来提供这个值:

```html
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>
```

然后当在父级组件监听这个事件的时候,可以通过 `$event` 访问到被抛出的这个值:

```html
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

或者,如果这个事件处理函数是一个方法:

```html
<blog-post
  ...
  v-on:enlarge-text="onEnlargeText"
></blog-post>
```

那么这个值将会作为第一个参数传入这个方法:

```js
methods: {
  onEnlargeText: function (enlargeAmount) {
    this.postFontSize += enlargeAmount
  }
}
```

### 12.6.2. 在组件上使用 `v-model`

自定义事件也可以用于创建支持 `v-model` 的自定义输入组件.<br>
记住:

```html
<input v-model="searchText">
```

等价于:

```html
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>
```

当用在组件上时,`v-model` 则会这样:

``` html
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```

为了让它正常工作,这个组件内的 `<input>` 必须:

0. 将其 `value` 特性绑定到一个名叫 `value` 的 prop 上
0. 在其 `input` 事件被触发时,将新的值通过自定义的 `input` 事件抛出

写成代码之后是这样的:

```js
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
```

现在 `v-model` 就应该可以在这个组件上完美地工作起来了:

```html
<custom-input v-model="searchText"></custom-input>
```

到目前为止,关于组件自定义事件需要了解的大概就这些了,如果阅读完本页内容并掌握了它的内容,会推荐再回来把[自定义事件](components-custom-events.html)读完.<br>


## 12.7. 通过插槽分发内容

和 HTML 元素一样,经常需要向一个组件传递内容,像这样:

``` html
<alert-box>
  Something bad happened.
</alert-box>
```

幸好,Vue 自定义的 `<slot>` 元素让这变得非常简单:

```js
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

如所见,只要在需要的地方加入插槽就行了——就这么简单！

## 12.8. 动态组件

有的时候,在不同组件之间进行动态切换是非常有用的,比如在一个多标签的界面里:

```html
<div id="dynamic-component-demo" class="demo">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    class="dynamic-component-demo-tab-button"
    v-bind:class="{ 'dynamic-component-demo-tab-button-active': tab === currentTab }"
    v-on:click="currentTab = tab"
  >
    {{ tab }}
  </button>
  <component
    v-bind:is="currentTabComponent"
    class="dynamic-component-demo-tab"
  ></component>
</div>
<script>
Vue.component('tab-home', { template: '<div>Home component</div>' })
Vue.component('tab-posts', { template: '<div>Posts component</div>' })
Vue.component('tab-archive', { template: '<div>Archive component</div>' })
new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})
</script>
<style>
.dynamic-component-demo-tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.dynamic-component-demo-tab-button:hover {
  background: #e0e0e0;
}
.dynamic-component-demo-tab-button-active {
  background: #e0e0e0;
}
.dynamic-component-demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
```

上述内容可以通过 Vue 的 `<component>` 元素加一个特殊的 `is` 特性来实现:

```html
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<component v-bind:is="currentTabComponent"></component>
```

在上述示例中,`currentTabComponent` 可以包括

0. 已注册组件的名字,或
0. 一个组件的选项对象

可以在[这里](https://jsfiddle.net/chrisvfritz/o3nycadu/)查阅并体验完整的代码,或在[这个版本](https://jsfiddle.net/chrisvfritz/b2qj69o1/)了解绑定组件选项对象,而不是已注册组件名的示例.

## 12.9. 解析 DOM 模板时的注意事项

有些 HTML 元素,诸如 `<ul>`、`<ol>`、`<table>` 和 `<select>`,对于哪些元素可以出现在其内部是有严格限制的.<br>
而有些元素,诸如 `<li>`、`<tr>` 和 `<option>`,只能出现在其它某些特定的元素内部.<br>


这会导致使用这些有约束条件的元素时遇到一些问题.<br>
例如:

``` html
<table>
  <blog-post-row></blog-post-row>
</table>
```

这个自定义组件 `<blog-post-row>` 会被作为无效的内容提升到外部,并导致最终渲染结果出错.<br>
幸好这个特殊的 `is` 特性给了一个变通的办法:

``` html
<table>
  <tr is="blog-post-row"></tr>
</table>
```

需要注意的是**如果从以下来源使用模板的话,这条限制是*不存在*的**:

0. 字符串 (例如:`template: '...'`)
0. 单文件组件 (`.vue`)
0. `<script type="text/x-template">`
