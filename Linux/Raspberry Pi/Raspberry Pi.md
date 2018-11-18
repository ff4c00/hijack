> 树苺派相关知识记录

<!-- TOC -->

- [常用快捷键](#常用快捷键)
- [基本配置](#基本配置)
  - [设置无线网络](#设置无线网络)
- [系统安装](#系统安装)
  - [下载镜像](#下载镜像)
  - [制作启动盘](#制作启动盘)
    - [解压镜像](#解压镜像)
    - [格式化U盘](#格式化u盘)
    - [烧录](#烧录)

<!-- /TOC -->

# 常用快捷键

> 适用多数Linux系统

快捷键|作用
-|-|
Alt-F4|关闭当前窗口

# 基本配置

## 设置无线网络

> 网卡状态检查

```
iwconfig
```

返回信息中包含 `wlan0` 表明网卡已经正常工作.

> 搜索附件可用wifi

```
iwlist wlan0 scan | grep SSID
```


>

```

```

# 系统安装

## 下载镜像

选择了使用Ubuntu Mate提供的树苺派版本系统.

## 制作启动盘

### 解压镜像
```
sudo apt-get install xz-utils
unxz ubuntu-mate-xx.xx.x-desktop-armhf-raspberry-pi.img.xz
```

### 格式化U盘

使用gnome-disks操作

### 烧录

使用 Startup Disk Creator(启动盘创建器)



<hr>
  
> [树苺派官网](https://www.raspberrypi.org/)
