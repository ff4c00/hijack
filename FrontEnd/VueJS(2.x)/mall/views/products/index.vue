<template>
  <div>
    <div v-show="list.length">

      <!-- 筛选条件 -->
      <div class="list-control">
        <div class="list-control-order">
          <span>排序:</span>
          <span class="list-control-order-item" :class="{on: order === ''}" @click="order = ''">默认</span>
          <span class="list-control-order-item" :class="{on: order === 'sales'}" @click="order = 'sales'">销量 <template v-if="order === 'sales'">↓</template></span>
          <span class="list-control-order-item" :class="{on: order.indexOf('price') > -1}" @click="handleOrderPrice">
            价格
            <template v-if="order === 'price-asc'">↑</template>
            <template v-if="order === 'price-desc'">↓</template>
          </span>
        </div>
        <div class="list-control-brand">
          <span>品牌:</span>
          <span class="list-control-brand-item" v-for="(brand,index) in brands" :key="index" :class="{on: brand === selected_brand}" @click="select_brand(brand)">{{brand}}</span>
        </div>
        <div class="list-control-color">
          <span>颜色:</span>
          <span class="list-control-color-item" v-for="(color,index) in colors" :key="index" :class="{on: color === selected_color}" @click="select_color(color)">{{color}}</span>
        </div>
      </div>

      <!-- 商品卡片列表 -->
      <div v-for="(product, key, index) in filterList" :key="index">
        <Card :cardData="product"></Card>
      </div>

      <!-- 无符合条件商品展示信息 -->
      <div v-show="!filterList.length" class="not-satisfiable">
        <p>暂无符合条件商品</p>
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
      order: '',
      selected_brand: '',
      selected_color: ''
    }
  },
  computed: {
    list () {
      return this.$store.state.productList
    },
    brands () {
      return this.$store.getters.brands
    },
    colors () {
      return this.$store.getters.colors
    },
    filterList () {
      // [...] 展开运算符相当于克隆了一份数据
      let list = [...this.list];
      // list = this.orderList(list);
      let order = this.order;
      let selected_brand = this.selected_brand;
      let selected_color = this.selected_color;
      if (order != '') {
        if (order === 'sales') {
          list = list.sort((a,b) => b.sales - a.sales);
        } else if (order === 'price-desc') {
          list = list.sort((a,b) => b.prices.price - a.prices.price);
        } else if (order === 'price-asc') {
          list = list.sort((a,b) => a.prices.price - b.prices.price);
        }
      }
      if (selected_brand != '') {
        list = list.filter(item => item.brand === selected_brand);
      }
      if (selected_color != '') {
        list = list.filter(item => item.color === selected_color);
      }
      return list;


    },
    // 商品排序
    orderList (list) {
      let order = this.order;
      if (order != '') {
        if (order === 'sales') {
          list = list.sort((a,b) => b.sales - a.sales);
        } else if (order === 'cost-desc') {
          list = list.sort((a,b) => b.cost - a.cost);
        } else if (order === 'cost-asc') {
          list = list.sort((a,b) => a.cost - b.cost);
        }
      }
      if (brand !== '') {
        list = list.fliter(item => item.brand === this.brand);
      }
      if (color !== '') {
        list = list.fliter(item => item.color === this.color);
      }
      return list;
    },

  },
  methods: {
    handleOrderPrice () {
      if (this.order === 'price-desc') {
        this.order = 'price-asc';
      } else {
        this.order = 'price-desc';
      }
    },
    select_brand (brand) {
      if (this.selected_brand === brand) {
        this.selected_brand = '';
      } else {
        this.selected_brand = brand;
      }
    },
    select_color (color) {
      if (this.selected_color === color) {
        this.selected_color = '';
      } else {
        this.selected_color = color;
      }
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

<style lang="scss" scoped>
// 声明混合宏-筛选按钮样式
@mixin button-style {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 4px 6px;
}

@mixin selected-button-style {
  background-color: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}

.not-satisfiable {
  p {
    text-align: center;
  }
}

.list-control {
  background-color: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px rgba(0,0,0,.2);
  &-order {
    margin-bottom: 16px;
    &-item {
      @include button-style;
    }
    .on {
      @include selected-button-style;
      }
  }
  &-brand {
    margin-bottom: 16px;
    &-item {
      @include button-style;      
    }
    .on {
      @include selected-button-style;
    }
  }
  &-color {
    margin-bottom: 16px;
    &-item {
      @include button-style;      
    }
    .on {
      @include selected-button-style;
    }
  }
}
</style>

