// 导入express
const express = require("express");
// 导入router
const router = express.Router();
// 导入数据库
const db = require("./mysql/mysql");

/**
 * 获取用户信息接口
 */
router.get("/user/info", (req, res) => {
  // console.log(req);
  // 发送用户信息
  res.send({
    state: 1,
    msg: "获取用户信息成功",
    data: req.auth,
  });
});

module.exports = router;
