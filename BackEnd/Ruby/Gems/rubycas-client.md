> 概述

CAS 统一认证登录客户端.

> 注意事项

***该项目目前处于无人维护状态(2018-11-22)*** .

<!-- TOC -->

- [安装](#安装)
  - [Gemfile](#gemfile)
  - [config/environment.rb](#configenvironmentrb)
  - [app/controllers/application.rb](#appcontrollersapplicationrb)
- [参考资料](#参考资料)

<!-- /TOC -->

# 安装

## Gemfile

```Ruby
gem 'rubycas-client', git: 'git://github.com/rubycas/rubycas-client.git'
```

## config/environment.rb

文件底部添加:

注释项表示非必须.
```Ruby
# ...
# 如果提示缺少常量,添加:
# require 'casclient'
# require 'casclient/frameworks/rails/filter'

# 启用详细的CAS日志记录
# cas_logger = CASClient::Logger.new(::Rails.root+'/log/cas.log')
# cas_logger.level = Logger::DEBUG

# cas_base_url: CAS服务器的基本URL(通常以/cas结尾)
CASClient::Frameworks::Rails::Filter.configure(
  :cas_base_url => "https://pass.hust.edu.cn/cas/"
)
```

## app/controllers/application.rb

```Ruby
before_filter CASClient::Frameworks::Rails::Filter
```

用户通过身份验证后, CAS服务端返回的用户数据将在 **session[:cas_extra_attributes] session [：cas_user]** 中.



# 参考资料

> [Github | rubycas-client](https://github.com/rubycas/rubycas-client)
> []()
> []()
> []()
> []()
> []()
> []()
> []()