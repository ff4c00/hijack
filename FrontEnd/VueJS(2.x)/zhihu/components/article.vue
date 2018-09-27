<template>
  <div class="zhihu-article">

    <!-- <div class="zhihu-article-title">
      {{data.title}}
    </div> -->
    <div class="zhihu-article-content" v-html="data.body+''">
    </div>

    <div class="zhihu-article-comments" v-show="comments.length">
      <span>评论({{ comments.length }})</span>
      <div class="zhihu-article-comment" v-for="comment in comments" :key="comment.id">
        <div class="zhihu-article-comment-avatar">
          <img :src="comment.avatar" alt="">
        </div>

        <div class="zhihu-article-comment-content">
          <div class="zhihu-article-comment-content-name">{{ comment.author }}</div>
          <div class="zhihu-article-comment-content-time" v-time="comment.time"></div>
          <div class="zhihu-article-comment-content-text">{{ comment.content }}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Util from '@/util.js';
import Time from '@lib/timeStamp.js';
import {demoArticle, damoComtent} from '@datas/zhihu.js';

export default {
  directives: { Time },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      data: {},
      // data: demoArticle,
      comments: [],
      // comments: damoComtent.comments,
      util: Util
    }
  },
  methods: {
    getArticle () {
      Util.ajax.get('news/' + this.id)
      .then( res => {
        res.body = res.body.replace(/src="http/g, 'src="' + Util.imgPath + 'https');
        this.data = res;
        // 返回文章顶端
        window.scrollTo(0,0);
        this.getComments();
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    getComments () {
      Util.ajax.get('story/'+this.id+'/short-comments')
        .then( res => {
          this.comments = res.comments;
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  watch: {
    id (val) {
      if (val) this.getArticle();
    }
  }

};
</script>
