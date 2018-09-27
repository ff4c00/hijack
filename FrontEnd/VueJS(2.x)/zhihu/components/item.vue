<template>
  <div>
    <a class='zhihu-item'>
      <div class="zhihu-img" v-if="data.images">
        <img :src="imgPath + data.images[0]">
      </div>
      <div v-else :class="{noImg: !data.images}">
        <img :src="imgPath + 'http://pic1.zhimg.com/da8e974dc_im.jpg'" style="width:100%; height: 100%;">
      </div>
      <!-- <div class="zhihu-title" > -->
      <div class="zhihu-title">
        {{data.title}}
      </div>
    </a>

  </div>
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
