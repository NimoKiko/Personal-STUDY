/**
 * 中间件的分类有五类
 */
const { log } = require("console");
const express = require("express");
const app = express();
// 1.应用级中间件：绑定在app上的中间件(app.use、app.get()、app.post()绑定的都属于应用级中间件)
app.use((req, res, next) => {
  log("this is a middleware function");
  next();
});

// 2.路由级中间件:绑定到express.Router()上的中间件
const router = express.Router();

router.use((req, res, next) => {
  log("this is a middleware binded in router");
  next();
});

// 3.错误级中间件：错误级中间件专门捕获项目中的异常错误
// 错误级中间件的function中必须有4个形参，按顺序为err,req,res,next
app.get("/err", (req, res) => {
  throw new Error("something is wrong with the server");
  res.send("this is Error Page");
});
// tips:错误级别中间件必须放在所有路由之后
const errMW = (err, req, res, next) => {
  log("发生了如下错误：" + err.message);
  res.send("Error!：" + err.message);
};
app.use(errMW);

// 4.Express内置中间件
// - express.static()：用于托管静态资源
// - express.json()：解析JSON格式的表单数据，尽在4.16.0+ 的版本之后能使用
// - express.urlencoded()：解析URL-encoded格式的请求数据，仅在4.16.0+ 的版本可使用
app.use(express.static("./案例/02-时钟web服务器案例"));

app.use(express.json()); // 没有解析的话就获取不到，打印一个空对象

app.use(express.urlencoded({ extended: false })); // 没有解析的话就获取不到，打印一个空对象
// 使用express.json()获取json格式的请求数据
app.post("/express/json", (req, res) => {
  log(req.body);
  res.send("okk");
});
//  使用express.urlencoded()获取url-encoded格式的请求体数据
app.post("/express/encoded", (req, res) => {
  log(req.body);
  res.send("okk");
});

// 5.第三方中间件：并非官方内置的，由第三方开发出来的中间件。
// 5.1以body-parser为例 : npm i body-parser
// 5.2引入body-parser包
const bodyParser = require("body-parser");
// 5.3注册中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/third/bodyParser", (req, res) => {
  log(req.body);
  res.send("okk");
});

app.listen(80, () => {
  log("192.168.1.128");
});
