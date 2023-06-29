const express = require('express')

const app = express()

// 调用express.static()方法，对外提供静态资源
app.use('/use',express.static('./案例/02-时钟web服务器案例'))

app.listen(80, (req,res) => {
  console.log("express server running at http://192.168.1.128");
})