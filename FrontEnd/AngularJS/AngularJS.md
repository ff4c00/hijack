# 什么是AngularJS
## 双向数据绑定
键入的名称将立即更新显示在问候语中,这就是AngularJS双向数据绑定的概念.<br>
输入框的任何更改会立即反映到模型变量(一个方向),模型变量的任何更改都会立即反映到问候语文本中(另一方向).
```html
<!doctype html>
<!-- 标记ng-app告诉AngularJS处理整个HTML页并引导应用 -->
<html ng-app>
  <head>
    <script src="https://code.angularjs.org/1.7.3/angular.min.js"/> 
  </head>
  <body>
    <!-- ng-model 用于绑定到模型变量 -->
    Your name: <input type="text" ng-model="yourname" placeholder="World">
    <hr>
    <!-- 使用双大括号标记{{}}的内容是绑定的表达式 -->
    Hello {{yourname || 'World'}}!
  </body>
</html>
```

## 三大组成部分
### 模板(Templates)
用HTML和CSS编写的文件,展现应用的视图.<br>
可给HTML添加新的元素、属性标记,作为AngularJS编译器的指令.<br>
AngularJS编译器是**完全可扩展的**,这意味着通过AngularJS可以在HTML中**构建自己的HTML标记**.

### 应用程序逻辑(Logic)和行为(Behavior)
应用程序逻辑和行为是用JavaScript定义的控制器.<br>
AngularJS与标准AJAX应用程序不同,不需要另外编写侦听器或DOM控制器,因为它们已经内置到AngularJS中了.

### 模型数据(Data)
模型是从AngularJS作用域对象的属性引申的.<br>
模型中的数据可以是Javascript对象、数组或基本类型.<br>
这都不重要,重要的是,他们都属于AngularJS作用域对象.<br>
AngularJS通过作用域来保持数据模型与视图界面UI的双向同步.一旦模型状态发生改变,AngularJS会立即刷新反映在视图界面中,反之亦然.

## 服务特性
0. 底层服务包括依赖注入,XHR、缓存、URL路由和浏览器抽象服务.
0. 可以扩展和添加自己特定的应用服务.
0. 这些服务可以让非常方便的编写WEB应用.

# 项目概述
## 项目主要内容
构建一个完整的AngularJS web应用程序。<br>
该web应用是一个Android设备清单的目录列表，<br>
您可以筛选列表以便查看您感兴趣的设备，然后查看设备的详细信息。

## 主要学习内容
0. 学习怎样使用AngularJS的客户端数据绑定和依赖注入功能来建立可立即响应用户操作的动态数据视图。
0. 学习如何使用AngularJS创建数据侦听器，且不需要进行DOM操作。
0. 学习一种更好、更简单的方法来测试您的web应用程序。
0. 学习如何使用AngularJS创建常见的web任务，例如更方便的将数据引入应用程序。

# 环境搭建

## 安装Node.js

```shell
# debian/ubuntu
sudo apt install nodejs-legacy
```
## 安装Testacular
```shell
# 是Node.js平台的默认包管理工具
sudo apt install npm
sudo npm install -g testacular
```
## 项目源代码
```
git clone git://github.com/angular/angular-phonecat.git
```
## 运行服务器后台程序
```
node scripts/web-server.js
```
# 基础知识

## 绑定
```
{{Angular expression}}
```
绑定由双大括号{{}}和表达式(Angular expression)组成。<br>
这个绑定告诉AngularJS需要运算其中的表达式并将结果插入DOM中.<br>
AngularJS表达式是一种类似于JavaScript的代码片段，AngularJS表达式仅在AngularJS的作用域中运行，而不是在整个DOM中运行。

## 指令
### ng-app
```html
<!doctype html>
<html lang="en" ng-app>
...
</html>
```
ng-app指令标记了AngularJS脚本的作用域.<br>
在\<html\>中添加ng-app属性即说明整个\<html\>都是AngularJS脚本作用域。<br>
也可以在局部使用ng-app指令，如\<div ng-app\>，则AngularJS脚本仅在该\<div\>中运行。<br>
该标签即定义了AngularJS应用的作用域.

