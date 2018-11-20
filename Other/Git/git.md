<!-- TOC -->

- [1. 常用操作](#1-常用操作)
  - [1.1. 查看信息](#11-查看信息)
  - [1.2. 添加到暂存区](#12-添加到暂存区)
  - [1.3. 代码提交](#13-代码提交)
  - [1.4. 远程同步](#14-远程同步)
  - [1.5. 撤销](#15-撤销)
  - [1.6. 分支](#16-分支)
  - [1.7. 头指针分离](#17-头指针分离)
  - [1.8. 帐号缓存](#18-帐号缓存)
- [2. 本地项目初始化并提交远程仓库](#2-本地项目初始化并提交远程仓库)
  - [2.1. 初始化本地仓库](#21-初始化本地仓库)
  - [2.2. 本地仓库添加远程仓库地址](#22-本地仓库添加远程仓库地址)
  - [2.3. 同步远程仓库代码](#23-同步远程仓库代码)
  - [2.4. 添加文件到本地仓库并提交](#24-添加文件到本地仓库并提交)

<!-- /TOC -->
# 1. 常用操作

## 1.1. 查看信息

操作|含义
-|-
git status|显示有变更的文件
git log|显示当前分支的版本历史
git diff|显示暂存区和工作区的代码差异

## 1.2. 添加到暂存区

```shell
git add options
```
options|含义
-|-
file1 file2 ...|添加指定文件到暂存区
dir1 dir2...|添加指定目录到暂存区,包括子目录
.|添加当前目录及其子目录的所有文件到暂存区

## 1.3. 代码提交

```shell
git commit options
```

options|含义
-|-
-m message<sup>[1]</sup>|提交暂存区内容到仓库区
-a message<sup>[2]</sup>|提交工作区自上次commit之后的变化,直接到仓库区
-v|提交时显示所有diff信息

[1] :message指对本次提交的一个简要概述,如:<br>
git commit -m "订单完成条件修改"

[2] 通常会使用 git -am message 来提交代码.



## 1.4. 远程同步

操作|含义
-|-
git push remote branch|上传本地指定分支到远程仓库
git pull remote branch|取回远程仓库的变化,并与本地分支合并

## 1.5. 撤销

操作|说明
-|-
git checkout .|恢复暂存区的所有文件到工作区

## 1.6. 分支
操作|含义
-|-
git branch|列出所有本地分支
git branch -r|列出所有远程分支
git branch -a|列出所有本地分支和远程分支
git branch branch_name|新建一个分支,但依然停留在当前分支
git checkout -b branch_name|新建一个分支,并切换到该分支
git branch -d branch_name|删除分支

## 1.7. 头指针分离
```
# 强制将 master 分支指向当前头指针的位置
$ git branch -f master HEAD
# 检出 master 分支
$ git checkout master
```

## 1.8. 帐号缓存

在输入帐号密码后:

```
git config --global credential.helper  'cache --timeout 36000000000'
```

3600为缓存秒数.

# 2. 本地项目初始化并提交远程仓库

## 2.1. 初始化本地仓库

```
git init
```

## 2.2. 本地仓库添加远程仓库地址

```
git remote add 别名 远程地址
```

## 2.3. 同步远程仓库代码

```
git pull 别名 分支
```

如在github上初始的远程仓库有初始化.gitignore文件,先拉远程代码,可避免提交忽略文件.



## 2.4. 添加文件到本地仓库并提交

```
git add .
git commit -m "提交说明"
```



<hr>

>[博客园 | 天才卧龙](https://www.cnblogs.com/chenwolong/p/GIT.html)

> [简书 | 危险!分离头指针](https://www.jianshu.com/p/91a0f8feb45d)
