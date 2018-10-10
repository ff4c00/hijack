<template>
  <div>
    <!-- <Card :cardData="cardData"></Card> -->
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
      cardData: productCardData[0]
    }
  }
  
}
// 商品卡片 end




// export default {
  
// }
</script>
