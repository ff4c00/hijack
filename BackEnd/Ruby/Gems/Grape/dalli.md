> 概述

dalli是Memcached的ruby版本客户端工具.

> Memcached

Memcached是一套分布式的高速缓存系统,<br>
Memcached是一种基于内存的key-value存储,用来存储小块的任意数据(字符串、对象).<br>
这些数据可以是数据库调用、API调用或者是页面渲染的结果.

Memcached缺乏认证以及安全管制,这代表应该将Memcached服务器放置在防火墙后.

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
