// 1.导入fs模块
const fs = require('fs')

// 2.调用fs.readFile()
// 参数1：文件路径
// 参数2：读取文件采用编码格式，一般默认utf-8
// 参数3：回调函数，拿到读取失败或成功的结果
fs.readFile('./file/111.txt','utf8',function(err, data) {
    if(err) {
        return console.log('read file faile: '+ err.message);
    }
    console.log('read file success: ' + data);
})