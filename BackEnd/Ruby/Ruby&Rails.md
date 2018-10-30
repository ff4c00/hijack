<!-- TOC -->

- [1. Ruby基础](#1-ruby基础)
  - [1.1. 注释](#11-注释)
  - [1.2. 魔法注释(magic comment)](#12-魔法注释magic-comment)
  - [1.3. 输出](#13-输出)
    - [1.3.1. puts和p与print方法的区别](#131-puts和p与print方法的区别)
  - [1.4. 变量](#14-变量)
  - [1.5. 常量](#15-常量)
  - [1.6. 真与假](#16-真与假)
  - [1.7. 逻辑运算符](#17-逻辑运算符)
  - [1.8. 流程控制语句](#18-流程控制语句)
    - [1.8.1. 关于case语句](#181-关于case语句)
      - [1.8.1.1. 示例1](#1811-示例1)
      - [1.8.1.2. 示例2](#1812-示例2)
      - [1.8.1.3. 示例3](#1813-示例3)
      - [1.8.1.4. 示例4](#1814-示例4)
      - [1.8.1.5. 示例5](#1815-示例5)
      - [1.8.1.6. ===与case语句](#1816-与case语句)
  - [1.9. 多重赋值](#19-多重赋值)
    - [1.9.1. 合并执行多个赋值操作](#191-合并执行多个赋值操作)
    - [1.9.2. 交换变量的值](#192-交换变量的值)
    - [1.9.3. 获取数组元素](#193-获取数组元素)
  - [1.10. 命名规则](#110-命名规则)
  - [1.11. 时间](#111-时间)
    - [1.11.1. 常用函数](#1111-常用函数)
    - [1.11.2. 时间格式化](#1112-时间格式化)
      - [1.11.2.1. 指定日期格式](#11121-指定日期格式)
      - [1.11.2.2. to_s(:number)](#11122-to_snumber)
  - [1.12. 数据结构](#112-数据结构)
    - [1.12.1. 数组](#1121-数组)
      - [1.12.1.1. 常用方法](#11211-常用方法)
      - [1.12.1.2. 示例1](#11212-示例1)
    - [1.12.2. 散列](#1122-散列)
      - [1.12.2.1. 常用方法](#11221-常用方法)
      - [1.12.2.2. 散列键](#11222-散列键)
      - [1.12.2.3. 符号(symblo)](#11223-符号symblo)
      - [1.12.2.4. 示例1](#11224-示例1)
      - [1.12.2.5. 根据散列键进行排序](#11225-根据散列键进行排序)
        - [1.12.2.5.1. 使用sort对散列键进行排序](#112251-使用sort对散列键进行排序)
        - [1.12.2.5.2. 使用sort_by对散列键进行排序](#112252-使用sort_by对散列键进行排序)
  - [1.13. 代码块](#113-代码块)
  - [1.14. 关于nil](#114-关于nil)
  - [1.15. 循环](#115-循环)
    - [1.15.1. 常用循环方法](#1151-常用循环方法)
    - [1.15.2. times方法](#1152-times方法)
    - [1.15.3. for 语句](#1153-for-语句)
    - [1.15.4. while 语句](#1154-while-语句)
    - [1.15.5. until 语句](#1155-until-语句)
    - [1.15.6. each 方法](#1156-each-方法)
    - [1.15.7. loop 方法](#1157-loop-方法)
    - [1.15.8. 循环控制](#1158-循环控制)
  - [1.16. File](#116-file)
    - [1.16.1. 常用方法](#1161-常用方法)
    - [1.16.2. 文件读取流程](#1162-文件读取流程)
  - [1.17. 方法](#117-方法)
    - [1.17.1. 方法的调用](#1171-方法的调用)
    - [1.17.2. 运算符形式的方法调用](#1172-运算符形式的方法调用)
    - [1.17.3. 方法的分类](#1173-方法的分类)
      - [1.17.3.1. 实例方法](#11731-实例方法)
      - [1.17.3.2. 类方法](#11732-类方法)
      - [1.17.3.3. 函数式方法](#11733-函数式方法)
    - [1.17.4. 方法的定义及返回值](#1174-方法的定义及返回值)
    - [1.17.5. 定义带块的方法](#1175-定义带块的方法)
    - [1.17.6. 参数不确定的方法](#1176-参数不确定的方法)
    - [1.17.7. 关键字参数方法](#1177-关键字参数方法)
    - [1.17.8. 将数组分解为参数](#1178-将数组分解为参数)
  - [1.18. 类](#118-类)
    - [1.18.1. 对象](#1181-对象)
    - [1.18.2. 对象与类的对应表](#1182-对象与类的对应表)
    - [1.18.3. 类和实例](#1183-类和实例)
    - [1.18.4. 对象和实例](#1184-对象和实例)
    - [1.18.5. 继承](#1185-继承)
      - [1.18.5.1. 基类继承关系](#11851-基类继承关系)
    - [1.18.6. 创建类](#1186-创建类)
      - [1.18.6.1. class 语句](#11861-class-语句)
    - [1.18.7. initialize 方法](#1187-initialize-方法)
    - [1.18.8. 存取器](#1188-存取器)
    - [1.18.9. 特殊变量 self](#1189-特殊变量-self)
    - [1.18.10. 类方法](#11810-类方法)
    - [1.18.11. 类变量](#11811-类变量)
    - [1.18.12. 限制方法的调用](#11812-限制方法的调用)
    - [1.18.13. 扩展类](#11813-扩展类)
      - [1.18.13.1. 在原有类的基础上添加方法](#118131-在原有类的基础上添加方法)
      - [1.18.13.2. 继承](#118132-继承)
    - [1.18.14. alias](#11814-alias)
    - [1.18.15. undef](#11815-undef)
    - [1.18.16. 单例类](#11816-单例类)
  - [1.19. 模块](#119-模块)
    - [1.19.1. 利用Mix-in扩展功能](#1191-利用mix-in扩展功能)
  - [1.20. 页面markdown内容展示](#120-页面markdown内容展示)
  - [1.21. 连接多个数据库](#121-连接多个数据库)
  - [1.22. 自动化测试](#122-自动化测试)
    - [1.22.1. 测试驱动](#1221-测试驱动)
    - [1.22.2. 编写规范](#1222-编写规范)
    - [1.22.3. setup方法](#1223-setup方法)
    - [1.22.4. 断言](#1224-断言)
  - [1.23. include和require](#123-include和require)
    - [1.23.1. Engine-引擎](#1231-engine-引擎)
    - [1.23.2. 参考文章](#1232-参考文章)
- [2. Rails](#2-rails)
  - [2.1. Rails.application.routes.url_helpers](#21-railsapplicationroutesurl_helpers)
  - [2.2. 常用GEM](#22-常用gem)
    - [2.2.1. 如何学习/了解插件](#221-如何学习了解插件)
    - [2.2.2. 模糊查询](#222-模糊查询)
    - [软删除](#软删除)
      - [paranoia](#paranoia)
    - [2.2.3. 权限控制](#223-权限控制)
      - [2.2.3.1. cancancan](#2231-cancancan)
      - [2.2.3.2. pundit](#2232-pundit)
      - [2.2.3.3. Policy](#2233-policy)
    - [2.2.4. 分页](#224-分页)
      - [2.2.4.1. Kaminari](#2241-kaminari)
        - [2.2.4.1.1. 什么是kaminari](#22411-什么是kaminari)
        - [2.2.4.1.2. 如何使用kaminari](#22412-如何使用kaminari)
      - [2.2.4.2. will_paginate](#2242-will_paginate)
    - [2.2.5. 表单请求](#225-表单请求)
      - [2.2.5.1. simple_form](#2251-simple_form)
    - [2.2.6. 表格展示](#226-表格展示)
      - [2.2.6.1. jqgird](#2261-jqgird)
    - [2.2.7. excelc处理](#227-excelc处理)
      - [2.2.7.1. spreadsheet](#2271-spreadsheet)
    - [2.2.8. 图片上传](#228-图片上传)
      - [2.2.8.1. carrierwave](#2281-carrierwave)
      - [2.2.8.2. paperclip](#2282-paperclip)
    - [2.2.9. 定时任务](#229-定时任务)
      - [2.2.9.1. whenever](#2291-whenever)
        - [2.2.9.1.1. 查看定时任务列表](#22911-查看定时任务列表)
        - [2.2.9.1.2. 更新定时任务列表](#22912-更新定时任务列表)
      - [2.2.9.2. resque](#2292-resque)
      - [2.2.9.3. clock](#2293-clock)
    - [2.2.10. 异步任务](#2210-异步任务)
      - [2.2.10.1. sidekiq+sidetip](#22101-sidekiqsidetip)
    - [2.2.11. 接口对接处理](#2211-接口对接处理)
      - [2.2.11.1. rest-client](#22111-rest-client)
      - [2.2.11.2. httparty](#22112-httparty)
    - [2.2.12. 富文本编辑器](#2212-富文本编辑器)
      - [2.2.12.1. kindeditor](#22121-kindeditor)
      - [2.2.12.2. ckeditor](#22122-ckeditor)
      - [2.2.12.3. ueditor](#22123-ueditor)
    - [2.2.13. 异常记录](#2213-异常记录)
      - [2.2.13.1. exception_notification](#22131-exception_notification)
    - [2.2.14. bug调试](#2214-bug调试)
      - [2.2.14.1. pry-rails](#22141-pry-rails)
      - [2.2.14.2. pry-byebug](#22142-pry-byebug)
    - [2.2.15. 接口制作](#2215-接口制作)
      - [2.2.15.1. grape](#22151-grape)
    - [2.2.16. 用户管理](#2216-用户管理)
      - [2.2.16.1. devise(用户管理/注册/三方平台账号登陆/跟踪用户的登入次数,时间戳和 IP/)](#22161-devise用户管理注册三方平台账号登陆跟踪用户的登入次数时间戳和-ip)
    - [2.2.17. 测试](#2217-测试)
      - [2.2.17.1. shoulda-matchers](#22171-shoulda-matchers)
        - [2.2.17.1.1. rspec-rails](#221711-rspec-rails)
      - [2.2.17.2. guard-rspec/factory_gril](#22172-guard-rspecfactory_gril)
      - [2.2.17.3. minitest](#22173-minitest)
    - [2.2.18. 验证码](#2218-验证码)
      - [2.2.18.1. simple_captcha2](#22181-simple_captcha2)
    - [2.2.19. xml解析](#2219-xml解析)
      - [2.2.19.1. nokorigi](#22191-nokorigi)
      - [2.2.19.2. settingslogic](#22192-settingslogic)
    - [2.2.20. 状态机](#2220-状态机)
      - [2.2.20.1. aasm](#22201-aasm)
      - [2.2.20.2. workflow](#22202-workflow)
    - [2.2.21. 二维码&条形码](#2221-二维码条形码)
      - [2.2.21.1. rqrcode&barby](#22211-rqrcodebarby)
    - [2.2.22. 打包](#2222-打包)
      - [2.2.22.1. rubyzip](#22221-rubyzip)
    - [2.2.23. 树形结构数据库](#2223-树形结构数据库)
      - [2.2.23.1. ancestry](#22231-ancestry)
    - [2.2.24. 静态配置](#2224-静态配置)
      - [2.2.24.1. rails-settings-cached](#22241-rails-settings-cached)
    - [2.2.25. pdf](#2225-pdf)
      - [2.2.25.1. wicked_pdf/wkhtmltopdf-binary](#22251-wicked_pdfwkhtmltopdf-binary)
      - [2.2.25.2. pdfjs_viewer-rails](#22252-pdfjs_viewer-rails)
      - [2.2.25.3. prawn/prawn-table](#22253-prawnprawn-table)
    - [2.2.26. 审核记录](#2226-审核记录)
      - [2.2.26.1. audited](#22261-audited)
    - [2.2.27. 内存数据库](#2227-内存数据库)
      - [2.2.27.1. redis/redis-namespace](#22271-redisredis-namespace)
    - [2.2.28. 快照](#2228-快照)
      - [2.2.28.1. wkhtmltoimage-binary](#22281-wkhtmltoimage-binary)
    - [2.2.29. 中文转拼音](#2229-中文转拼音)
      - [2.2.29.1. ruby-pinyin](#22291-ruby-pinyin)
    - [2.2.30. 视频处理](#2230-视频处理)
      - [2.2.30.1. streamio-ffmpeg](#22301-streamio-ffmpeg)
    - [2.2.31. word转pdf](#2231-word转pdf)
      - [2.2.31.1. libreconv](#22311-libreconv)
    - [2.2.32. webservice](#2232-webservice)
      - [2.2.32.1. 服务端](#22321-服务端)
        - [2.2.32.1.1. wash_out](#223211-wash_out)
      - [2.2.32.2. 客户端](#22322-客户端)
        - [2.2.32.2.1. savon](#223221-savon)
    - [2.2.33. 批量导入数据库](#2233-批量导入数据库)
      - [2.2.33.1. activerecord-import](#22331-activerecord-import)
    - [2.2.34. 服务](#2234-服务)
      - [2.2.34.1. thin](#22341-thin)
      - [2.2.34.2. puma](#22342-puma)
      - [2.2.34.3. passenger](#22343-passenger)
    - [2.2.35. 数据库备份](#2235-数据库备份)
      - [2.2.35.1. backup](#22351-backup)
    - [2.2.36. 大写金额](#2236-大写金额)
      - [2.2.36.1. number_to_capital_zh](#22361-number_to_capital_zh)
- [link_to](#link_to)
  - [data](#data)
    - [disable_with](#disable_with)
- [还有这种骚操作?](#还有这种骚操作)
  - [where.not](#wherenot)

<!-- /TOC -->
# 1. Ruby基础
## 1.1. 注释
以 **#** 开始的部分,到行末为止都是注释部分.

## 1.2. 魔法注释(magic comment)
在程序的首行代码添加注释 **#encoding:编码方式** 来指定字符编码,又称之为魔法注释.<br>在没有指定魔法注释的前提下 **默认使用UTF-8编码方式**.

## 1.3. 输出
### 1.3.1. puts和p与print方法的区别
名称|特性
-|-
puts|输出结果的末尾一定会输出换行符
p|数值结果和字符串结果会以不同形式输出<sup>[1]<sup>

[1]: 
<br>
p 100   #=> 100<br>
p '100' #=> "100"

## 1.4. 变量
名称|说明|作用域
-|-|-
局部变量<sup>1<sup>|以英文小写字母或_开头|局部变量的作用域从 class、module、def 或 do 到相对应的结尾或者从左大括号到右大括号 {}<br>当调用一个未初始化的局部变量时,它被解释为调用一个不带参数的方法
全局变量|以$开头
实例变量|以@开头|只要在同一个实例中,程序就可以超越方法定义,任意引用和修改实例变量的值.<br>引用未经初始化的实例变量时的返回值为nil.<br>只要实例存在,实例变量就不会消失.
类变量|以@@开头|类变量在定义它的类或模块的子类或子模块中可共享使用,也就是说类变量是该类所有实例的共享变量.<br>这一点与常量类似,但不同的是可以修改类变量的值.<br> ***类变量被共享在整个继承链中***<br>
伪变量|Ruby预先定义好的代表某特定值的特殊变量<br>即使给伪变量赋值,它的值也不会改变<br>如:nil,false,true,self等

>作用域

局部变量,实例变量,self都是绑定在对象上的名字,我们简称为绑定(binding).<br>
所有绑定都有一个寄居场所,我们称为作用域(scope).

1:又称本地变量

>[Ruby-China | Ruby的作用域和作用域门](https://ruby-china.org/topics/26824)

## 1.5. 常量
名称|特性|作用域
-|-|-
变量|以英文小写字母或_开头<br>随时随地可以多次重复赋值
常量|**大写**英文字母`开头`<br>对已经赋值的常量再进行赋值时,Ruby会发出警告<sup>[1]<sup>|定义在类或模块内的常量可以从类或模块的内部访问,定义在类或模块外的常量可以被全局访问

[1]: 仅仅是发出警告,常量的值 **仍会** 改变

## 1.6. 真与假
&nbsp;|&nbsp;
-|-
真|false,nil以外的所有对象均为真
假|false和nil

## 1.7. 逻辑运算符
运算符|说明
-|-
条件1 && 条件2|当条件1为真 ***并且*** 条件2也为真时,表达式整体返回真<br> **其中一个为假则整体的表达式返回假**
条件1 \|\| 条件2|条件1为真 ***或者*** 条件2为真,整体表达式返回真<br>同时为假则整体表达式返回假
!条件|对条件返回结果进行取反操作
!!条件|
\=\=\=|
=~|
<=>|

## 1.8. 流程控制语句
```ruby
if 条件
  处理
elsif 条件
  处理
else
  处理
end

unless 条件
  处理
else
  处理
end

case 比较对象
when 值1
  处理
when 值2, 值3
  # when可以一次指定多个值,当比较对象满足任何一个值时则进入其处理流程
  处理
else
  处理
end

```
<hr>

### 1.8.1. 关于case语句

#### 1.8.1.1. 示例1

经常会遇到这样一种情况:方法中一个参数需要传一个数组过来<br>
但有时也会传一个字符串过来,这时就要判断下是否需要转换为数组
```ruby
...
foo = foo.split(',') if foo.is_a?(String)
```
如果使用case语句方法的可扩展性要高很多
```ruby
...
res = case foo
when String
  [true, foo.split(',')]
when Array
  [true, foo]
else
  [false, '参数类型要求为数组,请重新传参']
end
return res unless res[0]
foo = res[1]

```

#### 1.8.1.2. 示例2

使用case语句匹配邮件关键信息

```ruby
...
file.each_line do |line|
  case line
  when /^From:/i
    # 针对寄信人相关操作
  when /^To:/i
    # 针对收信人相关操作
  when /^Subject:/i
    # 针对主题信息相关操作
  when /^$/i
    # 针对头部解析完毕后相关操作
  else
    next
  end
end
```

#### 1.8.1.3. 示例3

```ruby
a = 1
b = true

b = case
when a == 1 then false
end

b #=> fasle
```
#### 1.8.1.4. 示例4
```ruby
def chek_state(state)
  state if ['temporary','wait_audited','wait_publish_notice'].include?(state)
end

state = 'temporary'
case state
when chek_state(state)
  p 'ok'
end
```

#### 1.8.1.5. 示例5
下面代码是一个竞价系统管理员审核流程的主要代码,<br>
主要包含了controller和model里面的内容.<br>
主要业务逻辑就是采购人发起竞价,管理员需要:<br>
&emsp;审核采购需求是否通过,审核终止申请是否通过,审核选标结果是否通过,<br>
&emsp;审核废标申请是否通过,审核结果变更是否通过<br>
这里面有几个出现频率比较高的词:<ins>审核</ins>, <ins>是否通过</ins><br>
是否通过也就是通过和不通过,true和false.<br>
通过对需求的抽象分析,因为审核不通过需要填写理由,<br>
所以用了一个页面,两个action来完成管理员的整个审核流程.<br>
而且随着流程状态的增加,审核过程的变更都可以轻松的来调整整个审核后项目状态的变更.<br>
灵活性很高,我觉得这种代码是活的而不是死的.<br>
也是通过这个业务逻辑的实现,我才有点明白了接到一个需求以后,<br>
应该先去抽象分析如何去实现具体功能,先去把实现过程需要用到的方法统筹规划好,<br>
这其中也应包含如果以后业务逻辑改了,如何在改动最小的前提下去调整实现的代码.<br>
也就是如何使得代码更具灵活性.<br>
如何编写优雅的代码.

```ruby
# controller
# 项目状态审核(主要针对审核通过情况)
def audit_state
  res = @quote.audit_project_state(pass: true)
  flash_msg(res[0]? :success : :error, res[0]? "保存成功." : res[1])
  redirect_to audit_demand_background_quote_path(@quote)
end

# 项目状态异步审核(主要针对审核不通过情况)
def ajax_audit_state
  res = @quote.audit_project_state(pass: false, reason: params[:reason])
  render json: {'success' => res[0], 'message' => res[1] }
end

# model
def change_state(pass:)
  state = pass ? 1 : 0
  res = case workflow_state
  when 'wait_audited'
    ['audit_rejected', 'wait_publish_notice'][state]
  when 'audit_approved'
    ['stop_wait_audited'][state]
  when 'stop_wait_audited'
    ['audit_approved', 'stoped'][state]
  when 'change_wait_audited'
    ['result_approved', 'change_wait_select'][state]
  when 'change_result_wait_audited'
    ['change_wait_select','change_result'][state]
  when 'invalid_audited'
    ['wait_purchaser', 'invalid_approved'][state]
  end
  res
end

def audit_project_state(pass:, reason: nil, state: nil)
  state = change_state(pass: pass) if state.nil?
  unless pass
    return [false, '审核理由不能为空'] if reason.nil?
    data = {}
    data['state'] = self.workflow_state
    data['reason'] = reason
    data['audit_time'] = Time.now
    self.update(:reason => self.reason << data)
  end

  self.update(workflow_state: state)
  [true, '保存成功']
end

```

#### 1.8.1.6. ===与case语句
case语句在判断与when指定的值是否相等时,实际上使用的是 \=\=\= 运算符来判断的<br>
\=\=\= 还可以与=~一样判断正则表达式是否匹配<br>
\=\=\= 能表达更广义的 *相等*

## 1.9. 多重赋值
### 1.9.1. 合并执行多个赋值操作

```ruby
a = 1
b = 2
c = 3
```
可以简化为:

```ruby
a, b, c = 1, 2, 3
```

变量前加上 `*` 会将未分配的值封装为数组赋值给该变量

```ruby
 a, b, *c = 1, 2, 3, 4, 5, 6, 7
 p [a, b, c] #=> [1, 2, [3, 4, 5, 6, 7]]

a, *b, c = 1, 2, 3, 4, 5, 6, 7
p [a, b, c] #=> [1, [2, 3, 4, 5, 6], 7]

```
### 1.9.2. 交换变量的值

```ruby
a, b = 0, 1
tmp = a
a = b
b = tmp

a, b = 0, 1
a, b = b, a
```
### 1.9.3. 获取数组元素
用数组赋值时,如果左边有多个变量,ruby会自动获取数组的元素进行多重赋值<sup>1<sup>

```ruby
array = [1, 2, 3]
a, b = array
p [a, b] #=> [1, 2]

array = [1, 2, 3]
a, *b = array
p [a, b] #=> [1, [2, 3]]

```

-----
1: 曾经写过一段代码是用于批量同步指定电商产品价格的方法,<br>
主要逻辑是前台input按照输入emall_code,sku...sku的方法传递参数,<br>
而在后台要先将字符串转为数组,然后数组中下标为0的赋为emall_code,下标为1..-1的赋为sku<br>
看到批量赋值中的这个特性后,那段代码完全可以写的更优美些:

```ruby
emall_code, *sku = array
```

## 1.10. 命名规则
种类|方式
-|-
变量名<br>方法名| 蛇形命名(全部小写) -> just_like_this
常量名| 蛇形命名(全部大写) -> JUST_LIKE_THIS
类名<br>模块名|驼峰命名 -> LittleByLittle

## 1.11. 时间

### 1.11.1. 常用函数
方法|说明|返回结果示例
-|-|-
Time.now|获取当前时间|2018-07-11 11:18:58 +0800
Time.now.beginning_of_day|获取当天起始时间|2018-07-11 00:00:00 +0800
Time.now.end_of_day|获取当天结束时间|2018-07-11 23:59:59 +0800
Time.now.end_of_week|获取本周结束时间|2018-07-15 23:59:59 +0800
Time.now.end_of_month|获取本月结束时间|2018-07-31 23:59:59 +0800
Time.now.end_of_year|获取当年结束时间|2018-12-31 23:59:59 +0800

### 1.11.2. 时间格式化

#### 1.11.2.1. 指定日期格式

Time.now.strftime("%Y-%m-%d %H:%M:%S")

#### 1.11.2.2. to_s(:number)

获取指定日期的数字部分

```ruby
Time.now.to_s
#=> "2018-10-09 16:02:29"
Time.now.to_s(:number)
#=> "20181009160237"
```

## 1.12. 数据结构
### 1.12.1. 数组
#### 1.12.1.1. 常用方法
方法|描述
-|-
array.empty?|如果数组本身没有包含元素,则返回 true
array.length|返回 self 中元素的个数可能为零
array.size|返回 array 的长度（元素的个数）length 的别名
array.eql?(other)|如果 array 和 other 是相同的对象,或者两个数组带有相同的内容,则返回 true
array & other_array|返回一个新的数组,包含两个数组中共同的元素,没有重复
array \| other_array|通过把 other_array 加入 array 中,移除重复项,返回一个新的数组
array << obj|把给定的对象附加到数组的末尾该表达式返回数组本身,所以几个附加可以连在一起
array.concat(other_array)|追加other_array中的元素到self中
array.at(index)|返回索引为 index 的元素<br>索引值为负数将从self的末尾开始计数<br>如果索引超出范围则返回 nil
array.clear|从数组中移除所有的元素
array.compact|返回 self 的副本,移除了所有的 nil 元素
array.delete_at(index)|删除指定的 index 处的元素,并返回该元素<br>如果 index 超出范围,则返回 nil
array.delete_if { \|item\| block }|当 block 为 true 时,删除 self 的每个元素
array.flatten|返回一个新的数组,新数组是一个一维的扁平化的数组（递归）
array.include?(obj)|如果 self 中包含 obj,则返回 true,否则返回 false
array.insert(index, obj...)|在给定的 index 的元素 ***前*** 插入给定的值,index 可以是负值
array.reverse|返回一个新的数组,包含倒序排列的数组元素
array.uniq|返回一个新的数组,移除了 array 中的重复值

<hr>

>insert 方法
cat_file里面有用到这个,在前一个元素插值会出现为nil的元素,需要最后调用compact方法

#### 1.12.1.2. 示例1
OnlineConfigure是一个读取yml配置文件的模型.

```yml
defaults: &defaults

  # 竞价项目配置项
  project:

    # 项目状态
    state:
      # 可报价状态
      can_offer: ['audit_approved', 'delay_end', 'stop_wait_audited']
...

development:
  <<: *defaults

test:
  <<: *defaults

production:
  <<: *defaults
```

```ruby
# initlize文件中
PROJECT_CONFIGURE = OnlineBidding::OnlineConfigure.project

# model
# 可报价状态
CAN_OFFER_STATES = PROJECT_CONFIGURE.state.can_offer
# 竞价及供应商是否满足报价条件
def can_bid(user:)
  res = [
    # 当前项目状态是否允许报价
    CAN_OFFER_STATES.include?(self.workflow_state),
    # 当前项目时间是否允许报价
    self.start_time.to_time < Time.now && Time.now < self.end_time.to_time,
    # 当前用户是否可参与竞价
    user.can_bid?
    # 当前用户尚未对项目进行报价
    # !(self.bid_suppliers.pluck(:supplier_id).include?(user.supplier.id))
  ].uniq.include?(false)
  return [false, '当前项目或用户不满足报价条件.']if res
  [true, '']
end

```
在can_bid方法中数组中的每一项都会返回true或false.<br>
最后我对数组去重判断里面是否包含false来决定是否满足报价条件.<br>
重构前是用`if 条件1 && 条件2...`的形式来判断的.我认为这种形式有一下几点不足:<br>

0. 如果条件过多,单行代码过长
0. 针对单个条件去编写对应的注释具有一定的难度,不便于后人理解代码
0. 灵活性差,如果需要去掉某个判断条件只能删掉,不利于后期条件恢复

重构后的代码在弥补上述缺点的同时由于使用了配置文件,还具备了:<br>
全局条件统一,如果供应商可报价的状态发生变动,只需要改下配置文件里面的状态即可也就是更高的灵活性.

关于哪些内容应该放在配置文件里面,我总结了一下几个条件:<br>

0. 明确指定的变量值,如:<br>
延期天数 = 3,类似这种已经明确指定而且不会根据条件不同而变化的变量值,<br>当然这个变量是因应该被声明为常量的.

### 1.12.2. 散列
#### 1.12.2.1. 常用方法
方法|描述
-|-
hash.empty?|检查 hash 是否为空（不包含键值对）,返回true或false
hash.length|以整数形式返回hash的大小或长度
hash.size|以整数形式返回hash的size
hash.store(key, value)|存储为hash中的一个键值对
hash[key]|使用键,从哈希引用值<br>如果未找到键,则返回默认值
hash[key]=value|把value给定的值与key给定的键进行关联
hash.keys|返回一个 ***新*** 的数组,包含hash的所有键
hash.values|返回一个 ***新*** 的数组,包含hash的所有值
hash.clear|从哈希中移除所有的键值对
hash.default = obj|为hash设置默认值
hash.delete_if { \|key,value\| block }|block 为 true 的每个块,从 hash 中删除键值对
hash.has_key?(key)<br>hash.include?(key)<br>hash.key?(key)<br>hash.member?(key)|检查给定的 key 是否存在于哈希中,返回true或false
hash.has_value?(value)<br>hash.value?(value)|检查哈希是否包含给定的 value
hash.index(value)|为给定的 value 返回哈希中的key<br>如果未找到匹配值则返回 nil
hash.invert|创建一个新的 hash,倒置hash中的keys和values<br>也就是说,在新的哈希中,hash 中的键将变成值,值将变成键
hash.merge!(other_hash)<br>hash.merge(other_hash){\|key, oldval, newval\| block}|返回一个新的哈希,包含hash和other_hash的内容<br>重写hash中与 other_hash带有重复键的键值对
hash.replace(other_hash)|把hash的内容替换为other_hash的内容
hash.to_a|从 hash 中创建一个二维数组<br>每个键值对转换为一个数组,所有这些数组都存储在一个数组中
Hash.from_xml(xml)|xml转为哈希
ActiveSupport::JSON.decode(jsonstr)|json转哈希
Hash.to_json(hash)<br>ActiveSupport::JSON.encode(hash)|哈希转json


#### 1.12.2.2. 散列键
0与0.0作为散列的键时会被判断为不同的键,这是由于散列对象内部对于键的比较使用了eql?方法

#### 1.12.2.3. 符号(symblo)
符号与字符串对象很相似,符号也是对象,一般作为名称标签使用,表示方法等对象的名称.<br>
符号实现的功能,大部分字符串也能实现.也可以将符号理解为轻量级的字符串.<br>
在像散列的键这样只是单纯判断是否相等的处理中,**使用符号会比字符串更加有效率**.

>符号在散列键的应用

```ruby
[1] pry(main)> hash = {:foo => 'foo'}
=> {:foo=>"foo"}
[2] pry(main)> hash[:foo]
=> "foo"
```

#### 1.12.2.4. 示例1

```ruby
def index
  default_value = Hash.new(dealt_num: 0, dealt_info: '暂无待办事项')
  default_link = '/bid/background/quotes.html?utf8=✓&q%5Bworkflow_state_eq%5D='
  @dealt_array = [
    {dealt_title: '竞价申请待审核', dealt_link: '', workflow_state: 'wait_audited'},
    {dealt_title: '竞价公告待发布', dealt_link: '', workflow_state: 'wait_publish_notice'},
    {dealt_title: '竞价取消待审核', dealt_link: '', workflow_state: 'stop_wait_audited'},
    {dealt_title: '选标待审核', dealt_link: '', workflow_state: 'result_audited'},
    {dealt_title: '废标待审核', dealt_link: '', workflow_state: 'invalid_audited'},
    {dealt_title: '结果变更待审核', dealt_link: '', workflow_state: 'change_result_wait_audited'}
  ]

  @dealt_array.each do |dealt|
    count = ONLINE_QUOTE.where(workflow_state: dealt[:workflow_state]).count
    dealt[:dealt_link] = default_link + dealt[:workflow_state]
    if count == 0
      dealt.merge!(default_value[:default])
      next 
    end 
    dealt.merge!({dealt_num: count, dealt_info: "您有#{count}个#{dealt[:dealt_title]}，请点击查看"})
  end 

end 
```

#### 1.12.2.5. 根据散列键进行排序
tmp为一个由文件最后修改时间转整型为key,文件名为value的散列
```ruby
tmp ={
  1530695634=>"ChenguangInterface_log_p_20180704.log",
  1530761083=>"ChenguangInterface_log_p_20180705.log",
  1530701542=>"staples_log_p_20180704.log",
  1530762766=>"suning3_log_p_20180705.log",
  1530701543=>"suning3_log_p_20180704.log",
  1530761082=>"ComixInterface_log_p_20180705.log",
  1534490807=>"OfficemateInterface_log_p_20180817.log"
}
```
现在需要根据key对散列进行排序,下面时是sort和sort_by的具体实现方式
##### 1.12.2.5.1. 使用sort对散列键进行排序
```ruby
tmp.sort{|x,y| x[0] <=> y[0]}
#=> 
[[1530695634, "ChenguangInterface_log_p_20180704.log"],
 [1530701542, "staples_log_p_20180704.log"],
 [1530701543, "suning3_log_p_20180704.log"],
 [1530761082, "ComixInterface_log_p_20180705.log"],
 [1530761083, "ChenguangInterface_log_p_20180705.log"],
 [1530762766, "suning3_log_p_20180705.log"],
 [1534490807, "OfficemateInterface_log_p_20180817.log"]]

tmp.sort{|x,y| y[0] <=> x[0]}
#=>
[[1534490807, "OfficemateInterface_log_p_20180817.log"],
 [1530762766, "suning3_log_p_20180705.log"],
 [1530761083, "ChenguangInterface_log_p_20180705.log"],
 [1530761082, "ComixInterface_log_p_20180705.log"],
 [1530701543, "suning3_log_p_20180704.log"],
 [1530701542, "staples_log_p_20180704.log"],
 [1530695634, "ChenguangInterface_log_p_20180704.log"]]
```

##### 1.12.2.5.2. 使用sort_by对散列键进行排序
```ruby
tmp.sort_by{|x,y| x[0] <=> y[0]}
#=>
[[1530695634, "ChenguangInterface_log_p_20180704.log"],
 [1530761083, "ChenguangInterface_log_p_20180705.log"],
 [1530701542, "staples_log_p_20180704.log"],
 [1530762766, "suning3_log_p_20180705.log"],
 [1530701543, "suning3_log_p_20180704.log"],
 [1530761082, "ComixInterface_log_p_20180705.log"],
 [1534490807, "OfficemateInterface_log_p_20180817.log"]]

tmp.sort_by{|x,y| y[0] <=> x[0]}
#=>
[[1530695634, "ChenguangInterface_log_p_20180704.log"],
 [1530761083, "ChenguangInterface_log_p_20180705.log"],
 [1530701542, "staples_log_p_20180704.log"],
 [1530762766, "suning3_log_p_20180705.log"],
 [1530701543, "suning3_log_p_20180704.log"],
 [1530761082, "ComixInterface_log_p_20180705.log"],
 [1534490807, "OfficemateInterface_log_p_20180817.log"]]
```
***待整理: sort和sort_by的异同***
## 1.13. 代码块
do ~ end之间的部分称为 **块**(block)也称为代码块.<br>
跨行写程序时使用 do ~ end<br>
程序写在一行时使用 { ~ }

## 1.14. 关于nil
nil是一个特殊的值,表示对象不存在.<br>
从数组或散列中获取对象以及正则表达式无法成功匹配等方法不能返回有意义的值时就会返回nil.

## 1.15. 循环
### 1.15.1. 常用循环方法

名称|用途
-|-
for 语句|同each
while 语句|希望自由执行循环条件时使用
until 语句|使用while条件过于难以理解时使用
times 方法|确定了循环次数时使用
each 方法|从对象集合中取出元素时使用
loop 方法|不限制循环次数时使用

> 语句和方法的区别
语句是指Ruby提供的循环控制语句.

### 1.15.2. times方法

```ruby
循环次数.times do
  循环中的处理
end
```

### 1.15.3. for 语句

```ruby
for 变量 in 开始时的数值..结束时的数值 do
  循环处理的内容
end
```
### 1.15.4. while 语句
只要条件成立就会不断重复循环处理.
```ruby
while 条件 do
  条件满足时循环处理的内容
end
```
### 1.15.5. until 语句
until语句和while语句结构完全一致,单 *条件判断相反*.<br>
也就是说until语句会一直执行循环处理,直到 *条件成立* 为止.

```ruby
until 条件 do
  条件不满足时循处理的内容
end
```

### 1.15.6. each 方法
each方法将对象集合中的对象逐个取出.<br>
在Ruby内部,for语句使用each方法来实现的.
```ruby
对象.each do |变量|
  循环处理的内容
end
```

### 1.15.7. loop 方法
没有终止的条件,只是不断的执行循环处理.

```ruby
loop do
  循环执行内容
end
```
### 1.15.8. 循环控制
命令|用途
-|-
break|终止程序,跳出循环
next|跳到下一次循环
redo|在相同的条件下重复刚才的处理

## 1.16. File
### 1.16.1. 常用方法
常用方法|说明
-|-
File::exist?( path)|如果 path 存在,则返回 true.
File::file?( path)|如果 path 是一个普通文件,则返回 true.
File::rename( old, new)|改变文件名 old 为 new.
File::size( path)|返回 path 的文件大小.
File::split( path)|返回一个数组,包含 path 的内容,path 被分成 File::dirname(path) 和 File::basename(path)
File::writable?( path)|如果 path 是可写的,则返回 true
File::ftype( path)|返回一个字符串,表示文件类型<sup>1</sup>
File::join( item...)|返回一个字符串,由指定的项连接在一起<sup>2</sup>
File::new( path[, mode="mode"])<br>File::open( path[, mode="mode"])<br>File::open( path[, mode="mode<sup>3</sup>"]){\|f\| ...}<br>|打开文件.如果指定了块,则通过传递新文件作为参数来执行块.<br>当块退出时,**文件会自动关闭**.
File::mtime( path)|返回 path 的最后一次修改时间

1:

类型|含义
-|-
file|普通文件
directory|目录
characterSpecial|字符特殊文件
blockSpecial|块特殊文件
fifo|命名管道（FIFO）
link|符号链接
socket|Socket
unknown|未知的文件类型

2:

File::join("", "home", "usrs", "bin") # => "/home/usrs/bin"

3:

模式|描述
-|-
r|**只读**模式.文件指针被放置在文件的开头.这是**默认**模式.
r+|**读写**模式.文件指针被放置在文件的**开头**.
w|**只写**模式.如果文件存在,则**重写**文件.<br>如果文件不存在,则创建一个新文件用于写入.
w+|**读写**模式.如果文件存在,则**重写**已存在的文件.<br>如果文件不存在,则创建一个新文件用于读写.
a|**只写**模式.如果文件存在,则文件指针被放置在文件的**末尾**.也就是说,文件是**追加模式.<br>如果文件不存在,则创建一个新文件用于写入.
a+|**读写**模式.如果文件存在,则文件指针被放置在文件的**末尾**.也就是说,文件是**追加**模式.<br>如果文件不存在,则创建一个新文件用于读写.

### 1.16.2. 文件读取流程

文件读取的流程大致如下:<br>

0. 打开文件
0. 读取文件内容
0. 针对文件内容进行操作
0. 关闭文件

```ruby
tmp = []
File::open(file_path, mode='r') do |file|
  file.each_line do |line|
    tmp << line
  end
end
tmp
```

读取文件方法|特性
-|-
read|读取文件内的全部数据<br>读取的文件内容会暂时放在内存中,文件较大时.程序可能因此崩溃
each_line|逐行读取数据<br>只需要保存一行文件数据的内存空间

只是对文件进行了比较简单的操作,把每行的内容放入一个数组里面.<br>

>遍历文件夹内文件及查看具体文件内容

根据实际情况写了一个主要用于查看log/下文件的模块,可以用配置文件灵活的进行配置,关于yml文件读取及主要配置项在[这里]()

[Github-ff4c00 cat_file.rb](https://github.com/ff4c00/markdown/blob/master/code/ruby/cat_file.rb)

## 1.17. 方法
方法是由对象定义的与该对象相关的操作.<br>
在Ruby中,对象的所有操作都被封装为方法.
### 1.17.1. 方法的调用
对象.方法名(参数,...,参数n)<br>
上面的对象被称为接收者,在面向对象的世界中,调用方法被称为`向对象发送消息`,<br>
调用的结果就是`对象接收了消息`.
### 1.17.2. 运算符形式的方法调用
有些方法看起来像运算符,如:<br>
四则运算等二元运算符,<br>
-(负号)等一元运算符等,<br>
指定数组,散列的元素下标的[],<br>
实际上都是方法.
### 1.17.3. 方法的分类
根据接收者的不同,将方法分为3类:

0. 实例方法
0. 类方法
0. 函数式方法

#### 1.17.3.1. 实例方法
以实例对象为接收者的方法称为实例方法.
#### 1.17.3.2. 类方法
接收不是对象而是类本身的方法,称为类方法.
#### 1.17.3.3. 函数式方法
***没有接收者的方法***,称为函数式方法. 如:
```ruby
print 'hello world.'
```
### 1.17.4. 方法的定义及返回值
定义方法的一般语法:
```ruby
def 方法名(参数1,参数2 = 值,...,参数n)
  希望执行的处理
  return 值 if 判断条件
end
```
参数2的写法为定义参数的默认值.<br>
参数的默认值是指在没有指定参数的情况下调用方法时程序中参数默认使用的值.

用return语句来指定方法的返回值.<br>
如果省略return语句,此时方法的最后一个表达式的结果就会成为方法的返回值.<br>
除了返回结果,return还可以用来终止程序的执行并返回return后面的值,如果后面有值的话.<br>

方法的目的是程序处理,所以Ruby允许没有返回值的方法,也就是返回值为nil的方法.

### 1.17.5. 定义带块的方法
```ruby
def myloop
  while true
    yield
  end
end
```
yield时是定义带块方法时的关键字,调用方法时通过块传进来的处理会在yield定义的地方执行.
```ruby
num = 1
myloop do
  puts "#{num}"
  num += 1
end
```

### 1.17.6. 参数不确定的方法
```ruby
def foo(arg, *args, bar)
  [arg, args, bar]
end

p foo(1, 2) #=> [1, [], 2]
p foo(1, 2, 3) #=> [1, [2], 3]
p foo(1, 2, 3, 4) #=> [1, [2, 3], 4]
```
`*变量名`这种形式的参数 ***只能在方法定义的参数列表中出现一次***
### 1.17.7. 关键字参数方法
在上面介绍的方法定义中,都调用方法时需要定义参数的个数以及参数的顺序.<br>
而使用关键字参数,则可以将参数名和参数值成对地传给方法内部使用.
```ruby
def bar(a, x: 'x', y:, **args)
  [x, args, y, a]
end

p bar('a', y: 'y', k: 'k', v: 'v' ) #=> ["x", {:k=>"k", :v=>"v"}, "y", "a"]
# 用散列传递参数
hash = {y: 'y', v: 'v', k: 'k'}
p bar('a', hash) #=> ["x", {:v=>"v", :k=>"k"}, "y", "a"]
```
如果不需要指定默认值,则可以像参数y这样指定参数名即可,省略了默认值的参数在调用时不可以被省略.

为了避免调用方法时因指定了未定义的参数而报错.<br>
可以使用`**变量名`的形式来接收未定义的参数,如参数args所示,<br>
而且只能放在方法参数的末尾,后面定义其他参数会报语法错误.<br>

### 1.17.8. 将数组分解为参数
在调用方法的时候,如果以`*数组`的形式指定参数,这时传递给方法的就不是数组本身,而是数组的各个元素被依次传递给方法.

```ruby
def foo(a, b, c)
  a + b + c
end

p foo(1, 2, 3) #=> 6

*args = [1, 2, 3]
p foo(*args) #=> 6
p foo(*[1, 2, 3]) #=> 6


p foo(*[1, 2, 3, 4]) #=> ArgumentError: wrong number of arguments (given 4, expected 3)

def foo(a,b,*args)
  a + b + args.sum
end

p foo(*[1, 2, 3, 4]) #=> 10
```
上面谈及多重赋值的时候有举到emall_code和sku的例子.<br>
当时是这样实现的:
```ruby
emall_code, *sku = array
```
这里有了新的实现方式:
```ruby
def bar(emall_code, *sku)
...
end
bar(*array)
```

## 1.18. 类
类(class)表示的就是对象的种类.<br>
对象拥有哪些特性都是由类来决定的.<br>
**Ruby中所有的类都是Class类的对象,因此Class类的实例方法以及类对象中所添加的单一方法都是类方法.**<br>
Class是一个对象,Object是一个类.
### 1.18.1. 对象
表现数据的基本单位称为`对象`.

名称|说明
-|-
数值对象|表示数字的对象
字符串对象|表示字符序列的对象
数组&散列对象|表示多个数据集合的对象
时间对象|表示时间的对象
文件对象|表示对文件进行读写操作的对象
符号对象|表示用于识别方法等名称的标签对象
正则表达式对象|表示匹配模式的对象

### 1.18.2. 对象与类的对应表
对象|类
-|-
数值|Numeric
字符串|String
数组|Array
散列|Hash
时间|Time
文件|File
符号|Symbol
正则表达式|Regexp
### 1.18.3. 类和实例
类表示对象的种类,Ruby中的对象一定都属于某个类.<br>
常说的数组对象,数组实际上都是Array类的对象(实例).<br>
相同类的对象所使用的方法也相同,类就像是对象的雏形或设计图,决定了对象的行为.

在生成新的对象时,一般会用到各类的new方法.如Array.new可以生成新的数组对象.<br>
像数组和字符串这种类也可以使用[1, 2, 3]和'abc'这种字面量来生成对象.

当判断某个对象是否属于某个类时,可以使用class和instance_of?方法.
```ruby
[1, 2, 3].class #=> Array
[1, 2, 3].instance_of?(Array) #=> true
```
### 1.18.4. 对象和实例
X X类的对象,一般也会说成X X类的 **实例(instance)**.<br>
所有的Ruby对象其实都是某个类的实例,因此Ruby中的对象和实例意义几乎时一样的.
### 1.18.5. 继承
通过扩展已定义的类来创造新类称为继承.<br>
继承后创建的新类称为子类(subclass),被继承的类称为父类(superclass).

通过继承可以实现以下操作:

0. 在不影响原有功能的前提下追加新功能.
0. 重新定义原有功能,使名称相同的方法产生不同的效果.
0. 在已有的功能的基础上追加处理,扩展已有功能.

BasicObject类是Ruby中所有类的父类,它定义了作为Ruby对象的最基本功能.<br>
BasicObject类是最基础的类,甚至连一般对象需要的功能都没有定义,因此普遍对象所需要的类一般都被定义为Object类.

#### 1.18.5.1. 基类继承关系
> BasicObject
>> Object
>>> Array<br>
>>> String<br>
>>> Hash<br>
>>> Regexp<br>
>>> Dir<br>
>>> Time<br>
>>> Exception

>>> IO
>>>> File

>>> Numeric
>>>> Float<br>
>>>> Complex<br>
>>>> Rational<br>
>>>> Interger
>>>>> Fixnum<br>
>>>>> Bignum

子类和父类的关系称为`is_a关系`.<br>
根据类的继承关系追查对象是否属于某个类时,则可以使用is_a?方法.
```ruby
'string'.is_a?(String) #=> true
'string'.is_a?(Object) #=> true

'string'.instance_of?(String) #=> true
'string'.instance_of?(Object) #=> false
```
### 1.18.6. 创建类
```ruby
class HelloWorld                  # class 语句
  def initialize(myname: 'Ruby')  # initialize 方法
    @name = myname
  end

  def hello                       # 实例方法
    puts "Hello,world.I am #{@name}."
  end
end

avicii = HelloWorld.new(myname: 'Avicii')
avicii.hello #=> Hello,world.I am Avicii.

ruby = HelloWorld.new
ruby.hello #=> Hello,world.I am Ruby.
```
#### 1.18.6.1. class 语句
```ruby
class 类名
  类的定义
end
```
类名的首字母必须大写.
### 1.18.7. initialize 方法
**在class语句中定义的方法为该类的实例方法.**<br>
名为initialize的方法比较特别.<br>
使用new方法生成对象的时候,initialize方法会被调用,new方法的参数也会原封不动地传递给initialize方法.
### 1.18.8. 存取器
在Ruby中,从对象外部是不能直接访问实例变量或对实例变量赋值,需要定义以下方法:
```ruby
class HelloWorld
  ...
  def name         # 获取 @name
    @name
  end

  def name=(value) # 修改 @name
    @name = value
  end
  ...
end

# 第一个方法name只是简单的返回@name的值,可以像访问属性一样使用该方法.
p avicii.name #=> Avicii

# 第二个方法名为name=,使用方法如下:
avicii.name = 'Tim Berg'
```
利用这样的方法,就可以打破Ruby原有的限制,从外部自由的访问对象内部的实例变量.

当对象有很多实例变量时,如果逐个定义存取器,就会变得难懂而且容易写错.<br>
Ruby提供了更简便的定义方法attr_reader<sup>[1]</sup>,attr_writer,attr_accessor.<br>
只要指定实例变量的符号,Ruby会自动帮我们定义相应的存取器.

定义|含义
-|-
attr_reader :name|只读(定义name方法)
attr_writer :name|只写(定义name=方法)
attr_accessor :name|读写(定义上面两个方法)

[1]: RUby中一般把设定实例变量的方法称为writer,读取实例变量的方法称为reader,这两个方法合称accessor.有时也把reader称为getter,writer称为setter,合称accessor(method).一般把accessor(method)译为存取器或访问器.
### 1.18.9. 特殊变量 self
在实例方法中可以用self这个特殊的变量来引用方法的接收者.
```ruby
class HelloWorld
  attr_accessor :name, :years
  ...
  def foo
    # self.name 引用了调用foo方法时的接收者.
    puts "Hi, I am #{self.name}"
  end
  ...
end
```
***调用方法时如果省略了接收者,Ruby就会把self作为该方法的接收者.***

在调用像name=方法这样以=号结束的方法时,不能以缺省接收者的方式调用name=方法,需要显示的去调用.
```ruby
def bar
  name = 'Ruby'      # 为局部变量赋值
  self.name = 'Ruby' # 调用name=方法
end
```

### 1.18.10. 类方法
方法的接收者就是类本身(类对象)的的方法称为类方法.<br>
**类方法的操作对象不是实例,而是类本身.**
创建类方法的几种形式:
```ruby
# class << 类名 ~ end 这种写法的类定义称为单例类定义,其中定义的方法称为单例方法.
class << HelloWorld
  def hello(name:)
    puts "#{name} said hello."
  end
end
HelloWorld.hello(name: 'Avicii') #=> Avicii said hello.

class HelloWorld
  class << self
    def hello(name:)
      puts "#{self.name} said hello."
    end
  end
end

class HelloWorld
  def HelloWorld.hello(name:)
    puts "#{name} said hello."
  end
end

class HelloWorld
  def self.hello(name:)
    puts "#{name} said hello."
  end
end

```
### 1.18.11. 类变量
以@@开头的变量称为类变量.<br>
类变量是该类所有实例的共享变量.这一点与常量类似,不同的是类变量可以多次进行修改.<br>
与实例变量一样,从类的外部访问类变量时也需要存取器.但不能使用attr_accessor等存取器,需要直接定义.
```ruby
class HelloWorld
  @@count = 0
  def HelloWorld.count
    @@count
  end
  ...
end
```
### 1.18.12. 限制方法的调用
访问级别|含义
-|-
public|以实例方法的形式对外公开该方法.
private|在指定接收者的情况下不能调用该方法.<br>只能使用缺省接收者的方式调用该方法,因此无法从实例的外部访问.
protected|在同一个类(及其子类)中时可以将该方法作为实例方法调用.

没有指定访问级别的方法默认为public,但initialize方法是个例外,它通常被定义为private.

### 1.18.13. 扩展类
#### 1.18.13.1. 在原有类的基础上添加方法
Ruby允许在已经定义好的类中添加方法.
```ruby
class String
  # 为Srting类追加计算字符串单词数的实例方法
  def count_word
    ary = self.split(/\s+/) # 用空格分割self
    return ary.size         # 返回分割后的数组元素总数
  end
end
```
#### 1.18.13.2. 继承
利用继承可以在不修改已有类的前提下,通过增加新功能或重新定义已有功能等来创建新的类.
```ruby
class 类名 < 父类名
  类定义
end
```
RingArray类将重定义读取数组内容时使用的[]运算符.
```ruby
class RingArray < Array  # 指定将要继承的父类
  def [](i)              # 重定义运算符[]
    idx = i % self.size  # 计算新索引值
    super(idx)           # 调用父类中的同名方法
  end
end
```
RingArray类中重新定义的[]运算符会在索引超出数组长度时,就会将溢出部分开始重新计算索引.
```ruby
6 % 7  #=> 6
16 % 7 #=> 2
```
利用继承可以将共同的功能定义在父类.把各自独有的功能定义在子类.<br>
定义类时如果没有指定父类,会默认该类为Object类的子类.<br>
Object类提供了很多便于实际编程的方法,如果希望使用更轻量级的类,可以使用BasicObject作为父类.<br>
BasicObject只提供了作为Ruby对象的最低限度的方法.<br>
类对象调用instance_methods方法后,会以符号的形式返回该类的实例方法列表.
### 1.18.14. alias
有时希望给已经存在的方法设置别名.例如Array#size和Array#length
```ruby
alias 别名 原名   # 使用方法名
alias :别名 :原名 # 使用符号名
```
下面将定义HelloWorld以及其子类AliasHelloWorld,在子类中即将会对hello方法设置别名并重定义该方法.
```ruby
class HelloWorld
  def hello
    'Hello, my friend.'
  end
end

class AliasHelloWorld < HelloWorld
  alias alias_hello hello
end
alias_class = AliasHelloWorld.new
p alias_class.alias_hello #=> "Hello, my friend."
p alias_class.hello       #=> "Hello, my friend."

class AliasHelloWorld < HelloWorld
  alias alias_hello hello
  def hello
    "#{alias_hello} Nice to meet you."
  end
end
alias_class = AliasHelloWorld.new
p alias_class.alias_hello #=> "Hello, my friend."
p alias_class.hello       #=> "Hello, my friend. Nice to meet you."
```

### 1.18.15. undef
undef用于删除已定义的方法,例如在子类中如果希望删除父类中定义的方法时,可以用undef方法.
```ruby
undef 方法名
undef :方法名
```
### 1.18.16. 单例类
单例类中的方法,也就是单例方法是只存在于这个对象的方法,同类的其他对象则没有这个方法.<br>
起始类方法就是类的单例方法,所有的类都是Class类的实例,而类方法就是该实例的单例方法.
```ruby
str1 = 'Ruby'
str2 = 'Ruby'

class < str1
  def hello
    "Hello, #{self}"
  end
end

p str1.hello #=> "Hello, Ruby."
p str2.hello #=> NoMethodError: undefined method `hello'
```
## 1.19. 模块
如果说类表现的是事物的实体(数据)及其行为(处理),那么模块表现的只是事物的行为部分.<br>
模块与类的不同点:

0. 模块不能有拥有实例
0. 模块不能被继承
### 1.19.1. 利用Mix-in扩展功能
Mix-in是将模块混合到类中,在定义类时使用include,模块中的方法,常量就能被类使用.<br>
Mix-in可以灵活的解决下面的问题:

0. 虽然两个类拥有相似的功能,但是不希望把它们作为相同的种类(Class)来考虑.
0. Ruby不支持父类的多重继承,因此无法为已经继承的类添加共通的功能.


## 1.20. 页面markdown内容展示

## 1.21. 连接多个数据库

## 1.22. 自动化测试
### 1.22.1. 测试驱动
遇红 -> 变绿 -> 重构

### 1.22.2. 编写规范
位置|要求
:-:|:-
模型|根据字段去编写测试方法<br>即一个字段编写一个测试方法<br>在这个方法中要去根据字段属性进行非空唯一等校验
控制器|根据动作编写测试方法<br>如果涉及到权限问题<br>需要正常与非法的各编写一个测试方法
集成测试|一个流程编写一个测试方法<br>如管理员和非管理员的操作流程单独写

### 1.22.3. setup方法
在运行一个测试方法前首先会执行setup中的内容,setup方法会在每个测试方法运行前执行.<br>
经常用于初始化或重置某个对象,使其下面代码的运行不受上面操作的影响.<br>
一个用户注册场景,setup里面初始化了一个@user对象,在编写测试的时候,一些书里面会将邮箱是否为空以及邮箱格式是否合法单独拆开写测试.<br>
这样的弊端在于过于混乱,如果将针对某一字段的测试编写在一个方法里面无论是后期维护还是阅读起来都是比较方便的.<br>
那么会出现一个问题,上面在测试邮箱不能为空时给邮箱赋了一个空字符串,下面在校验邮箱格式是否合法时不应该受到上面代码的影响,这时调用一下setup方法,重新初始下对象即可.

### 1.22.4. 断言
方法名|说明
-|-
assert 方法|期望参数返回结果为true
assert_not 方法|期望参数返回结果为false
assert_difference 方法 值|期望块中内容执行前后方法的返回结果与值预期一致

> assert&assert_not

当参数的返回结果与期望的不一致时就会报错,这里有个可选参数用来定制错误返回信息.

```ruby
assert @user.save, "#{@user.errors.messages}"
```

>assert_difference

```ruby
# 这里期望的结果是User的数量发生变化并且变化的数量为1
# 如果期望数量减少,比如删除用户参数为:-1
assert_difference 'User.count', 1 do
  post users_path, params: {user: { name: 'mikeposner', email: 'mikeposner@163.com', password: 'password', password_confirmation: 'password'}}
end
```

## 1.23. include和require
方法|特性
-|-
include|相当于把模块中定义的方法插入到类中<br>它允许使用 mixin
require|允许你载入一个库并且会阻止你加载多次

### 1.23.1. Engine-引擎


### 1.23.2. 参考文章
[Rails指南-引擎入门](https://ruby-china.github.io/rails-guides/engines.html)

[RubyChina-基础 Ruby 中 Include, Extend, Load, Require 的使用区别](https://ruby-china.org/topics/25706)

# 2. Rails
## 2.1. Rails.application.routes.url_helpers
用于在后台获取路由链接

```ruby
def get_product_url
  SpkInterface.config[:url] + Rails.application.routes.url_helpers.commodity_path(id: commodity_id, p_id: id) if commodity_id.present?
end
```

## 2.2. 常用GEM
### 2.2.1. 如何学习/了解插件

0. 了解插件的主要作用
0. 了解插件的常用功能
0. 掌握插件的常用方法
0. 了解插件的常见问题及解决方法

### 2.2.2. 模糊查询

> [ransack](./Gems/ransack.md)

### 软删除

#### paranoia

> [paranoia](./Gems/paranoia.md)

### 2.2.3. 权限控制
#### 2.2.3.1. cancancan
#### 2.2.3.2. pundit
#### 2.2.3.3. Policy

### 2.2.4. 分页
#### 2.2.4.1. Kaminari
##### 2.2.4.1.1. 什么是kaminari
##### 2.2.4.1.2. 如何使用kaminari

<hr>

> [GitHub-kaminari](https://github.com/kaminari/kaminari)

> [CSDN-分页插件Kaminari](https://blog.csdn.net/qwbtc/article/details/52035491)

#### 2.2.4.2. will_paginate

### 2.2.5. 表单请求
#### 2.2.5.1. simple_form

### 2.2.6. 表格展示
#### 2.2.6.1. jqgird

### 2.2.7. excelc处理
#### 2.2.7.1. spreadsheet

### 2.2.8. 图片上传
#### 2.2.8.1. carrierwave
#### 2.2.8.2. paperclip

### 2.2.9. 定时任务
#### 2.2.9.1. whenever
##### 2.2.9.1.1. 查看定时任务列表

```shell
whenever -l
```

##### 2.2.9.1.2. 更新定时任务列表

```shell
whenever -i
```
#### 2.2.9.2. resque
#### 2.2.9.3. clock

### 2.2.10. 异步任务
#### 2.2.10.1. sidekiq+sidetip

### 2.2.11. 接口对接处理
#### 2.2.11.1. rest-client
#### 2.2.11.2. httparty

### 2.2.12. 富文本编辑器
#### 2.2.12.1. kindeditor
#### 2.2.12.2. ckeditor
#### 2.2.12.3. ueditor

### 2.2.13. 异常记录
#### 2.2.13.1. exception_notification

### 2.2.14. bug调试
#### 2.2.14.1. pry-rails
#### 2.2.14.2. pry-byebug

### 2.2.15. 接口制作
#### 2.2.15.1. grape

> [grape](./Gems/Grape/grape.md)

### 2.2.16. 用户管理
#### 2.2.16.1. devise(用户管理/注册/三方平台账号登陆/跟踪用户的登入次数,时间戳和 IP/)


### 2.2.17. 测试
#### 2.2.17.1. shoulda-matchers
##### 2.2.17.1.1. rspec-rails
#### 2.2.17.2. guard-rspec/factory_gril
#### 2.2.17.3. minitest

### 2.2.18. 验证码
#### 2.2.18.1. simple_captcha2

### 2.2.19. xml解析
#### 2.2.19.1. nokorigi
#### 2.2.19.2. settingslogic


### 2.2.20. 状态机
#### 2.2.20.1. aasm
#### 2.2.20.2. workflow
[gem-workflow](https://rubygems.org/gems/workflow/)


### 2.2.21. 二维码&条形码
#### 2.2.21.1. rqrcode&barby

> [rqrcode&barby](./Gems/rqrcode&barby.md)


### 2.2.22. 打包
#### 2.2.22.1. rubyzip

### 2.2.23. 树形结构数据库
#### 2.2.23.1. ancestry

> [GitHub | ancestry](https://github.com/stefankroes/ancestry)

### 2.2.24. 静态配置
#### 2.2.24.1. rails-settings-cached

### 2.2.25. pdf
#### 2.2.25.1. wicked_pdf/wkhtmltopdf-binary
#### 2.2.25.2. pdfjs_viewer-rails
#### 2.2.25.3. prawn/prawn-table

### 2.2.26. 审核记录
#### 2.2.26.1. audited

### 2.2.27. 内存数据库
#### 2.2.27.1. redis/redis-namespace

### 2.2.28. 快照
#### 2.2.28.1. wkhtmltoimage-binary

### 2.2.29. 中文转拼音
#### 2.2.29.1. ruby-pinyin

### 2.2.30. 视频处理
#### 2.2.30.1. streamio-ffmpeg

### 2.2.31. word转pdf
#### 2.2.31.1. libreconv

### 2.2.32. webservice
#### 2.2.32.1. 服务端
##### 2.2.32.1.1. wash_out
#### 2.2.32.2. 客户端
##### 2.2.32.2.1. savon

### 2.2.33. 批量导入数据库
#### 2.2.33.1. activerecord-import

### 2.2.34. 服务
#### 2.2.34.1. thin  
#### 2.2.34.2. puma
#### 2.2.34.3. passenger

### 2.2.35. 数据库备份
#### 2.2.35.1. backup

### 2.2.36. 大写金额

#### 2.2.36.1. number_to_capital_zh


# link_to

## data
### disable_with

> 按钮点击后禁用提示语(防止重复点击) 

```ruby
<%= link_to '补开发票',  make_up_invoice_order_path(order, back: request.fullpath), data: {:disable_with => "提交中..."} %>
```

# 还有这种骚操作?

## where.not

```ruby
User.where.not(status: -1).ransack(params[:q])
```
