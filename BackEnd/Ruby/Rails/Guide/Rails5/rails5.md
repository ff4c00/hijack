<!-- TOC -->

- [1. Active Record](#1-active-record)
  - [1.1. 基础](#11-基础)
    - [1.1.1. 对象关系映射](#111-对象关系映射)
    - [1.1.2. 用作ORM框架的Active Record](#112-用作orm框架的active-record)
    - [1.1.3. “多约定少配置”原则](#113-多约定少配置原则)
      - [1.1.3.1. 命名约定](#1131-命名约定)
      - [1.1.3.2. 模式约定](#1132-模式约定)
      - [1.1.3.3. 覆盖命名约定](#1133-覆盖命名约定)
        - [1.1.3.3.1. 覆盖默认表名](#11331-覆盖默认表名)
        - [1.1.3.3.2. 覆盖默认主键](#11332-覆盖默认主键)
  - [数据验证](#数据验证)
  - [回调](#回调)
  - [迁移](#迁移)

<!-- /TOC -->

# 1. Active Record

> Active Record是MVC中的M（模型），负责处理数据和业务逻辑。ActiveRecord负责创建和使用需要持久存入数据库中的数据。ActiveRecord实现了ActiveRecord模式，是一种对象关系映射系统.

## 1.1. 基础

### 1.1.1. 对象关系映射

对象关系映射（ORM）是一种技术手段，把应用中的对象和关系型数据库中的数据表连接起来。使用 ORM，应用中对象的属性和对象之间的关系可以通过一种简单的方法从数据库中获取，无需直接编写 SQL 语句，也不过度依赖特定的数据库种类.

### 1.1.2. 用作ORM框架的Active Record

Active Record 提供了很多功能，其中最重要的几个如下：

0. 表示模型和其中的数据.
0. 表示模型之间的关系.
0. 通过相关联的模型表示继承层次结构.
0. 持久存入数据库之前，验证模型.
0. 以面向对象的方式处理数据库操作.

### 1.1.3. “多约定少配置”原则

> 使用其他编程语言或框架开发应用时，可能必须要编写很多配置代码。但是，如果遵循Rails的约定，创建ActiveRecord模型时不用做多少配置（有时甚至完全不用配置）。Rails的理念是， ***如果大多数情况下都要使用相同的方式配置应用，那么就应该把这定为默认的方式*** 。所以，只有约定无法满足要求时，才要额外配置.

#### 1.1.3.1. 命名约定

模型类|数据表
-|-
模型类名单数(Book)|数据表复数(books)
模型类首字母大写且驼峰命名(BookClub)|数据表名下划线分隔(book_clubs)

#### 1.1.3.2. 模式约定

根据字段的作用不同，Active Record 对数据库表中的字段命名也做了相应的约定：

作用|约定
-|-
外键|table_name_id 形式命名，例如item_id，创建模型关联后，Active Record会查找这个字段
主键|默认情况下，Active Record使用整数字段id作为表的主键。使用ActiveRecord迁移创建数据库表时，会自动创建这个字段

可选的字段，能为 Active Record 实例添加更多的功能：

> **!** 虽然这些字段是可选的，但在Active Record中是被 ***保留*** 的.

字段名称|作用
-|-
created_at|创建记录时，自动设为当前的日期和时间
updated_at|更新记录时，自动设为当前的日期和时间
lock_version|在模型中添加乐观锁
type|让模型使用单表继承
(association_name)_type|存储多态关联的类型
(table_name)_count|缓存所关联对象的数量。比如说，一个 Article 有多个 Comment，那么 comments_count 列存储各篇文章现有的评论数量

#### 1.1.3.3. 覆盖命名约定

##### 1.1.3.3.1. 覆盖默认表名

ActiveRecord::Base.table_name= 方法可以指定要使用的表名：

```ruby
# ApplicationRecord继承自ActiveRecord::Base
class Product < ApplicationRecord
  self.table_name = "table_name"
end
```

##### 1.1.3.3.2. 覆盖默认主键

```ruby
class Product < ApplicationRecord
  self.primary_key = "product_id"
end
```

## 数据验证

## 回调

## 迁移