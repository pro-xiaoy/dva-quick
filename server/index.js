var http = require('http');
var hostName = '127.0.0.1';

var port = 8008;

var server = http.createServer((req, res) => {
  console.log('进入server+++++++')
  console.log('1+++', req);
  console.log('2+++', res)
  res.setHeader('Content-Type','text/plain');
  res.end("hello nodejs");
})


server.listen(port, hostName, () => {
  console.log(`服务器运行在http://${hostName}:${port}`)
})