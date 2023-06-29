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
