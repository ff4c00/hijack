> Elasticsearch搜索Ruby客户端

<!-- TOC -->

- [安装](#安装)
  - [Gemfile](#gemfile)
  - [Model](#model)
  - [reindex](#reindex)
- [基本使用](#基本使用)
- [常见问题](#常见问题)
  - [结果集过大(query_phase_execution_exception)](#结果集过大query_phase_execution_exception)
- [参考资料](#参考资料)

<!-- /TOC -->

# 安装

## Gemfile

添加:

```Ruby
gem 'searchkick'
```

## Model

如Product模型需要搜索功能,添加:

```Ruby
class Product < ApplicationRecord
  # ...
  searchkick
  # ...
end
```

## reindex

当Product模型中的数据需要初始化或者重置索引时:

```Ruby
Product.reindex
```

> 单条数据重置索引

```Ruby
Product.first.reindex
```

# 基本使用


# 常见问题

## 结果集过大(query_phase_execution_exception)

> 错误提示

[500] {"error":{"root_cause":[{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [37950]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}],"type":"search_phase_execution_exception","reason":"all shards failed","phase":"query","grouped":true,"failed_shards":[{"shard":0,"***index***":"`products_development_20180808150007253`","node":"stbYFJmTR-mcSA17lH0PJw","reason":{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [37950]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}}]},"status":500}

> 解决措施

```
curl -XPUT "http://localhost:9200/上面标记的索引名称/_settings" -d '{ "index" : { "max_result_window" : 500000 } }'
```

# 参考资料

> []()


