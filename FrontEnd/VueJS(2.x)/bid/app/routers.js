import { resolve } from 'url';

const routers = [
  {
    path: '/projects/new',
    meta: {
      title: '填写竞价'
    },
    component: (resolve) => require(['@views/projects/new.vue'], resolve)
  },
  {
    path: '/projects/index',
    meta: {
      title: '竞价列表'
    },
    component: (resolve) => require(['@views/projects/index.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/projects/new'
  }
];


export default routers;