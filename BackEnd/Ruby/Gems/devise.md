> 概述

基于Warden的Rails身份验证解决方案.<br>
包含用户登录注册系统，可以轻易创建登录注册系统.



<!-- TOC -->

- [安装](#安装)
  - [Gemfile](#gemfile)
  - [generate](#generate)
  - [邮件程序设置](#邮件程序设置)
    - [config/environments/development.rb](#configenvironmentsdevelopmentrb)
  - [generate](#generate-1)
  - [migrate](#migrate)
  - [控制器的过滤器和帮助方法](#控制器的过滤器和帮助方法)
    - [提供的帮助方法](#提供的帮助方法)
  - [配置视图](#配置视图)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)
  - [](#-4)
  - [](#-5)
  - [](#-6)
  - [](#-7)
- [参考资料](#参考资料)

<!-- /TOC -->

# 安装

## Gemfile

```Ruby
gem 'devise'
```

## generate

```Ruby
rails generate devise:install
```

## 邮件程序设置

### config/environments/development.rb

```Ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

## generate

```Ruby
rails generate devise 模型名
```

## migrate

```Ruby
rails db:migrate
```

## 控制器的过滤器和帮助方法

Devise将创建一些帮助程序，以便在控制器和视图中使用,在需要的控制器中添加:

```Ruby
# 限制controller的使用权限
before_action :authenticate_user!
```

### 提供的帮助方法

如果模型不是User,将下面的user替换为model_name即可.

```Ruby

# 判断用户是否登录
user_signed_in?

# 取得当前使用者
 current_user

# 存取session
user_session
```

## 配置视图

```Ruby
rails generate devise：views
```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```

## 

```Ruby

```


# 参考资料

> [Github | devise](https://github.com/plataformatec/devise)
> []()
> []()
> []()
> []()
> []()
> []()