const express = require("express");

const router = express.Router();

router.get("/user/getUserInfo", (req, res) => {
  res.send(req.auth);
});

module.exports = router;
