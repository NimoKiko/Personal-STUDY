const { log } = require("console");
const customBodyParser = require('./29-对自定义中间件进行封装')
// 1.定义中间件
const express = require("express");

const app = express();

app.use(customBodyParser);

app.post("/selfDefine", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  log("192.168.1.128");
});
