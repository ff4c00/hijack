> paranoia用于隐藏数据展示,即软删除.

<!-- TOC -->

- [迁移](#迁移)
- [model](#model)
- [使用](#使用)

<!-- /TOC -->

# 迁移

```ruby
add_column :table_name, :deleted_at, :datetime
add_index :table_name, :deleted_at
```

# model

添加:

```ruby
acts_as_paranoid
```

# 使用

软删除:

```ruby
data.destroy
```

硬删除:

```ruby
data.really_destroy!
```