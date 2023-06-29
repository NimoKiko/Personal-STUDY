const express = require("express");

const router = express.Router();

// 挂载路由
router.get("/get", (req, res) => {
  // 通过req.query获取客户端发送过来的数据
  const query = req.query;
  // 调用res.send()向客户端响应处理的结果
  res.send({
    status: 200, //200：请求成功
    msg: "GET SUCCESS", //状态描述
    data: query, // 响应的数据
  });
  /**
   * CORS请求头：
   * - 1.Access-Control-Allow-Origin:指定允许访问资源的外部URL
   *  res.setHeader('Access-Control-Allow-Origin','xxxx(url)' | '*')
   * 
   * - 2.Access-Control-Allow-Headers:声明允许客户端向服务端发送的请求头
   *  res.setHeader('Access-Control-Allow-Headers','允许的请求头',...)
   * 
   * - 3.Access-Control-Allow-Methods:声明允许客户端向服务端发起的请求方式
   *  res.setHeader('Access-Control-Allow-Methods','请求方式(PUT,DELETE...)')
   */
});

router.post("/post", (req, res) => {
  const body = req.body;
  // 调用res.send()向客户端响应处理的结果
  res.send({
    status: 200,
    msg: "POST SUCCESS",
    data: body,
  });
});
module.exports = router;

/**
 * CORS请求的分类:
 * - 1.简单请求
 *    - 请求方式必须是GET,POST,HEAD三者之一
 *    - HTTP的头部信息只有：application/x-www-form-urlencoded、multipart/form-data、text/plain
 * 
 * - 2.预检请求(只要符合以下任一条件都属于预检请求)
 *    - 请求方式为GET、POST、HEAD之外的Method类型
 *    - 请求头中包含了自定义的头部请求
 *    - 向服务器发送了application/json格式的数据
 * 在浏览器与服务器正式通讯之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求。
 * 服务器发送了成功响应请求后才会发送真正的请求，且携带真实数据。
 */