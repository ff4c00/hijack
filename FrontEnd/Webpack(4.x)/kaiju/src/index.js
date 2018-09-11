import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { resolve } from 'url';

Vue.use(VueRouter);

function component() {

  var element = document.createElement("div"); 
  element.setAttribute("id","app");

  return element;
}

document.body.appendChild(component());



// ES6中使用let和const命令来声明变量,代替了var,let和const的作用域都是'块'.
// let和const的主要区别在于const用于声明常量,即声明后不可修改.
const Routers = [
  {
    path: '/index',
    component: (resolve) => require(['../router/views/index.vue'], resolve)
  },
  {
    path: '/about',
    component: (resolve) => require(['../router/views/about.vue'], resolve)
  },
  {
    path: '/user/:id',
    component: (resolve) => require(['../router/views/user.vue'], resolve)
  },
  {
    // 当访问路径不存在时,直接重定向到首页 
    path: '*',
    redirect: '/index'
  }
];

const RouterConfig = {
  // 设置mode为history时会开启HTML5的History路由模式.
  // 通过'/'配置路径,如不配置mode,默认将使用'#'来配置路径.
  // 开启History路由,生产环境服务端必须进行配置,将所有路由指向同一个html,或设置404页面为该html,
  // 否则刷新页面会出现404.
  mode: 'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
