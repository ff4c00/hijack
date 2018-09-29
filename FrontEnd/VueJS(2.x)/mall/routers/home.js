const home = [
  {
    path: '/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../views/home/index.vue'], resolve)
  }
]

export default home;