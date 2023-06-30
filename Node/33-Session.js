/**
 * Cookie:存储在浏览器中不超过4KB的字符串。
 *        它由一个名称、一个值和其他几个用于控制Cookie有效期，安全性，适用范围的可选属性组成。
 * tips:不同域名下的Cookie是相互独立的。
 */
/**
 * 安装Session中间件：npm i express-session
 * 注册：app.use()
 */
const { log } = require("console");
const express = require("express");
// 1.导入express-session中间件
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: false }));
// 2.注册中间件,并配置
app.use(
  session({
    secret: "sessiontest",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/api/login", (req, res) => {
  // 判断用户名密码是否正确
  if (req.body.username !== "admin" && req.body.password !== "000000") {
    return res.send({ status: 0, msg: "登陆失败" });
  } else {
    // 登陆成功后在session中保存用户信息和登陆状态
    // 只有成功配置了express-session之后才能使用req.session
    req.session.userInfo = req.body; // 用户信息
    req.session.isLogin = true; // 登陆状态
    res.send({
      status: 1,
      msg: "登录成功",
    });
  }
});

app.get("/api/userInfo", (req, res) => {
  // 判断登陆状态
  if (!req.session.isLogin) {
    return res.send({ status: 0, msg: "fail" });
  } else {
    res.send({
      status: 1,
      msg: "success",
      userInfo: req.session.userInfo,
    });
  }
});

app.get("/api/logout", (req, res) => {
  // 清楚session
  req.session.destroy();
  // 返回信息
  res.send({
    status: 0,
    msg: "退出成功",
  });
});

app.listen(80, (req, res) => {
  log("192.168.1.128");
});
