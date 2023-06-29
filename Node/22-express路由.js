/**
 * 路由：客户端的请求和服务器处理函数之间的映射关系
 * Express中路由由三部分组成。分别是：请求的类型、请求的URL地址、处理函数。
 * - app.METHOD(PATH,HANDLER)
 * eg:
 *
 */
// 1.导入express包
const express = require("express");
const send = require("send");
// 2.创建express服务器
const app = express();

// 4.路由：接收get请求
app.get("/", (req, res) => {
  res.send("get request");
});

// 接收post请求
app.post('/',(req,res) => {
  res.send('post request')
})

// 3.打开express服务器
app.listen(80, () => {
  console.log("express server running at http://192.168.1.128");
});
