<!-- TOC -->

- [1. 常用标签](#1-常用标签)
  - [1.1. table](#11-table)
  - [1.2. font-字体](#12-font-字体)
  - [1.3. iframe](#13-iframe)
  - [1.4. hr-水平分割线](#14-hr-水平分割线)
  - [1.5. ins-插入字](#15-ins-插入字)
  - [1.6. del-删除字](#16-del-删除字)
  - [1.7. en-强调](#17-en-强调)
  - [1.8. sup-上标](#18-sup-上标)
  - [1.9. sub-下标](#19-sub-下标)
  - [1.10. 键盘文本 <kbd>Ctrl</kbd>](#110-键盘文本-kbdctrlkbd)
  - [1.11. video-视频流播放](#111-video-视频流播放)

<!-- /TOC -->
&nbsp;|&nbsp;
-|-
常用网站|[W3C](http://www.w3school.com.cn)&emsp;

# 1. 常用标签
## 1.1. table

标签|属性
-|-
td|colspan 跨列<br>rowspan 跨行


## 1.2. font-字体
设置字体的大小及颜色
```html
<font size="3" color="red">红色</font>
```
<font size="3" color="red">红色</font>

## 1.3. iframe
在当前页面的特定区域展示其他网址页面内容.<br>
可以把需要的文本放置在 `<iframe>` 和 `</iframe>` 之间,这样就可以应对不支持该的浏览器.如:<br>

```html
<iframe src="http://www.runoob.com">
  <p>您的浏览器不支持  iframe 标签.</p>
</iframe>
```

>[菜鸟教程](http://www.runoob.com/tags/tag-iframe.html)

## 1.4. hr-水平分割线
```html
<hr>
```
## 1.5. ins-插入字
```html
<ins>文字下方会带有横线</ins>
```
<ins>文字下方会带有横线</ins>

## 1.6. del-删除字
```html
<del>原价:998</del>
```
<del>原价:998</del>

## 1.7. en-强调

```html
<en>强调</en>
```
<en>强调</en>

## 1.8. sup-上标

```html
上标<sup>TM</sup>
```
上标<sup>TM</sup>

## 1.9. sub-下标

```html
下标<sub>TM</sub>
```
下标<sub>TM</sub>

## 1.10. 键盘文本 <kbd>Ctrl</kbd>

```html
键盘文本 <kbd>Ctrl</kbd>
```
键盘文本 <kbd>Ctrl</kbd>


## 1.11. video-视频流播放

**IE 8 或更早版本的 IE 浏览器不支持video标签**<br>
video标签是 HTML5 的新标签
```html
<video>
    <source src="" type="MIME-type">
    <!--可以在 <video> 和 </video> 标签之间放置文本内容,这样不支持 <video> 元素的浏览器就可以显示出该标签的信息 -->
    您的浏览器不支持 video 标签.
</video>
```
音频格式|说明|MIME-type
-|-|-
MP4|MPEG 4文件使用 H264 视频编解码器和AAC音频编解码器|video/mp4
WebM|WebM 文件使用 VP8 视频编解码器和 Vorbis 音频编解码器|video/webm
Ogg|Ogg 文件使用 Theora 视频编解码器和 Vorbis音频编解码器|video/ogg

<hr>

>[菜鸟教程 | video 标签](http://www.runoob.com/tags/tag-video.html)