const { log } = require("console");
// 1.导入http模块
const http = require("http");
// 创建web服务器实例
const server = http.createServer();
// 为服务器绑定request事件，监听客户端请求
server.on("request", (req, res) => {
  log("someone visite my web server");
});
// 启动服务器
server.listen("80", () => {
  log("server running at localhost");
});
