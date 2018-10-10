// import home from './home.js';
// const routers = [].push(home);
import { resolve } from 'url';

const routers = [
  {
    path: '/home/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['@views/home/index'], resolve)
  },
  {
    path: '/products/index',
    meta: {
      title: '商品列表'
    },
    component: (resolve) => require(['@views/products/index'], resolve)
  },
  {
    path: '/cart/show',
    meta: {
      title: '购物车'
    },
    component: (resolve) => require(['@views/cart/show'], resolve)
  },
  {
    path: '/home/development',
    meta: {
      title: '开发者页面'
    },
    component: (resolve) => require(['@views/home/development'], resolve)
  },
  {
    path: '*',
    // redirect: '/home/index'
    redirect: '/home/development'
  }
];


export default routers;