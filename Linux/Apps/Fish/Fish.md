<!-- TOC -->

- [1. 安装](#1-安装)
  - [1.1. 修改默认shell](#11-修改默认shell)
- [2. 使用](#2-使用)
  - [2.1. 自动建议](#21-自动建议)
- [3. 函数](#3-函数)

<!-- /TOC -->
# 1. 安装

```
sudo apt-get install fish
```

## 1.1. 修改默认shell

```
chsh -s /usr/bin/fish
```

# 2. 使用

## 2.1. 自动建议

> Fish 会自动在光标后面给出建议,表示可能的选项,颜色为灰色.

如果采纳建议,可以按下 `→`

**如果只采纳一部分,可以按下 `Alt + →`**

# 3. 函数

> Fish implements aliases using functions. Use 'functions' builtin to see list of functions and 'functions function_name' to see function definition.<br>
Fish使用函数实现别名.使用“函数”建立函数列表和函数“函数名”来查看函数定义.

正如上述,Fish中不支持alias命令建立别名,需要使用函数替代相关操作.

Fish的配置文件是~/.config/fish/config.fish,每次Fish启动,就会自动加载这个文件.<br>
可以在这个文件里面写入各种自定义函数,它们会被自动加载.



```fish
function ll
    ls -lhG $argv
end
```

变量 `$argv` 表示函数的参数.

<hr>

[阮一峰|Fish shell入门教程](http://www.ruanyifeng.com/blog/2017/05/fish_shell.html)