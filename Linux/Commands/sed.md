> 日志示例

```
[2018-11-19T15:00:58.018259 #29755]  INFO -- : Started GET "/assets/xxx/logo.png" for xxx.xxx.xx.xx at 2018-11-19 15:00:58 +0800
```

> 根据时间范围查找

查找某一时间范围内的日志并输出到指定文件

```
sed -n '/2018-11-19T15:00/,/2018-11-19T15:03/p' production.log >> sed_log.log
```