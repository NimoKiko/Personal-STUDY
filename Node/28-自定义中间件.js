const { log } = require("console");
// 导入内置的queryString模块
const qs = require("querystring");
// 1.定义中间件
const express = require("express");

const app = express();

// 解析表单数据的中间件
const mw = (req, res, next) => {
  /**定义中间件具体的业务逻辑 */
  // 2.监听req的data事件
  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });
  // 3.监听req的end事件
  req.on("end", () => {
    // str中存放的是完整的请求体数据
    log(str);
    // TODO:把字符串格式的请求体数据转化为对象格式
    // 4.使用queryString模块解析请求体数据
    const body = qs.parse(str);
    log(body);
    // 5.将解析出来的数据对象挂载为req.body
    req.body = body;
    next();
  });
};

app.use(mw);

app.post("/selfDefine", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  log("192.168.1.128");
});

// 6.将自定义中间件封装为模块
