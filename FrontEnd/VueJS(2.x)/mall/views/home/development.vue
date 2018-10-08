<template>
  <div>
    <div v-for="index in 1" :key="index">
      <Card></Card>
    </div>
  </div>
</template>

<script>

  // 商品卡片
  import Card from '@components/products/card.vue';
  export default {
    components: {Card},
    
  }
  // 商品卡片 end




  // export default {
    
  // }
</script>
