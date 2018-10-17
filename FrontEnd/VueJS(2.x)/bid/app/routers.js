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
    path: '*',
    redirect: '/projects/new'
  }
];


export default routers;