### ng-repeat
ng-repeat 用于创建迭代器
```html
<table>
  <tr>
    <th>row number</th>
  </tr>
  <tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]">
    <td>{{i}}</td>
  </tr>
</table>
```

### ng-controller
```html
...
<!-- 作用域为:phonecatApp -->
<html lang="en" ng-app="phonecatApp">
  <body ng-controller="PhoneListController">

    <ul>
      <li ng-repeat="phone in phones">
        <span>{{phone.name}}</span>
        <p>{{phone.snippet}}</p>
      </li>
    </ul>

  </body>
</html>
```
当应用启动之后，会有一个根作用域被创建出来.<br>
而控制器的作用域是根作用域的一个典型后继.<br>
这个控制器的作用域对所有\<body ng-controller="PhoneListController"\>标记内部的数据绑定有效。
```javascript
...
// 创建phonecatApp的根作用域
var phonecatApp = angular.module('phonecatApp', []);

// $scope 表示控制器函数的作用域 
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

```
#### AngularJS的作用域
AngularJS的作用域理论非常重要.<br>
一个作用域可以视作模板、模型和控制器协同工作的粘接器。<br>
AngularJS使用作用域，同时还有模板中的信息，数据模型和控制器。<br>
这些可以帮助模型和视图分离，但是他们两者确实是同步的.<br>
**任何对于模型的更改都会即时反映在视图上；任何在视图上的更改都会被立刻体现在模型中**。

