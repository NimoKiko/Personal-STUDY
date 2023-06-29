/**
 * 基于Node.js平台，快速、开放、极简的web开发框架
 * 安装：npm i express@4.17.1
 */
// 导入express
const express = require("express");
// 创建web服务器
const app = express();

// 响应客户端的get请求
app.get("/user/:id", (req, res) => {
  /*处理函数 */
  // 获取客户端发送过来的参数 req.query
  let val1 = req.query
  // 获取客户端发送到的动态参数
  let val2 = req.params
  // console.log(req.query);
  // 向客户端发送
  res.send(val1,val2);
});

// 响应客户端的post请求
app.post("/user", (req, res) => {
  /*处理函数 */
  // 向客户端发送
  res.send("请求成功");
});

// 启动web服务器
app.listen(80, () => {
  console.log("express server running at http://192.168.1.128");
});
