> Linux 安装Ruby环境记录

<!-- TOC -->

- [Ruby基本环境搭建](#ruby基本环境搭建)
  - [环境更新](#环境更新)
  - [安装RVM](#安装rvm)
  - [修改更新源](#修改更新源)
  - [查看可用Ruby版本](#查看可用ruby版本)
  - [安装Ruby](#安装ruby)
  - [终端首选项](#终端首选项)
  - [指定Ruby默认版本](#指定ruby默认版本)
  - [检查Ruby和Gem版本](#检查ruby和gem版本)
  - [设置Gem更新源](#设置gem更新源)
  - [安装Bundler](#安装bundler)

<!-- /TOC -->

# Ruby基本环境搭建

## 环境更新

```
sudo apt update
sudo apt install curl g++, gcc, autoconf, automake, bison, libc6-dev, libffi-dev, libgdbm-dev, libncurses5-dev, libsqlite3-dev, libtool, libyaml-dev, make, pkg-config, sqlite3, zlib1g-dev, libgmp-dev, libreadline-dev, libssl-dev
```

如果安装时提示无法定位安装包,批处理拆开,逐个安装.

## 安装RVM

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
```

检查rvm版本

```
rvm -v
```

## 修改更新源

```
echo "ruby_url=https://cache.ruby-china.org/pub/ruby" > ~/.rvm/user/db
```

## 查看可用Ruby版本

```
rvm list known
```

## 安装Ruby

```
rvm requirements
rvm install 版本号
```

如果遇到类似 `Error running'__rvm_make -j4'`, 尝试安装较低版本.

## 终端首选项

查看终端 编辑 > 首选项 > 命令 *以登录shell方式运行命令* 是否勾选.

有些系统自带终端无法修改设置,可以使用 gnome-terminal.

## 指定Ruby默认版本

```
rvm use 版本号 --default
```

## 检查Ruby和Gem版本

```
ruby -v
gem -v
```

## 设置Gem更新源

```
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
```

## 安装Bundler

```
gem install bundler
```

