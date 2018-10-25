> 验证码工具

<!-- TOC -->

- [依赖](#依赖)
  - [ImageMagick](#imagemagick)
  - [ghostscript](#ghostscript)
- [使用](#使用)
  - [Gemfile](#gemfile)
  - [generate](#generate)
  - [application.rb](#applicationrb)
  - [view](#view)
  - [action](#action)
    - [健壮参数](#健壮参数)

<!-- /TOC -->

# 依赖

## ImageMagick

```
sudo  apt-get install imagemagick
```

## ghostscript

```
apt-get install ghostscript
```

# 使用

## Gemfile

```
gem 'simple_captcha2', require: 'simple_captcha'
bundle install
```

## generate

```
rails generate simple_captcha [可选项:可选erb或haml,默认erb]
rails db:migrate
```

## application.rb

```ruby
ApplicationController < ActionController::Base
  include SimpleCaptcha::ControllerHelpers
end
```

## view

```html
<%= show_simple_captcha %>
```

## action

```ruby
if simple_captcha_valid?
  do this
else
  do that
end
```

### 健壮参数

添加:

```ruby
:captcha, :captcha_key
```

<hr>

> [GitHub | simple-captcha](https://github.com/pludoni/simple-captcha)
