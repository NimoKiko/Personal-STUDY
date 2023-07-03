## 安装
```
npm install nimokiko-tools
```

## 导入
```js
const nimokiko = require('nimokiko-tools')
```

## 格式化时间
```js
// 调用dateFormat()对时间进行格式化
const dtStr = nimokiko.dateFormat(new Date());

console.log(dtStr);
```
## 转义HTML中的特殊字符
```js
//待转换的html字符串
const htmlStr = "<h1 style='color:red'> this is a h1 label <span>123&nbsp;</span></h1>"
//调用htmlEscape()方法进行转换
const str = nimokiko.htmlEscape(htmlStr);
// 转换的结果
console.log(str); 
//转换的结果：&lt;h1 style='color:red'&gt; this is a h1 label &lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原HTML中的特殊字符
```js
// 待转换的字符串
const htmlStr = "&lt;h1 style='color:red'&gt; this is a h1 label &lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;"
// 调用htmlUnescape()方法还原转义字符
const str = nimokiko.htmlUnescape(htmlStr);
// 转换的结果
console.log(str);
// <h1 style='color:red'> this is a h1 label <span>123&nbsp;</span></h1>
```

## 开源协议
ISC

## npm上传 删除包
```shell
# 在终端登录npm
npm login 
# 上传npm包的命令
npm publish
# 删除npm包的命令
npm unpublish
```