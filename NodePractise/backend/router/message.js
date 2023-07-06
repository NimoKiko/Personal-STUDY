const express = require("express");

const db = require("./mysql/mysql");

const router = express.Router();

router.get("/message/getPo", (req, res) => {
  let username = req.auth.username;

  let sql = "select * from blog where username=?";

  db.query(sql, [username], (err, result) => {
    if (err) return res.send({ state: 0, msg: err.message });

    res.send({
      state: 1,
      data: result,
    });
  });
});

module.exports = router;
