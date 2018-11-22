> 概述

dalli是memcached的ruby版本客户端工具.

> memcached

memcached是一套分布式的高速缓存系统,<br>
memcached缺乏认证以及安全管制,这代表应该将memcached服务器放置在防火墙后.

# 基础使用

## 服务端

安装memcached:

```
apt-get install memcached # Debian
```

## Gemfile

```
gem 'dalli'
```

## config/environments/production.rb

```
  config.cache_store = :dalli_store,'memcached部署服务器的ip和端口',{ :namespace => '命名空间', :expires_in => 1.day, :compress => true }
```