> [AngularJS作用域文档](http://docs.angularjs.org/api/ng.$rootScope.Scope)

### 迭代器过滤
数据绑定: 这是AngularJS的一个核心特性。<br>
当页面加载的时候,AngularJS会根据输入框的属性值名字,将其与数据模型中相同名字的变量绑定在一起,以确保两者的同步性。

在下面这段代码中,用户在输入框中输入的数据名字称作 query ,会立刻作为列表迭代器( ng-repeat=" phone in phones | filter: query")其
过滤器的输入。<br>
当数据模型引起迭代器输入变化的时候,迭代器可以高效得更新DOM将数据模型最新的状态反映出来。
```html
Search: <input ng-model="query">
<ul class="phones">
  <!-- filter 过滤器:filter函数使用 query 的值来创建一个只包含匹配 query 记录的新数组 -->
  <li ng-repeat="phone in phones | filter:query">
    <p>{{phone.name}}</p>
    <p>{{phone.snippet}}</p>
  </li>
</ul>
```
### 迭代器排序
```html
<!-- 双向绑定 -->
Search: <input ng-model="query">
Sort by:
<select ng-model="orderProp">
  <option value="name">Alphabetical</option>
  <option value="age">Newest</option>
</select>

<ul class="phones">
  <li ng-repeat="phone in phones | filter:query | orderBy:orderProp">
  {{phone.name}}
  <p>{{phone.snippet}}</p>
  </li>
</ul>
```
```js
<!-- 控制器代码 -->
function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S.",
    "age": 0},
    {"name": "Motorola XOOMTM with Wi-Fi",
    "snippet": "The Next, Next Generation tablet.",
    "age": 1},
    {"name": "MOTOROLA XOOMTM",
    "snippet": "The Next, Next Generation tablet.",
    "age": 2}
  ];
  // 设定默认值
  $scope.orderProp = 'age';
}
```

### 依赖注入
```html
<!-- 页面 -->
<body>
  <phone-list></phone-list>
</body>
```
```js
// 控制器 
'use strict';
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) {
        // self.phones = response.data;
        // 分页显示前五个
        self.phones = response.data.splice(0, 5);
      });
    }
  });

```
```html
<!-- 模板 -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-2">
      <p>
        Search:
        <input ng-model="$ctrl.query" />
      </p>
      <p>
        Sort by:
        <select ng-model="$ctrl.orderProp">
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </div>
    <div class="col-md-10">
      <ul class="phones">
        <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
          <span>{{phone.name}}</span>
          <p>{{phone.snippet}}</p>
        </li>
      </ul>
    </div>
  </div>
</div>

```
```json
// 数据
[
  {
    "age": 13,
    "id": "motorola-defy-with-motoblur",
    "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
    "snippet": "Are you ready for everything life throws your way?"
    ...
  },
  ...
]
```
#### $http
控制器中使用AngularJS服务$http向你的Web服务器发起一个HTTP请求<br>
以此从 app/phones/phones.json 文件中获取数据。

$http 仅仅是AngularJS众多内建服务中之一,这些服务可以处理一些Web应用的通用操作。<br>
AngularJS能将这些服务注入到任何你需要它们的地方。

### ng-src
```html
<img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />
```
如果仅仅用一个正常src属性来进行绑定( \<img class="diagram" src="{{phone.imageUrl}}"\> )<br>
浏览器会把AngularJS的 {{ 表达式 }} 标记直接进行字面解释,并且发起一个向非法url http://localhost:8000/app/{{phone.imageUrl}} 的请求。<br>

因为浏览器载入页面时,同时也会请求载入图片<br>
AngularJS在页面载入完毕时才开始编译——浏览器请求载入图片时 {{phone.imageUrl}} 还没得到编译!<br>
有了这个ng-src指令会避免产生这种情况,使用ng-src指令防止浏览器产生一个指向非法地址的请求。

### 多视图,路由和布局模板
```html
<!-- 页面 -->
<body>
  <div ng-view></div>
</body>
```
```js
// 路由配置
'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

```
#### ng-view
$route服务通常和ng-view指令一起使用.<br>
ng-view 指令的角色是为当前路由把对应的视图模板载入到布局模板中

### 定制过滤器
```html
<!-- phoneDetail模板 -->
...
<dd>{{$ctrl.phone.display.touchScreen | checkmark}}</dd>
...
```
```js
// 路由配置
'use strict';
angular.module('phonecatApp', [
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
```
```js
//过滤器
'use strict';
angular.
  module('core').
  // 过滤器命名为checkmark
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
```

### 事件处理器

#### ng-click
```js
'use strict';
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
          // 设置默认显示图片
          // 调用的时上面定义的function
          self.setImage(self.phone.images[0]);
        });
      }
    ]
  });

```
```html
<img ng-src="{{$ctrl.mainImageUrl}}" class="phone" />
...
<ul class="phone-thumbs">
  <li ng-repeat="img in $ctrl.phone.images">
    <!-- 调用controller中定义的setImage方法 -->
    <img ng-src="{{img}}" ng-click="$ctrl.setImage(img)" />
  </li>
</ul>
...

...
```
### REST定制
```js
// 通过一个工厂方法注册了一个定制服务
'use strict';

angular.
  module('core.phone').
  // $resource服务使得用短短的几行代码就可以创建一个RESTful客户端。应用使用这个客户端来代替底层的$http服务。
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
```
```js
...
function PhoneDetailController($routeParams, Phone) {
  var self = this;
  // $http.get('phones/phones.json').success(function(data) {
  //  $scope.phones = data;
  // });
  //换成了
  // $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){...}
  self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    self.setImage(phone.images[0]);
  });

  self.setImage = function setImage(imageUrl) {
    self.mainImageUrl = imageUrl;
  };
}
```

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 





## 单元测试
### .spec.js
单元测试文件
测试推荐使用Jasmine编写.

> [Jasmine | 官方主页](http://pivotal.github.com/jasmine/)

### 运行测试
1. 在一个单独的终端上,进入到项目目录并且运行 ./scripts/private/test-all.sh来启动测试
2. 打开一个新的浏览器窗口,并且转到 http://localhost:9876 ;
3. 选择“Capture this browser in strict mode”。
这个时候,你可以抛开你的窗口不管然后把这事忘了。JsTestDriver会自己把测试跑完并且把结果输出在你的终端里。
4. 运行 ./scripts/test.sh 进行测试 。

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 

### 


<hr>

> [Github | angular](https://github.com/angular/angular)

> [Github | angular-seed](https://github.com/angular/angular-seed)