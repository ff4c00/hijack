<template>
  <!--
    Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
    关键字: one root element
    错误原因: 
      vue模板只支持一个元素，不能并列包含两个及以上.
      可以简单的理解为template标签下的内容应该在一个大的div下面.
  -->
  <div>
    <div>首页</div>
    <p>计数器:{{count}}</p>
    <button @click="handleIncrement">+1</button>
    <button @click="handleDecrease">-2</button>
    <div>
      <!--
        router-link标签是vue-router的内置组件,默认被渲染为\<a>标签.
        选项|含义|要求
        -|-|-
        to|指定需要跳转的路径|必填
        tag|自定渲染后的html标签<br>如<router-link to='/about' tag='li'>,最终的页面渲染结果就不是\<a>标签而是\<li>|非必填
        replace|使用replace不会留下History记录,即不能使用后退键返回上一页面|非必填
      -->
      <router-link to='/about'>跳转到</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      count () {
        return this.$store.state.count;
      }
    },
    methods: {
      handleIncrement () {
        // 在组件内,通过this.$store.commit方法来执行mutations中的方法.
        this.$store.commit('increment');
      },
      handleDecrease () {
        this.$store.commit({
          type: 'decrease',
          count: 2
        });
      }
    }
  }
</script>

