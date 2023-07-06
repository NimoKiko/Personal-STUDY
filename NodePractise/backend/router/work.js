const express = require("express");

const router = express.Router();

const db = require("./mysql/mysql");

router.post("/work/postContent", (req, res) => {
  let params = req.body;

  console.log(params);
  let username = req.auth.username;

  let sql1 = "insert into blog(username,title,content) values(?,?,?) ";

  db.query(sql1, [username, params.title, params.content], (err, result) => {
    if (err) {
      return res.send(err.message);
    } else {
      return res.send({
        msg: "添加成功",
        state: 1,
      });
    }
  });
});

module.exports = router;
