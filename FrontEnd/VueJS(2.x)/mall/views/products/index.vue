<template>
  <div>
    <div v-show="list.length">
      <div v-for="(product, key, index) in list" :key="index">
        <Card :cardData="product"></Card>
      </div>
    </div>
  </div>
</template>

<script>

// 商品卡片
import Card from '@components/products/card.vue';
export default {
  components: {Card},
  data () {
    return {
    }
  },
  computed: {
    list () {
      return this.$store.state.productList
    }
  },
  mounted () {
    this.$store.dispatch('getProductList')
  }
  
}
// 商品卡片 end




// export default {
  
// }
</script>
