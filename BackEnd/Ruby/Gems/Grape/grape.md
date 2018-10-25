> Grape是Ruby中的一个类REST API框架,<br>
被设计用于运行在Rack上或弥补已有的web应用框架(比如Rails或者Sinatra),<br>
Grape提供了一个简单的DSL用于方便的开发RESTful APIs.<br>
Grape支持common conventions,包括多种格式,子域/前缀限制,内容协商,版本控制等.

<!-- TOC -->

- [1. 请求参数获取](#1-请求参数获取)
  - [1.1. params](#11-params)

<!-- /TOC -->

# 1. 请求参数获取

## 1.1. params

请求参数可通过params哈希对象获得:

```ruby
get :public_timeline do 
  Status.order(params[ :sort_by])
end
```