<!-- TOC -->

- [1. 准备](#1-准备)
- [2. 使用](#2-使用)
  - [2.1. 常用方法](#21-常用方法)
    - [2.1.1. count](#211-count)
    - [2.1.2. action](#212-action)
    - [2.1.3. audited_changes](#213-audited_changes)
    - [2.1.4. revisions](#214-revisions)
    - [2.1.5. revision(index)](#215-revisionindex)
    - [2.1.6. revision_at](#216-revision_at)
  - [2.2. 指定列](#22-指定列)
  - [2.3. 指定回调](#23-指定回调)
  - [2.4. 定制的记录信息详细内容](#24-定制的记录信息详细内容)
    - [2.4.1. comment_required](#241-comment_required)
  - [2.5. 记录数量限制](#25-记录数量限制)
  - [2.6. 记录所属用户](#26-记录所属用户)
    - [2.6.1. current_user](#261-current_user)
    - [2.6.2. current_user_method](#262-current_user_method)
  - [2.7. 关联记录](#27-关联记录)
    - [2.7.1. associated_with&has_associated_audits](#271-associated_withhas_associated_audits)
    - [2.7.2. associated&associated_audits](#272-associatedassociated_audits)
  - [2.8. own_and_associated_audits](#28-own_and_associated_audits)
  - [2.9. 禁用记录](#29-禁用记录)
- [3. Audited扩展](#3-audited扩展)
  - [3.1. Audited::Audit](#31-auditedaudit)

<!-- /TOC -->

# 1. 准备

> Gemfile添加

```ruby
gem "audited", "~> 版本号"
```
> 添加audits表

```bash
rails generate audited:install
rake db:migrate
```

> model添加

在需要使用audits的模型中添加 `audited`.如:

```ruby
class User < ActiveRecord::Base
  audited
end
```


# 2. 使用

## 2.1. 常用方法
```ruby
user = User.create!(name: "Steve")
```

### 2.1.1. count

count方法返回该条数据的记录总条数.

默认情况下，无论何时创建，更新或删除使用了audited的表中的数据都会添加一条记录.如:

```ruby
user.audits.count # => 1
```

### 2.1.2. action

action方法将展示触发该条记录的动作.

```ruby
user.update_attributes!(name: "Ryan")
user.audits.count # => 2

audit = user.audits.last
audit.action # => "update"
```

### 2.1.3. audited_changes

audited_changes方法将展示该条数据 *有记录的* 所有具体改动内容.

```ruby
audit.audited_changes # => {"name"=>["Steve", "Ryan"]}
```

### 2.1.4. revisions

revisions方法将展示该条数据的 *有记录的* 所有先前版本

```ruby
user.revisions
```

### 2.1.5. revision(index)

可以通过指定索引来查看 *有记录的* 具体某条先前版本.

```ruby
user.revision(1)
```

### 2.1.6. revision_at

revision_at方法通过指定具体的日期来查看当天该条数据所有的记录.
```ruby
user.revision_at(Date .parse('2016-01-01'))
```

## 2.2. 指定列

前面提到,默认情况下,任何属性更改都会创建一条记录.<br>
可以通过限定字段来改变创建记录的时机.

```ruby
class User < ActiveRecord::Base
  # 全部字段
  # audited

  # 指定单个字段
  # audited only: :name

  # 指定多个字段
  # audited only: [:name, :address]

  # 除某些字段外的其他字段
  # audited except: :password
end
```
## 2.3. 指定回调

除了可以限制创建记录的字段,还可以限定具体的某些回调,而非所有回调都去创建记录.

```ruby
class User < ActiveRecord::Base
  # 只有在改动name属性或者更新和删除该数据时创建记录
  # audited only: :name, on: [:update, :destroy]
end
```

## 2.4. 定制的记录信息详细内容

可以使用audit_comment属性来定制记录的详细内容.

```ruby
new_name = 'Mike'
user.update_attributes!(name: new_name, audit_comment: "名字由#{self.name},更改为:#{new_name}.")
user.audits.last.comment # => "名字由Ryan,更改为:Mike."

```

### 2.4.1. comment_required

comment_required选项用来限制是否每次记录都必须包含详细内容即:audit_comment.

```ruby
class  User <ActiveRecord :: Base 
  audited ：comment_required => true 
end
```

## 2.5. 记录数量限制

如果具体业务中保存每条数据的所有记录不太现实,甚至是在限制具体字段的前提下仍会产生大量记录数据.<br>
或者说没有必要保留历史记录,只关心数据近期的变化.<br>
可以限定每条数据所有记录的保存条数.<br>

通过两种方式可以实现:

> 项目初始化(initializer)时

```ruby
Audited.max_audits = 10 # 只保留最后的10条记录
```

缺点在于全局配置,如果某个模型想要增加保存记录数量,不可个性化配置.

> 模型中单独配置

```ruby
class User < ActiveRecord::Base
  audited max_audits: 2
end
```

## 2.6. 记录所属用户

又或者说是谁改动这某条数据.

### 2.6.1. current_user

如果项目中有使用current_user来保存当前登录的用户,那么这将变得很简单.<br>
因为audited默认通过current_user方法来查找当前登录的用户,来记录改动数据的操作者.

```ruby
current_user #=>#<User name：“Mike”> 
user.update_attributes!(name: "Avicii")
user.audits.last.user  #=>#<User name: "Mike"> 
```

### 2.6.2. current_user_method

可以在项目初始化(initializer)时通过在配置current_user_method,来告诉audited寻找当前登录用户的具体方法

```ruby
Audited.current_user_method = :authenticated_user
```

## 2.7. 关联记录

现有模型关系如下:

```ruby
class User < ActiveRecord::Base
  belongs_to :company
  audited
end

class Company < ActiveRecord::Base
  has_many :users
end
```

如果想要查看某公司下用户数据的变更记录该怎么查询?

### 2.7.1. associated_with&has_associated_audits

可以通过associated_with选项来解决这一问题.

```ruby
class User < ActiveRecord::Base
  belongs_to :company
  audited associated_with: :company
end

class Company < ActiveRecord::Base
  has_many :users
  has_associated_audits
end
```

### 2.7.2. associated&associated_audits

TODO: 实际操作确定这里的user是指操作的对象,还是执行操作的用户.

```ruby

```

## 2.8. own_and_associated_audits

同上

## 2.9. 禁用记录

如果某些操作符合记录条件但又不想被记录,可以使用save_without_auditing方法可以跳过记录.

```ruby
user.save_without_auditing
```

或者采用块方法

```ruby
user.without_auditing do
  user.save
end
```

# 3. Audited扩展

## 3.1. Audited::Audit

通过继承Audited::Audit类,可以扩展或重写原有方法

```ruby
class  CustomAudit <Audited :: Audit
  def  some_custom_behavior 
   “ Hiya！”
  end 
end
```

并且将其加入初始化

```ruby
# config/initializers/audited.rb
Audited.config do |config|
  config.audit_class = CustomAudit
end
```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

```ruby

```

<hr>

> [Github | audited](https://github.com/collectiveidea/audited)