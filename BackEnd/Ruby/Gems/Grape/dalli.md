> memcached客户端的ruby客户端

> memcached

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
