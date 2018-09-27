'use strict';

import axios from 'axios';

const Util = {
  imgPath: 'http://127.0.0.1:8011/img/',
  apiPath: 'http://127.0.0.1:8010/',
  // development: false
  development: true
};

Util.ajax = axios.create({
  baseURL: Util.apiPath,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*'
  },
});

// 响应拦截器
Util.ajax.interceptors.response.use( res => {
  return res.data;
});

// 获取今天的时间戳
Util.getTodayTime = function () {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
};

// 获取前一天的日期
Util.preDay = function (timestamp = (new Date()).getTime()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth()) + 1) : (date.getMonth() + 1);
  const day = (date.getDate() < 10) ? ('0' + date.getDate()) : (date.getDate());
  return year + month + day;
};


export default Util;