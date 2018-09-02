
<!-- TOC -->

- [1. 前言](#1-前言)
  - [1.1. 鸣谢](#11-鸣谢)
  - [1.2. 什么是Gem](#12-什么是gem)
  - [1.3. Gem和Engine的关系](#13-gem和engine的关系)
- [2. 命名](#2-命名)
  - [2.1. 中划线和下划线](#21-中划线和下划线)
- [3. 初始化](#3-初始化)
  - [3.1. 重要目录及文件](#31-重要目录及文件)
  - [3.2. lib](#32-lib)
  - [3.3. 入口文件](#33-入口文件)
  - [3.4. LICENSE.txt](#34-licensetxt)
  - [3.5. README.md](#35-readmemd)
    - [3.5.1. README驱动开发](#351-readme驱动开发)
  - [3.6. Rakefile](#36-rakefile)
  - [3.7. Gemspec](#37-gemspec)
  - [3.8. Gemfile](#38-gemfile)
- [4. 测试驱动开发](#4-测试驱动开发)
  - [4.1. Rspec](#41-rspec)
    - [4.1.1. 简介](#411-简介)
    - [4.1.2. spec/spec_helper.rb](#412-specspec_helperrb)
    - [4.1.3. spec/目录](#413-spec目录)
    - [4.1.4. 主要API](#414-主要api)
    - [4.1.5. 增加rake任务](#415-增加rake任务)
- [5. 使用irb创建Ruby交互环境](#5-使用irb创建ruby交互环境)
    - [5.0.6. 加入rake任务](#506-加入rake任务)
- [6. 调试工具](#6-调试工具)
- [7. 命名空间](#7-命名空间)
- [8. 包含代码](#8-包含代码)
- [9. lib/gem_name/version.rb](#9-libgem_nameversionrb)
- [10. 遇红 变绿 重构](#10-遇红-变绿-重构)
- [11. 发布](#11-发布)
  - [11.1. 前提条件](#111-前提条件)
  - [11.2. rake -T](#112-rake--t)
    - [11.2.1. rake build](#1121-rake-build)
    - [11.2.2. rake install](#1122-rake-install)
    - [11.2.3. rake release](#1123-rake-release)
  - [11.3. 何时发布](#113-何时发布)
  - [11.4. 语义化版本](#114-语义化版本)
- [12. 更新日志](#12-更新日志)
  - [12.1. 为什么要包含一个更新日志?](#121-为什么要包含一个更新日志)
- [13. 加载](#13-加载)
  - [13.1. 猴子补丁](#131-猴子补丁)
  - [13.2. core_ext.rb](#132-core_extrb)
    - [13.2.1. 大量的方法](#1321-大量的方法)
- [14. 命令行可执行文件](#14-命令行可执行文件)
  - [14.1. bin/目录](#141-bin目录)
  - [14.2. 选项解析](#142-选项解析)
- [15. 配置模式](#15-配置模式)

<!-- /TOC -->

# 1. 前言
## 1.1. 鸣谢

## 1.2. 什么是Gem
Ruby gem 是一个可以复用的打包好的 Ruby 应用程序或者类库,它专注于特定的功能.

## 1.3. Gem和Engine的关系


# 2. 命名

## 2.1. 中划线和下划线

中划线的常用意义是创建一个已有gem的扩展.

# 3. 初始化

```shell
bundle gem gem_name
```

## 3.1. 重要目录及文件

***插入目录树***
`检查下面排序,名称是否和gem排序保持一致`

## 3.2. lib

打包的代码位于lib目录下.

## 3.3. 入口文件

lib/gem_name.rb的工作是 **加载gem的依赖** .<br>
这些依赖可能是内部或者第三方的库.<br>
而内部的类,就像Rubygems建议的那样,应该放在 lib/gem_name/目录下并且从那里被引用.

## 3.4. LICENSE.txt 

LICENSE.txt文件默认是MIT许可证.<br>
它规定代码可以被任何人用于做任何事而不用额外的许可或者认可.


## 3.5. README.md

一个 README 文件的最简形式, 需要至少能够回答下面几个问题:

0. 它是什么
0. 我如何使用它
0. 我如何作贡献

额外的部分比如系统要求,安装,作者,贡献者等,没人会责怪你在REAME里写太多的东西.

### 3.5.1. README驱动开发

先写 README 的理由:

0. 它迫使预先定义公共 API (宿主应用可以调用的方法),这会减少过程工程的倾向.
0. 它把烦人的文档部分放到了前面.<br>当你完成代码并且要发布gem时,最后要做的是撰写文档.<br>说真的,这一点也不好玩.<br>所以如果可以把这件事挪到前面来做,这样处境就会好些.
0. 会忘记我的 gem 是如何工作的…… 所以如果想要其他人来使用它,应该写一个 README 来说明安装,用法和如何做贡献(如果欢迎贡献者).


## 3.6. Rakefile

Rakefile 是一个用来定义和组织任务的文件,会从命令行运行它.<br>
默认情况下,它包含下面的内容:

```ruby
require "bundler/gem_tasks"
```

通过引用这个库,bundler提供了一些内置的任务来发布gem.


## 3.7. Gemspec

```ruby
# 一开始的两行把的gem的lib目录加入了load path(ruby会寻找的额外库的path).
# 这会允许从的宿主应用调用gem_name并且让它正确的加载的gem.

lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "gem_name/version"

Gem::Specification.new do |spec|
  # 第一部分是一些关于(作为作者)和gem的元数据.
  # 在发布之前,要完成描述,总结和主页.
  # 之后,会看到这些信息被用在gem的Rubygem.org的页面上.
  spec.name          = "gem_name"
  spec.version       = CatFile::VERSION
  spec.authors       = ["ff4c00"]
  spec.email         = ["ff4c00@gmail.com"]

  spec.summary       = %q{TODO: Write a short summary, because RubyGems requires one.}
  spec.description   = %q{TODO: Write a longer description or delete this line.}
  spec.homepage      = "TODO: Put your gem's website or public repo URL here."
  spec.license       = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  # 中间部分使用 git 来确定 gem 的文件.
  # 有一点要注意,如果更改gem并且通过本地文件路径引用gem的应用程序进行测试时,一些文件可能是不可见的.
  # 如果它们没有被 git 提交过(比如 可执行的命令行文件).
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # 最后一部分是gem的依赖定义.
  # 当在宿主应用中被调用时,bundler将会和gem的代码一起安装这些依赖.
  
  # 有两种依赖方法:
  # add_development_dependency — 定义一个开发环境依赖.当被用于生产环境或者当开发宿主程序时,这些依赖不会被安装.
  # 只有在开发本地gem时才会被安装.

  # add_dependency — 定义在所有环境中都需要的依赖
  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end

```

## 3.8. Gemfile

虽然 bundler 在项目的根目录创建了一个Gemfile,它不应该被修改除非有特殊的理由这么做.

# 4. 测试驱动开发

TODO: 测试驱动开发(TDD) 
测试不仅能保证系统是可用的,也保证了写出的代码是可维护的. 

## 4.1. Rspec

### 4.1.1. 简介

### 4.1.2. spec/spec_helper.rb
使rspec覆盖项目:
```ruby
require "gem_name"
```

### 4.1.3. spec/目录

测试文件放置目录,是lib/目录的镜像.

### 4.1.4. 主要API

```ruby
# 运行测试命令
rspec [路径(文件或目录)]
```
### 4.1.5. 增加rake任务

在Rakefile文件中新增一个spec任务并且设置为默认:

```ruby
RSpec::Core::RakeTask.new(:spec)
task :default => :spec
```

# 5. 使用irb创建Ruby交互环境

参数|含义
-|-
r|加载 Ruby 标准库以外的库
I|允许加入一个特定的目录到Ruby的load path

```ruby
irb -r gem_name -I ./lib #=>  获得一个Ruby交互环境
```

### 5.0.6. 加入rake任务

```ruby
# Rakefile
...
task :console do
  exec "irb -r gem_name -I ./lib" 
end 
```

这样直接运行 `rake console` 即可调用交互终端.

# 6. 调试工具

这里选择了pry:

```ruby
# gem_name.spec
...
spec.add_development_dependency "pry"

# lib/gem_name.rb
...
# 因为只在开发环境下使用pry,这意味着当gem被宿主应用加载时,它会尝试去加载pry.
# 有可能会因为没有pry而抛出Ruby LoadError异常.
begin
  require "pry"
rescue LoadError
end

```

# 7. 命名空间

一般来说, 一个Ruby库的文件名对应一个相同根命名空间的模块/类的名字,如:

```ruby
lib/gem_name/foo.rb #=> GemName::Foo
lib/gem_name/bar.rb #=> GemName::Bar
```

命名代码和模块是困难的.最好的建议是跟随 **单一职责原则** 并且创建只做一件事的文件/模块,并且把一件事做好.

# 8. 包含代码

默认情况下,bundler创建了lib/gem_name.rb文件.

```ruby
# 注意如何在文件lib/gem_name/目录中使用相对路径来包含加载文件的.
require "gem_name/version"
# gen需要包含的代码,都要在这里显示的声明加载
require "gen_name/文件名称"

module GemName
  # 通常会把配置和初始化代码放在这个文件里.
  # 把具体实现放在/lib/gem_name目录中的其他类库中.
end
```

# 9. lib/gem_name/version.rb

```ruby
module GemName 
  VERSION = "0.0.1"
end
```

文件lib/gem_name/version.rb文件定义了一个常量(VERSION)来标志gem的版本. <br>
发布新版时,增加VERSION的值来推送新代码到Rubygems.

# 10. 遇红 变绿 重构

# 11. 发布

## 11.1. 前提条件

> 本地仓库初始化及远程仓库配置完毕.

> 如果要将gem上传到rubygems.org(`rake release` 操作),需要一个[帐号](https://rubygems.org/sign_up, '创建帐号'). 


## 11.2. rake -T

> `rake -T` 用于rubygems初始化, ***只可用于首次上传代码***.

bundler默认创建的Rakefile中包含:

```ruby
require "bundler/gem_tasks"
```

这使得gem的发布变的很轻松:

```
$ rake -T
rake build           # Build gem_name-0.0.1.gem into the pkg directory
rake install         # Build and install gem_name-0.0.1.gem into system gems
rake release         # Create tag v0.0.1 and build and push gem_name-0.0.1.gem   # to Rubygems
```

从操作日志中不难看出 `rake -T` 实际上就是:rake build,rake install,rake release三者的命令合集.

### 11.2.1. rake build

`rake build` 将会在gem的pkg/目录下创建一个带版本号的.gem文件.<br>
bundler创建了一个.gitignore文件来把pkg/目录排除到git版本控制之外.<br>
所以即使在运行rakebuild命令后,被打包的*.gem文件也不会被提交到源码库.

### 11.2.2. rake install

`rake install` 将把gem安装到本地.不过既然可以在一个Gemfile中指定本地路径的gem(通过path选项),这个任务也就没什么用处了.

### 11.2.3. rake release

> rake release task假定已经设置好了本地的git仓库并且可以和Github的远程仓库同步

`rake release` 正如从命令的描述中看到的一样,它检查gem的当前版本并且建立它要发布v0.0.1版本,基于lib/gem_name/version.rb文件的检查.

执行 `rake release` 命令将会做如下的事情:

0. 构建gem包并且把它放在pkg/目录下
0. 为当前版本创建一个git tag并且把改变推送到Github上
0. 把打包好的gem推送到Rubygems,让它能被公开访问

## 11.3. 何时发布

> 更小更频繁的发布作为主流方式不无道理,有bug就发布一个补丁.

频繁的发布小的改变.

## 11.4. 语义化版本

版本格式:主版本号.次版本号.修订号<br>
版本号递增规则如下:

0. 主版本号:当你做了不兼容的 API 修改,
0. 次版本号:当你做了向下兼容的功能性新增,
0. 修订号:当你做了向下兼容的问题修正.


假设维护一个当前版本是1.5的gem.<br>
如果打算加入一个功能而 **不影响** (这点很重要)gem的其他部分的工作方式,<br>
应该发布一个次要的版本(在原来的基础上递增),版本:1.6.0

假设在1.6版本增加了新的功能,之后意识到新的代码有一个bug.<br>
修复了这个bug并且随后发布了一个补丁版本,应该是:1.6.1

在一年的开发后,认识到gem的某个部分非常糟糕并且想要重构.<br>
在重构的过程中,已经决定永久的改变公共接口.<br>
因为这些改变不会向后兼容,将会发布一个新的主版本2.0.0

<hr>

> [简介 | 语义化](https://semver.org/lang/zh-CN/)

# 12. 更新日志

## 12.1. 为什么要包含一个更新日志?

查看一个项目的提交列表不一定总是能展示所有的历史.<br>
由于这个原因,很多项目都维护一个文件CHANGELOG.md或者CHANGES.md在根目录下.<br>
这个更新日志记录了一个用户应该关心的不同版本的API和特性.<br>
就像 README.md 文件一样,这个文件通常使用markdown来书写内容,使得它易于在 Github 上被查看.

例如:

```markdown
 0.3.1 #版本号作为标题,所有的关于这个版本的更新都使用要点和示例代码(如果必要)来记录
  -----------

  - Fix location of inline testing library

  0.3
  -----------

  - Now includes a testing library that will run all jobs synchronously.
```
# 13. 加载

## 13.1. 猴子补丁

## 13.2. core_ext.rb

Ruby让扩展标准类库变得非常容易.比如,如果想要加入#foo方法到String类中,只要这样做:

```ruby
class String 
  def foo 
    # do some thing
  end
end
```

到处加入核心扩展不是一个好主意.事实上,在大部分情况下,创建一个单独的类在gem的命名空间下来加入额外的功能是一个更好的选择.

如果我们只加入少数方法到少数类中,通常采用的实践是创建一个叫做 `core_ext.rb` 的文件在gem的lib/目录下.

```ruby
# lib/gem_name/core_ext.rb

class String 
  def foo 
    # do some thing
  end
end
```

### 13.2.1. 大量的方法

我们需要加入不止一些的方法到 Ruby 的核心类库,比较好的做法是把它们分离到一个单独的文件,每个文件对应它们要打的猴子补丁的类.<br>
如果这样的话,那么core_ext.rb文件就做一件事,加载将会创建的独立的扩展类.

```ruby
# lib/gem_name/core_ext.rb

require "gem_name/core_ext/array"
require "gem_name/core_ext/string"
```

\#foo的实现就和以前一样,仅仅是在不同的文件中而已:

```ruby
# lib/gem_name/core_ext/core_ext.rb

class String 
  def foo 
    # do some thing
  end
end
```

注意这个文件是放在lib/gem_name/core_ext/目录中的.<br>
这是一个常用实践对于命名空间任何类库包含多个子类.也注意下虽然扩展是在 lib/gem_name/目录下,<br>
这个类不是一个GemName命名空间的派生.<br>
如果是的话,就会创建一个完全新的String类在命名空间内,而不是Ruby标准库里的String类了.

由于lib/gem_name/core_ext.rb文件已经完成了加载单独扩展的任务,<br>
主文件lib/gem_name.rb加载lib/gem_name/core_ext.rb文件,就可以加载所有它包含的库了.

# 14. 命令行可执行文件

很多Ruby gems提供了可执行的命令行作为它们的功能的一部分.想象一下离开了命令行还能使用 bunlder或者rake吗？那就不是一个gem了！

通常来说,可执行文件是独立在一个单独的类库中并且不被入口文件包含用于加载的.

如果想要创建一个命令行工具用foo命令来代理#foo方法在GemName::Foo内的作用并且返回想要的东西:

```bash
$ foo #=> the result from GemName::Foo #foo
```

## 14.1. bin/目录

bin/ 目录是配套的可执行文件的标准存放位置.再一次看看gem_name.gemspec文件注意下面这行：

```ruby
spec.executables = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
```

gemspec定义了一个可执行文件的列表,通过被提交到git并且位于bin/目录下.

为了实现上面的foo命令.需要加入bin/file_name文件,由于它是一个脚本会被命令行执行,所以有两个重要的改变要做：

0. 脚本声明(在文件的顶部加入 `#!/usr/bin/env ruby`)
0. 赋予执行权限(chomd +x bin/file_name(linux或者macOS平台))

```ruby
#!/usr/bin/env ruby
# 因为这个文件是独立于gem的其他部分的,所以不得不加载必要的依赖
require_relative "../lib/gem_name/file_name"
foo = GemName::ClassName.new.foo 
puts foo
```

提交改变,并运行 `rake install`

## 14.2. 选项解析

很少有命令行不支持选项解析.如果经常使用命令行,-h可能是一个经常使用的选项.

允许选项和参数被传入命令行可以呈几何级数地增强它的功能.幸运的是,Ruby已经有了标准库内置的OptonParser类.

TODO: 一个简单的例子.

# 15. 配置模式

