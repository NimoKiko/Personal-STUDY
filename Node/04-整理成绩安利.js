const fs = require("fs");

let arr = [];
let newStr = "";
fs.readFile("./file/成绩.txt", "utf8", function (err, res) {
  if (err) {
    return console.log("内容读取失败");
  }
  // console.log(res);
  arr = res.split(" ");
  for (let item of arr) {
    newStr += item.replace("=", ":") + "\n";
  }

  fs.writeFile("./file/成绩-ok.txt", newStr, function (err) {
    if (err) {
      return console.log("写入失败:" + err.message);
    }
    return console.log("success");
  });
});
