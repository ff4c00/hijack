<template>
  <div>
    
    <div class="header">
      <router-link to="/products/index" class="header-title">商品列表页面</router-link>
      <div class="header-menu">
        <router-link to="/cart/show" class="header-menu-cart">
          购物车
          <span v-if="cartList.length">{{cartList.length}}</span>
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      cartList () {
        return this.$store.state.cartList
      }
    }
  }
</script>

<style scoped>

</style>
