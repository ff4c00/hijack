<template>
  <div class='app'>
    <div class="zhihu">

      <div class="zhihu-menu">
        <div 
          class="zhihu-ment-item"
          :class="{on: type === 'recommend'}"
          @click="toRecommend()"
        >
          每日推荐
        </div>
        <div 
          class="zhihu-ment-item"
          :class="{on: type === 'zhihu'}"
          @click="toThemes()"
        >
          主题日报
          <ul v-show="showThemes">
            <li v-for="item in themeItems" :key="item.id">
              <a 
                :class="{on: item.id === themeId && type === 'zhihu'}"
                @click="handleToTheme(item.id)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="zhihu-list">
        <template v-if=" type === 'recommend'">
          <div v-for="item in recommendList.stories" :key="item.id">
            <!-- Item是组件,绑定原生事件时要带事件修饰符.native,不然会认为监听来自Item组件的自定义事件click -->
            <Item :data="item" @click.native="handleClick(item.id)"></Item>
          </div>
        </template>
        <template v-if=" type === 'zhihu'">
          <div v-for="item in zhihuList" :key="item.id">
            <!-- Item是组件,绑定原生事件时要带事件修饰符.native,不然会认为监听来自Item组件的自定义事件click -->
            <Item :data="item" @click.native="handleClick(item.id)"></Item>
          </div>
        </template>
      </div>

      <Article :id="articleId"></Article>
    </div>
  </div>
</template>

<script>

import Util from '@/util.js';
import Item from '@components/item.vue';
import Article from '@components/article.vue';
import {demoRecommends, demoThemes} from '@datas/zhihu.js';

export default {
  components: {Item, Article},
  data () {
    return {
      themes: [],
      showThemes: false,
      themeId: 0,
      // themeItems: demoThemes.others,
      themeItems: [],
      type: 'recommend',
      recommendTime: Util.getTodayTime(),
      // recommendList: demoRecommends,
      recommendList: {},
      isLoading: false,
      zhihuList: [],
      articleId: 0,
    }
  },
  methods: {
    toThemes () {
      this.showThemes = !(this.showThemes)
      this.type = 'zhihu';
    },
    toRecommend () {
      this.type = 'recommend';
      this.showThemes = false;
    },
    getThemes () {
        Util.ajax.get('themes').then(res => {
        this.themeItems = res.others;
      })
    },
    handleToTheme (id) {
      this.type = 'zhihu';
      this.themeId = id;
      this.zhihuList = [];
      Util.ajax.get('theme/'+this.themeId)
        .then( res => {
          this.zhihuList = res.stories.filter(item => item.type !== 1);
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    handleToRecommendList () {
      this.type = 'recommend';
      this.recommendList = [];
      this.recommendTime = Util.getTodayTime();
      this.getRecommendList();
    },
    getRecommendList () {
      this.isLoading = true;
      Util.ajax.get('news/latest')
        .then( res => {
          this.recommendList = res;
          this.isLoading = false;
          // 文章详情默认显示每日推荐的第一条数据
          this.articleId = this.recommendList.stories[0].id;
        })
        .catch( error => {
          console.log('获取每日推荐列表异常:'+error);
        });
    },
    handleClick(id) {
      this.articleId = id;
    }
  },
  mounted () {
    this.getThemes();
    this.getRecommendList();
  }
}
</script>

<style scoped>

</style>
