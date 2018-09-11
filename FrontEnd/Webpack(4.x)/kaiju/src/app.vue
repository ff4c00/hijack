<template>
  <div>
    Hello {{ name }}
    <!-- 
      路由视图:router-view,用于挂载所有路由组件,
      运行网页时, router-view会根据当前路由动态渲染不同的页面组件. 
      一些公共部分比如导航栏,底部版权信息等可以直接写在div里面与router-view同级,
      路由切换时只是切换router-view挂载的组件,其他内容不会变化. 
    -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'vue.js'
      }
    }
  }
</script>

<style scoped>
  div{
    color: aqua;
    font-size: 24px;
  }
</style>
