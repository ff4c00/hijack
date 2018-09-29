import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { resolve } from 'url';
import Vuex from 'vuex';
import Routers from '../routers/routers.js';

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
const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
});
// 状态管理 end

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});