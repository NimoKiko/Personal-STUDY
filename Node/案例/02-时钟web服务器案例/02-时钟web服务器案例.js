const http = require("http");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

// 创建服务器
const server = http.createServer();

server.on("request", (req, res) => {
  // 获取路由
  const url = req.url;
  let reqPtah = ''

  if(url === '/') {
    reqPtah = path.join(__dirname,'/clock.html')
  } else {
    reqPtah = path.join(__dirname,url)
  }

    // 读取文件
    fs.readFile(reqPtah, "utf8", (err, data) => {
      if (err) {
        return res.end('404 Not Found');
      }
      res.end(data);
    });
});

server.listen(80, () => {
  log("server running at localhost");
});
