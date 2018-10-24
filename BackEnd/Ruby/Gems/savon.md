# 简介

# 创建连接

```ruby
client = Savon.client(wsdl: '服务端地址?wsdl')
```

## 查看可用方法

```ruby
client.operations
```

## 发送请求

```ruby
response = client.call(:find_user, message: { id: 42 })
```
## 获取服务端返回结果

```ruby
response.body
```