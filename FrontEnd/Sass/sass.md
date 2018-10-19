# CSS 功能拓展
## 嵌套规则
Sass 允许将一套 CSS 样式嵌套进另一套样式中,内层的样式将它外层的选择器作为父选择器.
```sass
#main p {
  color: #00ff00;
  width: 97%;

  .redbox {
    background-color: #ff0000;
    color: #000000;
  }
}
```
```css
#main p {
  color: #00ff00;
  width: 97%; 
 }
 
#main p .redbox {
  background-color: #ff0000;
  color: #000000; 
 }
```

## 父选择器 &
当需要直接使用嵌套外层的父选择器时,可以用 & 代表嵌套规则外层的父选择器.
```sass
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```

```css
a {
  font-weight: bold;
  text-decoration: none; 
}

a:hover {
  text-decoration: underline;
}
body.firefox a {
  font-weight: normal; 
}
```
需要注意的是
```sass
a {
  body.firefox & { font-weight: normal; }
}
```
会编译为
```css
body.firefox a {
  font-weight: normal; 
}
```
而不是
```css
a body.firefox a {
  font-weight: normal; 
}
```

编译后的 CSS 文件中 & 将被替换成嵌套外层的父选择器,如果含有多层嵌套,最外层的父选择器会一层一层向下传递：
```sass
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```
编译为
```css
#main {
  color: black; }
#main a {
  font-weight: bold; 
}
#main a:hover {
  color: red; 
}
```

& 作为选择器的第一个字符,其后可以跟随后缀生成复合的选择器.
```sass
#main {
  color: black;
  &-sidebar { border: 1px solid; }
}
编译为
```
```css
#main {
  color: black; 
}
#main-sidebar {
  border: 1px solid;
}
```
当父选择器含有不合适的后缀时,Sass 将会报错.

## 属性嵌套
CSS 属性遵循相同的命名空间时,Sass 允许将属性嵌套在命名空间中.<br>
如font: 20px/24px%所示,命名空间也可以包含自己的属性值.
```sass
.funky {
  font: 20px/24px {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

```css
.funky {
  font: 20px/24px;
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; 
}
```


## 占位符选择器 %
占位符选择器和id,class选择器写法类似.
```sass
#content a%extreme {
  color: blue;
}

.notice {
  @extend %extreme
}
```

```css
#content a .notice {
  color: blue;
}
```


## 注释 /* */ 与 //
多行注释 /* */,以及单行注释 //,前者会 被完整输出到编译后的 CSS 文件中,而后者则不会.

## SassScript

### 变量 $ 
变量以美元符号开头,赋值方法与 CSS 属性的写法一样.

变量支持块级作用域,嵌套规则内定义的变量只能在嵌套规则内使用（局部变量）,<br>
不在嵌套规则内定义的变量则可在任何地方使用（全局变量）.<br>
将局部变量转换为全局变量可以添加 !global 声明
```sass
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

```css
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```


### 数据类型

#### 数字

#### 字符串
SassScript 支持 CSS 的两种字符串类型：有引号字符串与无引号字符串.

使用 #{}时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名
```sass
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}
@include firefox-message(".header");
```

```css
body.firefox .header:before {
  content: "Hi, Firefox users!"; 
}
```


#### 颜色

```sass

```

```css

```


#### 布尔型

```sass

```

```css

```


#### null

```sass

```

```css

```


#### 数组
数组指 Sass 如何处理 CSS 中 margin: 10px 15px 0 0 或者 font-face: Helvetica, Arial, sans-serif 这样通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为数组 —— 只包含一个值的数组。

数组本身没有太多功能，但 Sass list functions 赋予了数组更多新功能：nth 函数可以直接访问数组中的某一项；join 函数可以将多个数组连接在一起；append 函数可以在数组中添加新值；而 @each 指令能够遍历数组中的每一项。

数组中可以包含子数组，比如 1px 2px, 5px 6px 是包含 1px 2px 与 5px 6px 两个数组的数组。如果内外两层数组使用相同的分隔方式，需要用圆括号包裹内层，所以也可以写成 (1px 2px) (5px 6px)。变化是，之前的 1px 2px, 5px 6px 使用逗号分割了两个子数组 (comma-separated)，而 (1px 2px) (5px 6px) 则使用空格分割(space-separated)。

当数组被编译为 CSS 时，Sass 不会添加任何圆括号（CSS 中没有这种写法），所以 (1px 2px) (5px 6px) 与 1px 2px, 5px 6px 在编译后的 CSS 文件中是完全一样的，但是它们在 Sass 文件中却有不同的意义，前者是包含两个数组的数组，而后者是包含四个值的数组。

用 () 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 font-family: () Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 1px 2px () 3px 或 1px 2px null 3px。

基于逗号分隔的数组允许保留结尾的逗号，这样做的意义是强调数组的结构关系，尤其是需要声明只包含单个值的数组时。例如 (1,) 表示只包含 1 的数组，而 (1 2 3,) 表示包含 1 2 3 这个以空格分隔的数组的数组。

```sass

```

```css

```


#### 哈希

```sass

```

```css

```


#### ()

```sass

```

```css

```


#### 函数 

```sass

```

```css

```


#### 插值语句 #{}

```sass

```

```css

```


#### & in SassScript

```sass

```

```css

```


#### !default

```sass

```

```css

```


### @-Rules 与指令

```sass

```

```css

```


#### @import

```sass

```

```css

```


#### 分音

```sass

```

```css

```


#### 嵌套 @import

```sass

```

```css

```


#### @media

```sass

```

```css

```


#### @extend

```sass

```

```css

```


#### 多重延伸

```sass

```

```css

```


#### 继续延伸

```sass

```

```css

```


#### !optional 声明

```sass

```

```css

```


### 控制指令 

```sass

```

```css

```


#### if()

```sass

```

```css

```


#### @if

```sass

```

```css

```


#### @for

```sass

```

```css

```


#### @each

```sass

```

```css

```


#### @while

```sass

```

```css

```


### 混合指令

```sass

```

```css

```


#### 定义混合指令 @mixin 

```sass

```

```css

```


#### 引用混合样式 @include

```sass

```

```css

```


#### 参数

```sass

```

```css

```


#### 向混合样式中导入内容

```sass

```

```css

```


### 函数指令

```sass

```

```css

```


### 输出格式

```sass

```

```css

```


#### :nested

```sass

```

```css

```


#### :expanded

```sass

```

```css

```


#### :compact

```sass

```

```css

```



```sass

```

```css

```

#### :compressed