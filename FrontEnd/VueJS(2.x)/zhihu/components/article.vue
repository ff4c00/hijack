<template>
  <div class="zhihu-article">
    <div class="zhihu-article-title">
      {{data.title}}
    </div>
    <div class="zhihu-article-content" v-html="data.body">
    </div>
  </div>
</template>

<script>
import Util from '@/util.js';
import {demoArticle} from '@datas/zhihu.js';

export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // data: {}
      data: demoArticle
    }
  },
  methods: {
    getArticle () {
      Util.get('news/' + this.id)
      .then( res => {
        res.body = res.body.replace(/src="http/g, 'src="' + imgPath + 'https');
        this.date = res;
        // 返回文章顶端
        window.scrollTo(0,0);
      })
    }
  },
  watch: {
    id (val) {
      // if (val) this.getArticle();
    }
  }

};
</script>
