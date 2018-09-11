<template>
  <div>Hello {{ name }}</div>
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
