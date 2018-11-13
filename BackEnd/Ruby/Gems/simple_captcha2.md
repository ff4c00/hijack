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
  - [zh-CN.yml](#zh-cnyml)
  - [app/views/simple_captcha/_simple_captcha.erb](#appviewssimple_captcha_simple_captchaerb)
  - [action](#action)
    - [健壮参数](#健壮参数)
- [进阶](#进阶)
  - [config/initializers/simple_captcha.rb](#configinitializerssimple_captcharb)
- [附件](#附件)
  - [页面样式](#页面样式)

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

## zh-CN.yml

```yml
  simple_captcha:
    placeholder: "验证码"
    label: "请输入验证码"
    refresh_button_text: "刷新"
    message:
      default: "验证码错误"
      user: "验证码不一样"
```

## app/views/simple_captcha/_simple_captcha.erb

验证码页面内容文件,可在此修改样式.

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


# 进阶

## config/initializers/simple_captcha.rb

新建config/initializers/simple_captcha.rb文件.
在这个文件中可以针对验证码的格式进行配置:

```ruby
SimpleCaptcha.setup do |sc|
  
  # 图片大小
  sc.image_size = '100x28'

  # 验证码长度
  sc.length = 6

  # 图片背景
  # 可选值:'embosed_silver','simply_red','simply_green','simply_blue','distorted_black','all_black','charcoal_grey','almost_invisible''random'
  sc.image_style = 'simply_blue'

  # 扭曲程度
  # 可选值: 'low', 'medium', 'high', 'random'
  sc.distortion = 'high'

  # 字体变形程度
  # 可选值: 'none', 'low', 'medium', 'high'
  sc.implode = 'high'
end
```


# 附件

## 页面样式

```css
<style type="text/css">
  .simple_captcha{border: 1px solid #ccc; padding: 5px !important;}
  .simple_captcha{ width: 97%;float: left;margin-top: 20px;margin-bottom: 20px;},
  .simple_captcha div{display: table;}
  .simple_captcha .simple_captcha_field {float: left;},
  .simple_captcha .simple_captcha_image{
    border: 1px solid #ccc;
    margin: 0px 0px 2px 0px !important;
    padding: 0px !important;
    float: left;
    width: 100px;
  }
  .simple_captcha .simple_captcha_image img{
    margin: 0px !important;
    padding: 0px !important;
    width: 110px !important;
  }
  .simple_captcha .simple_captcha_label{font-size: 12px;}
  .simple_captcha .simple_captcha_field input{
    font-size: 16px;
    border: none;
    width: 289px;
    height: 40px;
    margin-left: 3px;
  }

  .simple_captcha_image{
    margin: 0px 0px 2px 0px !important;
    padding: 0px !important;
    border-right: 1px solid #DDDDDD;
    float: left;
    width: 110px;
  }
  
  .simple_captcha_refresh_button {height: 40px;}
  .simple_captcha_refresh_button a {
    padding-top: 13px;
    margin-left: 10px;
    float: left;
  }

</style>

```



<hr>

> [GitHub | simple-captcha](https://github.com/pludoni/simple-captcha)