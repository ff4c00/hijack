# paranoia
> Gemfile添加源
```ruby
gem "paranoia", "~> 版本"
```
并执行更新

> 创建迁移
```ruby
def change
  add_column :table_name, :deleted_at, :datetime
  add_index :table_name, :deleted_at
end
```
> 模型
```ruby
# without_default_scope: true 非必须项,添加后默认将不再查询出被软删除的数据
acts_as_paranoid without_default_scope: true
```
> 常用方法

方法|含义
-|-
destroy|数据将被软删除,并非真实删除
really_destroy!|真实删除

> GItHub | [paranoia](https://github.com/rubysherpas/paranoia)
