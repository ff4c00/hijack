<!-- TOC -->

- [1. 简介](#1-简介)
- [2. 入门](#2-入门)
  - [2.1. 安装JRuby](#21-安装jruby)
    - [2.1.1. Linux和Mac OS X](#211-linux和mac-os-x)
    - [2.1.2. jruby -S](#212-jruby--s)
- [3. 通过JRuby调用Java](#3-通过jruby调用java)
  - [3.1. require 'java'](#31-require-java)
  - [3.2. 访问和导入Java类](#32-访问和导入java类)
    - [3.2.1. 导入jar文件](#321-导入jar文件)
    - [3.2.2. 引用Java类](#322-引用java类)
    - [3.2.3. java_import](#323-java_import)
    - [3.2.4. include_package](#324-include_package)
  - [4. 自动绑定](#4-自动绑定)
  - [调用Java方法](#调用java方法)
    - [替换命名风格](#替换命名风格)

<!-- /TOC -->
# 1. 简介

JRuby是Ruby编程语言的100％Java实现.它是JVM的Ruby.

# 2. 入门

## 2.1. 安装JRuby

> 依赖项: JavaSE 

### 2.1.1. Linux和Mac OS X

```bash
rvm install jruby
rvm use jruby
jruby --version #=> 确保正常返回版本号
```

### 2.1.2. jruby -S

`jruby -S` 作为前缀来执行普通的ruby常用命令,则将用JRuby去执行这条命令,如:

```bash
jruby -S gem list --local
jruby -S gem install gem_name
jruby -S rake db:migrate
```

-S参数告诉JRuby使用其已安装二进制文件的版本.

# 3. 通过JRuby调用Java

## 3.1. require 'java'
`require 'java'` 指令将加载并允许访问任何捆绑的Java库(java类路径中的类)


```ruby
require 'java'

frame = javax.swing.JFrame.new("Window")
label = javax.swing.JLabel.new("Hello")

# 可以在Java对象上透明地调用Java方法,就像在Ruby中定义的一样.
frame.add(label) # 调用Java方法'add'
frame.setDefaultCloseOperation(javax.swing.JFrame::EXIT_ON_CLOSE)
frame.pack
frame.setVisible(true)
```

## 3.2. 访问和导入Java类

### 3.2.1. 导入jar文件

```ruby
require 'path/to/mycode.jar'
```

### 3.2.2. 引用Java类

```ruby
Java: org.foo.department.Widget
Ruby: Java::OrgFooDepartment::Widget
```
所加载的所有Java类都存放在命名空间为Java的module中.

### 3.2.3. java_import

可以通过指定其全名（例如java.lang.System）来访问已加载或位于类路径中的任何Java类.

```ruby
require 'java'
java_import java.lang.System
version = System.getProperties["java.runtime.version"]
```

在Java类与现有Ruby类具有相同名称的情况下,使用模块名称来限制对导入的Java类的访问也很有用.

```ruby
java_import java.io.File
newfile = File.new("file.txt")
=> #<Java::JavaIo::File:0xdc6f00 @java_object=file.txt>

# 因为已经重新定义了Ruby常量文件,并且无法再访问Ruby File类.
File.open('README', 'r') {|f| puts f.readline }
=> NoMethodError: private method `open' called for Java::JavaIo::File:Class
```

***建议 不要将 `java_import` 语句放在Ruby程序中的顶级命名空间中.***

如果创建一个名为的模块JavaIO并在模块定义中包含该包:

```ruby
module JavaIO
  include_package "java.io"
end

# 现在可以创建Java类File的新实例,而不会影响File类的Ruby版本.
newfile = JavaIO::File.new("file.txt")
  => #<Java::JavaIo::File:0x15619c @java_object=file.txt>

# Ruby File类仍然可以访问

```

### 3.2.4. include_package

使用 `include_package "package_name"` 将支持在包命名空间中访问Java类.

```ruby
module JavaLangDemo
  include_package 'java.lang'
  # alternately, use the #import method
  #import 'java.lang'
end

version = JavaLangDemo::System.out # java.lang.System.out
=> #<Java::JavaIo::PrintStream:0x30a7202>

```

## 4. 自动绑定

JRuby的自动绑定以下名称的一类的顶级Java包:com,org,java,javax和javafx. <br>
这意味着可以引用这些包而 *无需明确要求或导入它们* .<br>
这对于 `require 'java'` 出现的应用程序中的所有Ruby类都有效.<br>
如果不希望使用此特性,可以为该类取消定义它.

```ruby
require 'java'

class MethodMissing
  # 取消定义标准“自动”绑定到Java,以避免任何自动绑定.
  undef org, com, java, javax, javafx
  
  def method_missing(m, *args)
    puts "method_missing: #{m}."
    "This is what I return from method missing."
  end
end

```

## 调用Java方法

### 替换命名风格

在Ruby中,人们通常更喜欢method_names_like_this,而Java传统上使用methodNamesLikeThis.<br>
如果需要,可以使用Ruby风格的方法名称而不是Java方法名称.<br>
例如，这两个调用是等价的:

```ruby
java.lang.System.currentTimeMillis
java.lang.System.current_time_millis
```

<hr>

> [CallingJavaFromJRuby](https://github.com/jruby/jruby/wiki/CallingJavaFromJRuby)
