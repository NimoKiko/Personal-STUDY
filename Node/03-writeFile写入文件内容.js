// 导入fs文件系统模块
const fs = require('fs');

// 调用fs.writeFile()
// 参数1：表示文件的存放路径
// 参数2：要写入的内容
// 参数3：回调函数
fs.writeFile('./file/3.txt','this is a message',function(err) {
    // 如果文件写入成功，err--> null
    // console.log(err);
    // 如果文件写入失败，err--> 错误对象
    if(err) {
        return console.log("文件写入失败:"+ err.message);
    }
    return console.log("文件写入成功!");
})