<template>
  <div>
    <div v-for="index in 10" :key="index">
      <Card :cardData="cardData"></Card>
    </div>
  </div>
</template>

<script>
import {productCardData} from '@development/data';

// 商品卡片
import Card from '@components/products/card.vue';
export default {
  components: {Card},
  data () {
    return {
      cardData: productCardData
    }
  }
  
}
// 商品卡片 end




// export default {
  
// }
</script>
