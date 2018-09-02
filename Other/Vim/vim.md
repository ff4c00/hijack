<!-- TOC -->

- [1. 常用快捷键](#1-常用快捷键)
  - [1.1. 光标移动](#11-光标移动)
  - [1.2. 编辑](#12-编辑)
    - [1.2.1. 批量替换](#121-批量替换)
  - [1.3. 保存](#13-保存)
  - [1.4. 复制](#14-复制)
  - [1.5. 撤销](#15-撤销)
  - [1.6. 其他](#16-其他)
  - [1.7. 常用组合操作](#17-常用组合操作)

<!-- /TOC -->
# 1. 常用快捷键
## 1.1. 光标移动
* `0` → 数字零,到行头
* `$` → 到本行行尾
* `^` → 到本行第一个不是空格的位置
* `g_` → 到本行最后一个不是blank字符的位置
* `nG` → 移动到第n行
* `gg` → 移动到首行
* `GG` → 移动到末行

## 1.2. 编辑
* `a` → 在光标后插入
* `I` → 在行首插入
* `o` → 在当前行后插入一个新行
* `O` → 在当前行前插入一个新行
* `<C-n>` → 插入模式下代码补全
* `dt"` → 删除内容直到遇见"
* `yt,` → 同理复制内容直到遇见,
* `x` → 删除光标所在的字符(单字符删除)
* `dw` → 删除光标位置到单词结尾
* `vf%` → 光标处选中直到遇见%
### 1.2.1. 批量替换
> addrs/原字符串/目的字符串/option

参数|含义
:-:|:-
addr|表示检索范围,省略时表示当前行<br>“1,20” ：表示从第1行到20行；<br>“%” ：表示整个文件,同“1,$”<br>“. ,$” ：从当前行到文件尾
s|表示替换操作
option|表示操作类型<br>g 表示全局替换 <br>c 表示进行确认<br>p 表示替代结果逐行显示（Ctrl + L恢复屏幕）<br>省略option时仅对每行第一个匹配串进行替换<br>如果在原字符串和目的字符串中出现特殊字符,需要用”\”转义

`%s/'\/user\/home'/'/home/mike'/g ` → 在文件全局将/user/home替换为home/mike

## 1.3. 保存
* `w` → 保存文件
* `w path/fine_name` → 将文件另存为指定路径下的指定文件名
* `wq` → 保存并退出
* `q!` → 不保存当前修改,强制关闭文件
* `ZZ` → 根据文件状态判断是否需要保存并关闭文件

## 1.4. 复制
* `ve` → 选取当前单词
* `"+y` → 复制到系统剪贴板
* `v (光标移动)` → 选中文本
* `yy` → 复制当前行
* `np` → 将复制内容粘贴n次(一次n可以省略)
* `d` → 将选中内容进行剪切
* `dd` → 将当前光标所在行进行剪切

## 1.5. 撤销
* `u` → 撤销上一步操作
* `<C-r>` → 恢复上一步被撤销的操作

## 1.6. 其他
* `zo` → 展开折叠,只展开最外层的折叠.
* `zO` → 对所在范围内所有嵌套的折叠点展开,包括嵌套折叠
* `tabnew 路径` → 在新table打开路径指向的文件
* `s` → 替换光标下字符
* `tabc` → 关闭当前table
* `gt` → 多窗口间切换
* `vsplit` → 纵向分割窗口
* `split` → 横向分割窗口
* `g/^s*$/d` → 删除文本中的空白行
* `tabo` → 关闭除当前tab外其他所有tab
* `shift tab` → 在多个tab中快速切换

## 1.7. 常用组合操作
* `0 <C-v> (光标移动) I(要插入的内容) [ESC]`  → 对多行执行同一操作,常用于多行注释

> [酷壳 | VIM入门](https://coolshell.cn/articles/5426.html)
> [简书 | Markdown的基本语法](https://www.jianshu.com/p/250e36bb5690)