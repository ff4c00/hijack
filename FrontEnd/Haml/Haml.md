<!-- TOC -->

- [1. html转haml](#1-html转haml)
- [2. erb转haml](#2-erb转haml)

<!-- /TOC -->
# 1. html转haml
```html
<p>
  <div id='blah'>Blah!</div>
</p>
```

```haml
%p
  %div{id: 'blah'}Blan!
```

```html
<li data-target="#demo" data-slide-to="0" class="active"></li>
```

```haml
%li{data: {target:"#demo", slide: {to: "0"}}, class:"active"}
```

# 2. erb转haml
=号相当于<%= %><br>
-号相当于<% %>
```html
  <%= 10.times do %>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  <% end %>
</ul>
<form class="form-inline">
```
haml中插入ruby代码使用`=`或`-`开头,循环不需要end结尾,它只会操作它的下级元素.
```haml
=10.times do 
  %li{class: 'nav-item'}
    %a{class: 'nav-link', href: '#'}Link
%form{class: 'form-inline'}
```