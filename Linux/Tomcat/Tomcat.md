# 安装

> 依赖项: JDK

## 下载压缩包
[Tomcat | 官网](http://tomcat.apache.org/)

## 配置家路径

用户的.bashrc中:
```bash
export TOMCAT_HOME=安装路径
alias start_tomcat='${TOMCAT_HOME}/bin/startup.sh'
alias close_tomcat='${TOMCAT_HOME}/bin/shutdown.sh'
```

# 部署项目

0. conf/Catalina/localhost下新建`项目名.xml`文件
0. 文件中加入下述内容
```
<Context docBase="项目根目录的绝对路径/" reloadable="项目有改动时，是否重新加载该项目(true/false)" />
```
2. ...:端口/(新建xml名称)/文件名进行访问 
