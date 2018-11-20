> NFS

NFS(Network File System)即网络文件系统,<br>
通过网络让不同主机系统之间可以共享文件或目录.

> NFS客户端

NFS客户端将NFS服务端设置好的共享目录挂载到本地某个挂载点,<br>
对于客户端来说,共享的资源就相当于在本地的目录下.

> RPC

NFS在传输数据时使用的端口是随机选择的,依赖RPC服务来与外部通信,要想正常使用NFS,就必须保证RPC正常.

RPC(Remote Procedure Call Protocol)远程过程调用协议.<br>
它是一种通过网络从远程计算机程序上请求服务,而不需要了解底层网络技术的协议.

在NFS服务端和NFS客户端之间,RPC服务扮演一个`中介角色`,<br>
NFS客户端通过RPC服务得知NFS服务端使用的端口,从而双方可以进行数据通信.

> 服务端,RPC,客户端流程简述

当NFS服务端启动服务时会随机取用若干端口,并主动向RPC服务注册取用相关端口及功能信息.<br>
这样RPC服务就知道NFS每个端口对应的的NFS功能了,<br>
然后RPC服务使用固定的111端口来监听NFS客户端提交的请求,并将正确的NFS端口信息回复给请求的NFS客户端.<br>
如此,NFS客户端就可以与NFS服务端进行数据传输了.

> rpcbind

提供RPC的端口映射的守护进程及其相关文档、执行文件等.

> 注意事项

0. RPC要先于NFS启动,否则NFS会无法向RPC注册.
0. RPC若重新启动时,原本注册的数据会不见,因此RPC重新启动后,<br>
它管理的所有服务都需要重新启动来重新向RPC注册.

<!-- TOC -->

- [搭建](#搭建)
  - [服务端搭建](#服务端搭建)
    - [安装](#安装)
    - [目录结构](#目录结构)
      - [/etc/exports文件](#etcexports文件)
  - [客户端搭建](#客户端搭建)
    - [安装](#安装-1)
    - [挂载共享目录](#挂载共享目录)
- [常用命令](#常用命令)
  - [服务端](#服务端)
    - [查看RPC运行状态](#查看rpc运行状态)
    - [查看NFS的运行状态](#查看nfs的运行状态)
    - [查看客户端状态](#查看客户端状态)
    - [更新共享目录](#更新共享目录)
  - [客户端](#客户端)
    - [查看服务端开放共享目录](#查看服务端开放共享目录)
    - [](#)

<!-- /TOC -->

# 搭建

## 服务端搭建

### 安装

```
sudo apt install nfs-kernel-server
```

### 目录结构

目录|作用
-|-
/etc/exports        |NFS服务的主要配置文件
/usr/sbin/exportfs  |NFS服务的管理命令
/usr/sbin/showmount |客户端的查看命令
/var/lib/nfs/etab   |记录NFS分享出来的目录的完整权限设定值
/var/lib/nfs/xtab   |记录曾经登录过的客户端信息

**NFS服务的配置文件为 /etc/exports,这个文件是NFS的主要配置文件,<br>不过系统并没有默认值,所以这个文件不一定会存在,<br>可能需要手动建立,然后在文件里面写入配置内容.**

#### /etc/exports文件

> 格式

```
<输出目录> [客户端1 选项(访问权限,用户映射,其他)] [客户端2 选项(访问权限,用户映射,其他)]
```

> 示例

```
/logs *(rw,sync,no_subtree_check,no_root_squash)
```

> 说明

参数|说明
-|-
输出目录|输出目录是指NFS系统中需要共享给客户机使用的目录.
客户端|客户端是指网络中可以访问这个NFS输出目录的计算机<br>客户端常用的指定方式：<br>&emsp;指定ip地址的主机：192.168.8.106<br>&emsp;指定子网中的所有主机：192.168.0.0/24或 192.168.0.0/255.255.255.0<br>&emsp;指定域名的主机：wj.bsmart.com<br>&emsp;指定域中的所有主机：\*.bsmart.com<br>&emsp;所有主机：\*
选项|选项用来设置输出目录的访问权限、用户映射等。<br>NFS主要有3类选项：<br>1) 访问权限选项：<br>&emsp;设置输出目录只读：ro<br>&emsp;设置输出目录读写：rw<br>2) 用户映射选项<br>&emsp;all_squash：将远程访问的所有普通用户及所属组都映射为匿名用户或用户组(nfsnobody).<br>&emsp;no_all_squash：与all_squash取反(默认设置).<br>&emsp;root_squash：将root用户及所属组都映射为匿名用户或用户组(默认设置).<br>&emsp;no_root_squash：与rootsquash取反.<br>&emsp;anonuid=xxx：将远程访问的所有用户都映射为匿名用户,并指定该用户为本地用户(UID=xxx).<br>&emsp;anongid=xxx：将远程访问的所有用户组都映射为匿名用户组账户,并指定该匿名用户组账户为本地用户组账户(GID=xxx).<br>3) 其它选项<br>&emsp;secure：限制客户端只能从小于1024的tcp/ip端口连接nfs服务器(默认设置).<br>&emsp;insecure：允许客户端从大于1024的tcp/ip端口连接服务器.<br>&emsp;sync：将数据同步写入内存缓冲区与磁盘中,效率低,但可以保证数据的一致性.<br>&emsp;async：将数据先保存在内存缓冲区中,必要时才写入磁盘.<br>&emsp;wdelay：检查是否有相关的写操作,如果有则将这些写操作一起执行,这样可以提高效率(默认设置).<br>&emsp;no_wdelay：若有写操作则立即执行,应与sync配合使用.<br>&emsp;subtree：若输出目录是一个子目录,则nfs服务器将检查其父目录的权限(默认设置).<br>&emsp;no_subtree：即使输出目录是一个子目录,nfs服务器也不检查其父目录的权限,这样可以提高效率.


## 客户端搭建

### 安装

```
sudo apt install nfs-common
```

### 挂载共享目录

将NFS服务器192.168.3.167上的/data目录,挂载到本地的/mnt/data目录下:

```
sudo mount -t nfs 192.168.3.167:/data /mnt/data
```

# 常用命令

## 服务端

### 查看RPC运行状态

```
sudo rpcinfo
```

### 查看NFS的运行状态

```
sudo nfsstat
```

### 查看客户端状态

```
sudo showmount -e localhost
```

### 更新共享目录

更新配置文件中的目录,无需重启服务.

```
sudo exportfs -rv
```

## 客户端


### 查看服务端开放共享目录

显示指定192.168.3.167上NFS服务端开放的目录:

```
sudo showmount [dehv] 192.168.3.167
```

参数|作用
-|-
-d|显示客户端所挂载的共享目录
-e|显示nfs服务的导出共享目录列表
-h|显示帮助信息
-v|显示版本

### 

```

```

#

> [简书 | 搭建NFS网络文件共享服务](https://www.jianshu.com/p/380afd870d50)

> [简书 | Linux NFS服务器配置与搭建](https://www.jianshu.com/p/ed4ddac6b0ea)

> [CSDN | Ubuntu 16.04系统上NFS的安装与使用](https://blog.csdn.net/CSDN_duomaomao/article/details/77822883)