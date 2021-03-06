import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { resolve } from 'url';
import Vuex from 'vuex';
import Routers from '../routers/routers.js';
import './style.scss';
import {productCardData} from '@development/data';


Vue.use(VueRouter);
Vue.use(Vuex);

function component() {
  var element = document.createElement("div"); 
  element.setAttribute("id","app");
  return element;
}
document.body.appendChild(component());


// 路由配置
const RouterConfig = {
  // mode: 'history', // 需要服务端的支持
  routes: Routers
};

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

// 路由配置end


// 状态管理

function uniqArray (array) {
  const res = [];
  const json = {};
  for (let i = 0; i < array.length; i++) {
    const _self = array[i];
    if (!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
};

const store = new Vuex.Store({
  state: {
    // 商品列表数据
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand);
      return uniqArray(brands);
    },
    colors: states => {
      const colors = states.productList.map(item => item.color);
      return uniqArray(colors);
    }
  },
  mutations: {
    // 商品列表添加数据
    setProductList (state, data) {
      state.productList = data;
    }
  },
  actions: {
    // 请求商品列表数据
    getProductList (context) {
      setTimeout(() => {
        context.commit('setProductList', productCardData);
      }, 500);
    }
  }
});
// 状态管理 end

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});