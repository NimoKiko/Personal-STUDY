const { log } = require("console");
// 1.导入http模块
const http = require("http");
// 创建web服务器实例
const server = http.createServer();
// 为服务器绑定request事件，监听客户端请求
// req是请求对象，包含了客户端相关的数据和属性
server.on("request", (req, res) => {
    const url = req.url

    const method = req.method
  
    const str =  `Your request url is ${url}, and your request method is ${method}.`

    // 设置响应头
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 调用res.end()对客户端进行响应
    res.end(str);
    
});
// 启动服务器
server.listen(80, () => {
  log("server running at localhost");
});
