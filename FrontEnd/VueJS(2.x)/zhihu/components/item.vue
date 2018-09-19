<template>
  <a class='zhihu-item'>
    <div class="zhihu-img" v-if="data.images">
      <img :src="imgPath + data.images[0]" alt="">
    </div>
    <div class="zhihu-title" :class="{noImg: !data.images}">
      {{data.title}}
    </div>
  </a>
</template>

<script>
import Util from "@/util.js";  

export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      imgPath: Util.imgPath
    }
  }
}
</script>
