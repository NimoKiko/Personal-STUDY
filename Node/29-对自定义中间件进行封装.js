const qs = require("querystring");
const { log } = require("console");

// 解析表单数据的中间件
const bodyParser = (req, res, next) => {
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

module.exports = bodyParser