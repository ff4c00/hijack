<template>
  <div class="product">
    <router-link :to="'/product/show/'+cardData.id" class="product-main">
      <div class="product-pic">
        <img :src="cardData.images_path.main"/>
      </div>

      <div class="product-name">
        <p>{{cardData.name}}</p>
      </div>

      <div class="product-price">
        <p>&yen;{{cardData.sales.price}}</p>
      </div>

      <div class="product-cart">
        <p @click.prevent="handleCart">加入购物车</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import {standardColors} from '@development/data';

export default {
  props: {
    cardData: Object
  },
  data () {
    return {
      colors: standardColors
    }
  },
  methods: {
    handleCart () {
      this.$store.commit('addCart', this.cardData.id)
    }
  }
}
</script>

<style lang="scss" scoped>

.product {
  width: 25%;
  float: left;
  // background: rgb(176, 233, 233);
  &-main {
    display: block;
    margin: 16px;
    border: 1px solid #dddee1;
    border-radius: 6px;
    overflow: hidden;

    &:hover .name p {
      color: #0070c9;
    }
  }
  &-pic {
    margin: 16px;
    padding: 16px;
    text-align: center;
    /* background: rgb(145, 219, 126); */
    img {
      width: 100%;
    }
  }
  &-name {
    margin: auto;
    width: 80%;
    /* background: rgb(84, 140, 224); */
  }
  &-price {
    text-align: center;
    width: 30%;
    margin: 16px auto;
    text-align: center;
    /* background: rgb(206, 153, 228); */
  }
  &-cart {
    margin: auto;    
    width: 30%;
    text-align: center;
    /* background: rgb(235, 145, 175); */
  }

}




</style>
