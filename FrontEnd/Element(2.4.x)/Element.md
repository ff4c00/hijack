# 常见问题

## 文件类型处理异常

ERROR in ./node_modules/_element-ui@2.4.8@element-ui/lib/theme-chalk/fonts/element-icons.***ttf*** 1:0<br>
Module parse failed: Unexpected character '' (1:0)<br>
You may ***need an appropriate loader to handle this file type***.<br>
(Source code omitted for this binary file)

在webpack.config.js里配置:

```js
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader'
}
```
<hr>

[简书 | vue配置element-ui问题](https://www.jianshu.com/p/9348761444e1)