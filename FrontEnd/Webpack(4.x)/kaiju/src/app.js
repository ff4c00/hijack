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
// ES6中使用let和const命令来声明变量,代替了var,let和const的作用域都是'块'.
// let和const的主要区别在于const用于声明常量,即声明后不可修改.
const Routers = [
  {
    path: '/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../router/views/index.vue'], resolve)
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: (resolve) => require(['../router/views/about.vue'], resolve)
  },
  {
    path: '/user/:id',
    meta: {
      title: '用户'
    },
    component: (resolve) => require(['../router/views/user.vue'], resolve)
  },
  {
    // 当访问路径不存在时,直接重定向到首页 
    path: '*',
    redirect: '/index'
  }
];

const RouterConfig = {
  /*
    设置mode为history时会开启HTML5的History路由模式.
    通过'/'配置路径,如不配置mode,默认将使用'#'来配置路径.
    开启History路由,生产环境服务端必须进行配置,将所有路由指向同一个html,或设置404页面为该html,
    否则刷新页面会出现404.
  */
  // mode: 'history' 需要服务端的支持
  // mode: 'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig)

/*

  vue-router提供的导航钩子:

  名称|触发时间
  -|-
  beforeEach|改变前
  afterEach|改变后

  参数|含义
  -|-
  to|即将要进入的目标的路由对象
  from|当前导航即将要离开的路由对象
  next|调用该方法后,才能进入下一个钩子

*/

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

// 路由配置end

// vuex配置
const store = new Vuex.Store({
  // 数据保存在vuex的state字段内
  state: {
    count: 0
  },
  // 组件内,来自store的数据只能读取,不能手动改变
  // 改变数据的唯一途径就是显示提交mutations
  mutations: {
    // mutations还可以接受第二个参数,可以是数字,字符串或对象
    increment (state, n) {
      n = n || 1;
      state.count += n;
    },
    decrease (state, params) {
      state.count -= params.count;
    }
  }
});
// vuex配置end

new Vue({
  el: '#app',
  router: router,
  /*
  
    箭头函数(=>)
    render: h => h(App)
    等价于:
      render: function (h) {
        return h(App); 
      }
    也等价于:
      render: h => {
        return h(App);
      }

  */
  render: h => h(App),
  // 在Vuex中任何组件,只要使用同一store的数据,当数据发生变化后,对应的组件也会立即更新.
  store: store     
});
