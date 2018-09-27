function zh_error(error){
  let message = `
消息主体:${error.error}
异常编码:${error.code}
请求域名:${error.hostname} 
端口号:${error.port}
  `
  return message;
};


const http = require('http');
const request = require('request');

const localHost = '127.0.0.1';
const apiPort = 8010;
const imgPort = 8011;

const targetApiDoMain = 'https://news-at.zhihu.com/api/4';

// https://news-at.zhihu.com/api/4/news/9696107 
const apiServer = http.createServer((req, res) => {
  const options = {
    url: targetApiDoMain+req.url
  };
  function callBack (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 设置编码类型(解决中文乱码问题)
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 设置所有域允许跨域
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(body);
      // console.log("\n\n\n"+(options.url)+"接口返回内容:\n"+body)
    }else{
      console.log("文章详情获取异常["+targetApiDoMain+req.url+"]:"+error);
      // console.log(zh_error(error));
    };
  };
  request.get(options, callBack);
});

// 端口监听
apiServer.listen(apiPort, localHost, () => {
  console.log(`http://${localHost}:${apiPort}代理[Api]运行中.`);
});

const imgServer = http.createServer((req,res) => {
  const url = req.url.split('/img/')[1];
  const options = {
    url: url,
    encoding: null
  };

  function callBack(error, response, body) {
    if (!error && response.statusCode === 200) {
      const contentType = response.headers['content-type'];
      res.setHeader('content-Type', contentType);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(body);
    }else{
      console.log(error)
    };
  };

  request.get(options, callBack);

});

imgServer.listen(imgPort, localHost, () => {
  console.log(`http://${localHost}:${imgPort}代理[图片]运行中.`);
});

// 启动代理服务: node proxy.js
