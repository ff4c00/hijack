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
    path: '/home/development',
    meta: {
      title: '开发者页面'
    },
    component: (resolve) => require(['@views/home/development'], resolve)
  },
  {
    path: '*',
    redirect: '/home/index'
  }
];


export default routers;