import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { resolve } from 'url';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

function component() {

  var element = document.createElement("div"); 
  element.setAttribute("id","app");

  return element;
}

document.body.appendChild(component());


// 路由配置
const Routers = [
  {
    path: '/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../router/views/index.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/index'
  }
];

const RouterConfig = {
  // mode: 'history' // 需要服务端的支持
  routes: Routers
};

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

// 路由配置end

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
