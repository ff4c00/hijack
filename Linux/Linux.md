<!-- TOC -->

- [1. 常用命令](#1-常用命令)
  - [1.1. alias](#11-alias)
  - [1.2. 传递自定义参数](#12-传递自定义参数)
  - [1.3. echo-内容写入文件](#13-echo-内容写入文件)
  - [1.4. 特殊符号](#14-特殊符号)
  - [1.5. sleep-延迟指定时间](#15-sleep-延迟指定时间)
  - [tree](#tree)
- [2. 备份](#2-备份)
  - [2.1. tar 打包命令](#21-tar-打包命令)
  - [2.2. rsync-数据镜像备份](#22-rsync-数据镜像备份)
  - [2.3. pigz](#23-pigz)
- [3. 常用软件](#3-常用软件)
  - [3.1. Unity Tweak Tool](#31-unity-tweak-tool)
    - [3.1.1. 菜单栏消失](#311-菜单栏消失)

<!-- /TOC -->


# 1. 常用命令
## 1.1. alias
alias用于为命令设置别名,生命周期在本次关机前有效,如果需要永久生效可以加入.brachrc文件中<sup>1<sup>

$ alias 别名='命令'

```
alias elasticsearch_start='~/space/software/elasticsearch-5.6.10/bin/elasticsearch -d'
```
-----
1: 个人习惯加入当前用户的.brachrc文件中.

## 1.2. 传递自定义参数

```shell
rails s -p3000
alias ras='rails s -p$1'
```
## 1.3. echo-内容写入文件
echo "内容" 参数 文件

参数|说明
-|-
\>|覆盖原文件内容
\>\>|在文件末尾追加内容

```shell
echo "alias elasticsearch_start='cd ~/;space/software/elasticsearch-5.6.10/bin/elasticsearch -d'" >> .bashrc
```

## 1.4. 特殊符号
符号|说明|示例
-|-|-
&|任务在后台执行
&&|前一条命令执行成功时,才执行后一条命令|bin/elasticsearch -d && curl localhost:9200
;|不管前一句是否执行成功均会执行后一句
\|\||上一条命令执行失败后,才执行下一条命令
()|括号里面的内容作为一个整体执行<br>一条命令独占一个物理行或用;号隔开
\||表示管道,上一条命令的输出,作为下一条命令参数

## 1.5. sleep-延迟指定时间
>sleep 参数n

参数|说明
-|-
n<sup>1<sup>|延迟n秒
nm|延迟n分钟
nh|延迟n小时
nd|延迟n天

1: n可以为小数

## tree 

参数|含义
-|-
a|打印包含隐藏文件在内的所有文件
L n| 打印n层目录


# 2. 备份
## 2.1. tar 打包命令
> 必选参数

***必选参数是独立的命令,压缩解压都要用到其中一个,可以和别的命令连用,但一次只能用其中一个.***
参数|含义
-|-
c|建立一个压缩文件的参数指令(create 的意思)
x|解开一个压缩文件的参数指令
t|查看 tarfile 里面的文件  
r|向压缩归档文件末尾追加文件  
u|更新原压缩包中的文件   

>可选参数

下面的参数是根据需要在压缩或解压档案时可选的。

参数|含义
-|-
z|有gzip属性,即需要用 gzip 压缩  
j|有bz2属性,即需要用 bzip2 压缩  
Z|有compress属性的  
v|压缩的过程中显示文件(显示所有过程)！这个常用,但不建议用在背景执行过程！  
O|将文件解开到标准输出  
f|使用档名,请留意,在f之后要立即接档名!不要再加参数!<br>例如：使用『 tar -zcvfP tfile sfile』就是错误的写法，要写成『 tar -zcvPf tfile sfile』才对喔！
p|使用原文件的原来属性（属性不会依据使用者而变）  
P|可以使用绝对路径来压缩！  
N|比后面接的日期(yyyy/mm/dd)还要新的才会被打包进新建的文件中<br>--exclude FILE：在压缩的过程中,不要将 FILE 打包！    

## 2.2. rsync-数据镜像备份
rsync命令是一个远程数据同步工具,可通过LAN/WAN快速同步多台主机间的文件.
rsync使用“rsync算法”来使本地和远程两个主机之间的文件达到同步,这个算法只传送两个文件的不同部分,而不是每次都整份传送,因此速度相当快.
rsync是一个功能非常强大的工具,其命令也有很多功能特色选项.

> [Linux命令大全-rsync命令](http://man.linuxde.net/rsync)

## 2.3. pigz
pigz是支持并行压缩的gzip,pigz默认用当前逻辑cpu个数来并发压缩,无法检测个数的话,则默认并发8个线程,
也可以使用-p指定线程数。需要注意的是其CPU使用比较高.

# 3. 常用软件
## 3.1. Unity Tweak Tool
Unity Tweak Tool是一个图形化管理工具,我主要用来修改工作区数量.
### 3.1.1. 菜单栏消失
```shell
# 重设compiz设置
dconf reset -f /org/compiz/
# 重启Unity
setsid unity
```
<hr>

> [Ubuntu 16.04中安装 Unity Tweak Tool](https://www.linuxidc.com/Linux/2016-05/130951.htm)

> [ubuntu16.04 中软件的菜单栏消失不见怎么办](https://blog.csdn.net/skant16/article/details/69808490)

