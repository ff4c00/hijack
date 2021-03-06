<!-- TOC -->

- [1. 状态码](#1-状态码)
  - [1.1. 状态码分类](#11-状态码分类)
  - [1.2. 常见状态码](#12-常见状态码)

<!-- /TOC -->
# 1. 状态码
当浏览者访问一个网页时,浏览者的浏览器会向网页所在服务器发出请求.<br>当浏览器接收并显示网页前,此网页所在的服务器会返回一个包含HTTP状态码的信息头(server header)用以响应浏览器的请求.

<hr>

> [菜鸟教程-HTTP状态码](http://www.runoob.com/http/http-status-codes.html)

## 1.1. 状态码分类
分类|描述
-|-
1**|信息,服务器收到请求,需要请求者继续执行操作
2**|成功,操作被成功接收并处理
3**|重定向,需要进一步的操作以完成请求
4**|客户端错误,请求包含语法错误或无法完成请求
5**|服务器错误,服务器在处理请求的过程中发生了错误

## 1.2. 常见状态码

状态码|含义
-|-
404|请求失败,请求所希望得到的资源未被在服务器上发现.<br>没有信息能够告诉用户这个状况到底是暂时的还是永久的.<br>假如服务器知道情况的话,应当使用410状态码来告知旧资源因为某些内部的配置机制问题,已经永久的不可用,而且没有任何可以跳转的地址.<br>404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下.<br>
500|服务器遇到了一个未曾预料的状况,导致了它无法完成对请求的处理.<br>一般来说,这个问题都会在服务器的程序码出错时出现.<br>
<hr>

> [在线工具-状态码对照表](http://tool.oschina.net/commons?type=5)
