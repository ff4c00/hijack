> Elasticsearch搜索Ruby客户端

# 常见问题

## 结果集过大(query_phase_execution_exception)

> 错误提示

[500] {"error":{"root_cause":[{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [37950]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}],"type":"search_phase_execution_exception","reason":"all shards failed","phase":"query","grouped":true,"failed_shards":[{"shard":0,"***index***":"`products_development_20180808150007253`","node":"stbYFJmTR-mcSA17lH0PJw","reason":{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [37950]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}}]},"status":500}

> 解决措施

```
curl -XPUT "http://localhost:9200/上面标记的索引名称/_settings" -d '{ "index" : { "max_result_window" : 500000 } }'
```


