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

const targetApiDoMain = 'https://new-at.zhihu.com/api/4/';
const targetImgDoMain = 'https://pic1.zhimg.com/';

const apiServer = http.createServer((req, res) => {
  const options = {
    url: targetApiDoMain+req.url
  };
  function callBack (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 设置编码类型(解决中文乱码问题)
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 设置所有域允许跨域
      ses.setHeader('Access-Control-Allow-Origin', '*');
      res.end(body);
    }else{
      console.log(error);
      console.log(zh_error(error));
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
      ses.setHeader('Access-Control-Allow-Origin', '*');
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
