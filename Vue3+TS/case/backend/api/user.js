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
  // 发送用户信息
  res.send(req.auth);
});

module.exports = router;
