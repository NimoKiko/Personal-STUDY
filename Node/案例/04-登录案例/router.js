// 导入express
const express = require("express");
// 创建路由
const router = express.Router();

// api挂载路由
// 登录接口
router.post("/login", (req, res) => {
  if (req.body.account == "admin" && req.body.password == "123") {
    req.session.isLogin = true;
    req.session.userInfo = req.body;
    return res.send({
      state: 1,
      msg: "登录成功",
    });
  } else {
    return res.send({
      state: 0,
      msg: "账号密码错误",
    });
  }
});
// 退出登录接口
router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.send({
    state: 0,
    msg: "退出登录成功！",
  });
});
// 判断用户是否登录
router.get("/username", (req, res) => {
  if (req.session.isLogin) {
    return res.send({
      state: 1,
      msg: "登录成功",
    });
  } else {
    return res.send({
      state: 0,
      msg: "请先登录",
    });
  }
});

module.exports = router;
