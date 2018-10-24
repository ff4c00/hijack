
<!-- TOC -->

- [1. 二维码](#1-二维码)
  - [1.1. 简介](#11-简介)
  - [1.2. 生成二维码](#12-生成二维码)
  - [1.3. 二维码展示](#13-二维码展示)
- [条形码](#条形码)
  - [简介](#简介)
  - [生成二维码](#生成二维码)
  - [展示](#展示)

<!-- /TOC -->

# 1. 二维码

## 1.1. 简介

rqrcode可用于二维码生成.

## 1.2. 生成二维码

```ruby
@qr = RQRCode::QRCode.new("二维码内容")
```

## 1.3. 二维码展示

```html
<style>
  table {
    border-width: 0;
    border-style: none;
    border-color: #0000ff;
    border-collapse: collapse;
  }

  td {
    border-left: solid 10px #000;
    padding: 0; 
    margin: 0; 
    width: 0px; 
    height: 10px; 
  }

  td.black { border-color: #000; }
  td.white { border-color: #fff; }

  .qr_code table {width: 10px;}
  .qr_code table tr {height: auto;}
  .qr_code table td{height: 0;}
  .qr_code table td.black{border: 2px solid black;}
  .qr_code table td.white{border: 2px solid white;}
</style>
<%= raw @qr.as_html %>
```

# 条形码

## 简介

barby用于生成条形码,该Gem支持多种常见如HTML,SVG,PDF,PNG等格式条形码,<br>
只需加载不同输出器(Outputters)即可.<br>
这里选用了`SVG`格式输出,其他格式如HTML有遇到页面打印保存为PDF后条形码失真等情况.<br>


## 生成二维码



```ruby
require 'barby/barcode/code_128'
require 'barby/outputter/svg_outputter'

barcode = Barby::Code128B.new('需要展示的内容')
@outputter = Barby::SvgOutputter.new(barcode).to_svg
```

## 展示

```html
<%= @outputter.html_safe %>
```

<br>

> [GitHub | Barby | Outputters](https://github.com/toretore/barby/wiki/Outputters)


