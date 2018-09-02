<!-- TOC -->

- [1. 简介](#1-简介)
  - [1.1. 什么是引擎](#11-什么是引擎)
  - [1.2. 引擎和插件](#12-引擎和插件)
  - [1.3. 命名空间](#13-命名空间)
- [2. 关于引擎](#2-关于引擎)
  - [2.1. 插件生成器](#21-插件生成器)
  - [2.2. Gem加载过程](#22-gem加载过程)
  - [2.3. 内嵌测试应用](#23-内嵌测试应用)
- [3. 应用挂载引擎](#3-应用挂载引擎)
  - [3.1. Gemfile指定引擎](#31-gemfile指定引擎)
  - [3.2. 添加路由](#32-添加路由)
  - [3.3. bundle install](#33-bundle-install)
  - [3.4. 执行引擎迁移](#34-执行引擎迁移)
    - [3.4.1. 引擎迁移复制到应用中](#341-引擎迁移复制到应用中)
  - [3.5. 运行迁移](#35-运行迁移)
- [4. 引擎调用应用服务](#4-引擎调用应用服务)
  - [4.1. 调用应用控制器](#41-调用应用控制器)
  - [4.2. 在引擎中配置所使用的应用中的类](#42-在引擎中配置所使用的应用中的类)
- [5. 应用调用引擎服务](#5-应用调用引擎服务)
  - [5.1. 覆盖引擎模型和控制器](#51-覆盖引擎模型和控制器)
    - [5.1.1. 修饰器模式](#511-修饰器模式)
      - [5.1.1.1. 引擎实现装饰器模式](#5111-引擎实现装饰器模式)
      - [5.1.1.2. 宿主应用实现装饰器模式](#5112-宿主应用实现装饰器模式)
    - [5.1.2. 通过ActiveSupport::Concern模块实现装饰器模式](#512-通过activesupportconcern模块实现装饰器模式)
  - [5.2. 覆盖视图](#52-覆盖视图)
  - [5.3. 调用路由](#53-调用路由)
  - [5.4. 加载引擎的静态资源文件](#54-加载引擎的静态资源文件)
  - [5.5. 独立加载静态资源文件及预编译](#55-独立加载静态资源文件及预编译)
  - [5.6. 安装引擎的其他gem依赖](#56-安装引擎的其他gem依赖)
- [6. Active Support on_load 钩子](#6-active-support-on_load-钩子)

<!-- /TOC -->

# 1. 简介
## 1.1. 什么是引擎
引擎可以看作为宿主应用提供附加功能的微型应用,引擎和应用基本上可以看作同一个事物,Rails应用只不过是“加强版”的引擎.

## 1.2. 引擎和插件
引擎还和插件密切相关.<br>
两者具有相同的lib/目录结构,并且都使用 `rails plugin new` 生成器来生成.<br>
区别在于,引擎被 Rails 视为“完整的插件”（通过传递给生成器的 --full 选项可以看出这一点）.<br>
在这里实际使用的是 --mountable 选项,这个选项包含了 --full 选项的所有特性. ***“完整的插件”简称为“引擎”*** .<br>
也就是说,引擎可以是插件,插件也可以是引擎.

## 1.3. 命名空间
***引擎的所有组件,都具有独立的命名空间.***

<hr>

> 在任何时候,应用的优先级都应该比引擎高.应用对其环境中发生的事情拥有最终的决定权.引擎用于增强应用的功能,而不是彻底改变应用的功能.

> 应用和引擎一旦发生冲突,应用的优先级要高于引擎.

# 2. 关于引擎
## 2.1. 插件生成器

```bash
rails plugin new engine_name --mountable
```

通过 --mountable 选项,生成器会创建“可挂载”和具有独立命名空间的引擎.此选项和 --full 选项会为引擎生成相同的程序骨架.

## 2.2. Gem加载过程
Bundler加载此Gem -> 解析gemspec文件 -> 加载lib/engine_name.rb文件 -> lib/engine_name/engine.rb(文件中定义了该gem的基础模块) -> 加载Gem基础模块

## 2.3. 内嵌测试应用
在 test/dummy文件夹中有一个内嵌于引擎中的精简版 Rails 测试应用,可用于测试引擎.<br>
在test/dummy文件夹中运行 `rails server` 命令来启动测试应用.

# 3. 应用挂载引擎
## 3.1. Gemfile指定引擎
在 Gemfile 中以普通 gem 的方式指定引擎,如果是本地引擎,需要在 Gemfile 中指定 :path 选项
```ruby
gem 'engine_name', path: '相对或绝对路径'
```
## 3.2. 添加路由
```ruby
Rails.application.routes.draw do
  # 在应用中只能通过此路径访问该引擎
  mount EngineName::Engine => "/自定义根路径"
end
```
## 3.3. bundle install

## 3.4. 执行引擎迁移
### 3.4.1. 引擎迁移复制到应用中
第一次运行时,Rails 会复制引擎中所有迁移.再次运行时, *只会复制尚未复制的迁移* .
```ruby
rails engine_name:install:migrations

# 如果需要从多个引擎中复制迁移,可以使用下述命令
rails railties:install:migrations
```
## 3.5. 运行迁移 
```ruby
# 应用中执行
rails db:migrate
# 通过指定 SCOPE 选项,可以只运行指定引擎的迁移
rails db:migrate SCOPE=engine_name

# 在需要还原并删除引擎的迁移时运行
rails db:migrate SCOPE=engine_name VERSION=0
```
# 4. 引擎调用应用服务

## 4.1. 调用应用控制器
```ruby
module EngineName
  # 引擎的控制器常常需要访问宿主应用的  ApplicationController 类中的方法,
  # 为此可以让引擎的 ApplicationController 类继承自宿主应用的 ApplicationController 类
  # class ApplicationController < ::ApplicationController
  class ApplicationController < ::ApplicationController
  end
end
```

## 4.2. 在引擎中配置所使用的应用中的类
在引擎中调用应用中的类(class)时,可能会因类名不同而产生差异.<br>
因此类名需要作为可配置项.<br>
具体操作是使用mattr_accessor方法,也就是把下面这行代码添加到引擎的 lib/engine_name.rb 文件中：
```ruby
mattr_accessor :author_class
```
mattr_accessor 方法的工作原理与attr_accessor和cattr_accessor方法类似,<br>
其作用是根据指定名称为模块提供 *设值方法* 和 *读值方法* .<br>
使用时直接调用 EngineName.author_class 方法即可

```ruby
# app/models/engine_name/article.rb
module EngineName
  class Article < ApplicationRecord
    ...
    # 当需要存取应用模型中的某个属性时,可以在引擎调用模型中为该属性注册存取器,通过回调进行存取.
    attr_accessor :author_name
    belongs_to :author, class_name: EngineName.author_class.to_s
    
    before_validation :set_author
    private
      def set_author
        # 调用应用模型
        # self.author = EngineName.author_class.constantize.find_or_create_by(name: author_name)
        self.author = EngineName.author_class.find_or_create_by(name: author_name)
      end
    ...
  end
end

# 为了避免在每次调用EngineName.author_class方法时调用constantize方法,可以在lib/engine_name.rb文件中覆盖EngineName模块的author_class读值方法,在返回author_class前调用constantize方法：

# lib/engine_name.rb
require "engine_name/engine"

module EngineName
  # mattr_accessor方法的工作原理与attr_accessor和cattr_accessor方法类似
  # 其作用是根据指定名称为模块提供设值方法和读值方法.
  # 使用时直接调用EngineName.author_class方法即可
  mattr_accessor :author_class
  def self.author_class
    @@author_class.constantize
  end
end

# 为了配置引擎所使用的应用中的类,需要使用初始化脚本.
# 只有通过初始化脚本,才能在应用启动并调用引擎模型前完成相关配置.

# 在安装 engine_name 引擎的应用中,打开 config/initializers/engine_name.rb 文件,创建新的初始化脚本并添加：

# config/initializers/engine_name.rb
EngineName.author_class = "ClassName"


```


# 5. 应用调用引擎服务
## 5.1. 覆盖引擎模型和控制器
### 5.1.1. 修饰器模式
#### 5.1.1.1. 引擎实现装饰器模式
```ruby
# 要想扩展引擎的模型类和控制器类,比如在宿主应用中直接打开/修改它们（因为模型类和控制器类只不过是继承了特定 Rails 功能的 Ruby 类）.
# 通过打开类的技术,可以根据宿主应用的需求对引擎的类进行自定义,实际操作中通常会使用装饰器模式.
# 不光是装饰器,对于添加到引擎中但没有在宿主应用中引用的任何东西,都需要进行这样的处理.
# lib/engine_name/engine.rb
...
config.to_prepare do
  Dir.glob(Rails.root + "app/decorators/**/*_decorator*.rb").each do |c|
    require_dependency(c)
  end
end
...
```

#### 5.1.1.2. 宿主应用实现装饰器模式
宿主通过`Class#class_eval`实现装饰器模式.

```ruby
# EngineName/app/models/article.rb
class Article < ApplicationRecord
  def summary
    "#{title}"
  end
end

# 宿主覆盖引擎Article#summary方法：
# MyApp/app/decorators/models/EngineName/article_decorator.rb(覆盖路径取决于引擎实现装饰器中的读取路径)
EngineName::Article.class_eval do
  def summary
    "#{title} - #{truncate(text)}"
  end
end

```

### 5.1.2. 通过ActiveSupport::Concern模块实现装饰器模式
对类进行简单修改时,使用 Class#class_eval 方法很方便,但对于复杂的修改,就应该考虑使用 ActiveSupport::Concern 模块了.<br>
ActiveSupport::Concern模块能够管理互相关联、依赖的模块和类运行时的**加载顺序**,这样就可以放心地实现代码的模块化.<br>

添加 Article#time_since_created 方法并覆盖 Article#summary 方法：

```ruby
# MyApp/app/models/EngineName/article.rb
class EngineName::Article < ApplicationRecord
  include EngineName::Concerns::Models::Article
 
  def time_since_created
    Time.current - created_at
  end
 
  def summary
    "#{title} - #{truncate(text)}"
  end
end


# EngineName/app/models/article.rb
class Article < ApplicationRecord
  include EngineName::Concerns::Models::Article
end

# EngineName/lib/concerns/models/article.rb
module EngineName::Concerns::Models::Article
  extend ActiveSupport::Concern
 
  # `included do` 中的代码可以在代码所在位置（article.rb）的上下文中执行,
  # 而不是在模块的上下文中执行（engine_nameh/concerns/models/article）.
  included do
    attr_accessor :author_name
    belongs_to :author, class_name: "User"
 
    before_validation :set_author
 
    private
      def set_author
        self.author = User.find_or_create_by(name: author_name)
      end
  end
 
  def summary
    "#{title}"
  end
 
  module ClassMethods
    def some_class_method
      'some class method string'
    end
  end
end
```

## 5.2. 覆盖视图
Rails 在查找需要渲染的视图时,首先会在应用的 app/views 文件夹中查找.<br>
如果找不到,就会接着在所有引擎的 app/views 文件夹中查找.

在渲染 EngineName::ArticlesController 的 index 动作的视图时,Rails 首先在 ***应用中*** 查找 app/views/engine_nameh/articles/index.html.erb 文件.如果**找不到**,就会接着**在引擎中**查找.

只要在宿主应用中新建 app/views/engine_nameh/articles/index.html.erb 视图,<br>
就可覆盖引擎中的对应视图,这样就可以根据需要自定义视图的内容.

## 5.3. 调用路由
默认情况下,引擎和应用的路由是隔离开的.<br>
这种隔离是通过在 Engine 类中调用 isolate_namespace 方法实现的.这样,应用和引擎中的同名路由就不会发生冲突.

根据渲染模板的位置不同,会调用引擎/应用的路由.<br>
当想要在应用中链接到引擎的某个位置时,就必须使用引擎的路由代理方法.<br>
```ruby
<!-- 应用下渲染模板 -->

<!-- 调用宿主应用的articles_path辅助方法 -->
<%= link_to "Blog articles", articles_path %>

<!-- 要想确保使用的是应用的 articles_path 辅助方法,可以使用main_app路由代理方法 -->
<%= link_to "Blog articles", main_app.articles_path %>

<!-- 通过路由代理方法来调用引擎的 articles_path 辅助方法 -->
<%= link_to "Blog articles", engine_name.articles_path %>

<!-- 当在引擎中渲染模板时,代码生成的链接将总是指向应用的根路径.要是不使用 main_app 路由代理方法,在不同位置渲染模板时,上述代码生成的链接就既有可能指向引擎的根路径,也有可能指向应用的根路径. -->
<%= link_to "Home", main_app.root_path %>
```
## 5.4. 加载引擎的静态资源文件
引擎和应用的静态资源文件的工作原理完全相同.<br>
由于引擎类继承自 Rails::Engine 类,应用知道应该在引擎的app/assets和lib/assets 文件夹中查找静态资源文件.

引擎的静态资源文件同样也应具有独立的命名空间.<br>
也就是说,引擎的静态资源文件 style.css 的路径应该是app/assets/stylesheets/engine_name/style.css,而不是 app/assets/stylesheets/style.css.<br>
如果引擎的静态资源文件不具有独立的命名空间,那么就有可能和宿主应用中的同名静态资源文件发生冲突.<br>
而一旦发生冲突, ***宿主应用中的静态资源文件将具有更高的优先级*** ,引擎的静态资源文件将被忽略.

**若想使用 Sass 和 CoffeeScript 等语言,要把相关的 gem 添加到引擎的 .gemspec 文件中.**

```html
<!-- 假设引擎有 app/assets/stylesheets/engine_name/style.css 这么一个静态资源文件,要想在宿主应用中包含此文件,直接使用 stylesheet_link_tag 辅助方法即可 -->
<%= stylesheet_link_tag "engine_name/style.css" %>

// 同样,也可以使用Asset Pipeline的require语句加载引擎中的静态资源文件：
/*
 *= require engine_name/style
*/
```
## 5.5. 独立加载静态资源文件及预编译
有时,宿主应用并不需要加载引擎的静态资源文件.<br>
例如,假设创建了一个仅适用于某个引擎的管理后台,这时宿主应用就不需要加载引擎的 admin.css 和 admin.js 文件<br>
因为只有引擎的管理后台才需要这些文件.也就是说,在宿主应用的样式表中包含 engine_name/admin.css 文件没有任何意义.<br>
对于这种情况,应该显式定义那些需要预编译的静态资源文件,这样在执行 `bin/rails assets:precompile` 命令时,Sprockets 就会预编译所指定的引擎的静态资源文件.

```ruby
# 在引擎的 engine.rb 文件中定义需要预编译的静态资源文件
initializer "engine_name.assets.precompile" do |app|
  app.config.assets.precompile += %w( admin.js admin.css )
end
```
## 5.6. 安装引擎的其他gem依赖
应该在引擎根目录中的.gemspec文件中声明引擎的gem依赖<br>
因为可能会以gem的方式安装引擎.如果在引擎的Gemfile文件中声明gem依赖,在通过 `gem install` 命令安装引擎时,就无法识别并安装这些依赖,这样引擎安装后将无法正常工作.

要想让 gem install 命令能够识别引擎的 gem 依赖,只需在引擎的 .gemspec 文件的 Gem::Specification 代码块中进行声明：

```ruby
Gem::Specification do |s|
  s.add_dependency "gem_name"
  # 还可以像下面这样声明用于开发环境的依赖
  s.add_development_dependency "gem_name"
end 
```
不管是用于所有环境的依赖,还是用于开发环境的依赖,在执行 `bundle install` 命令时都会被安装,只不过用于开发环境的依赖只会在运行引擎测试时用到.

如果有些依赖在加载引擎时就必须加载,那么应该在引擎初始化之前就加载它们,例如:

```ruby
# engine_name/lib/engine_name/engine.rb
require 'other_engine/engine'
require 'yet_another_engine/engine'
 
module EngineName
  class Engine < ::Rails::Engine
  end
end
```

# 6. Active Support on_load 钩子
ActiveSupport.on_load 可以延迟加载代码,在真正需要时才加载.

```ruby
ActiveRecord::Base.include(MyActiveRecordHelper)

# 修改后,加载 ActiveRecord::Base 时才会引入 MyActiveRecordHelper.
ActiveSupport.on_load(:active_record) { include MyActiveRecordHelper }
```



<hr>

> [rails指南 | 引擎入门](https://ruby-china.github.io/rails-guides/engines.html)

