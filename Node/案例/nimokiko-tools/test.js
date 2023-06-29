const nimokiko = require("./index")

// 格式化时间的功能
const dtStr = nimokiko.dateFormat(new Date());

console.log(dtStr);

const htmlStr = "<h1 style='color:red'> this is a h1 label <span>123&nbsp;</span></h1>"

const str = nimokiko.htmlEscape(htmlStr);

console.log(str);

const htmlStr2 = "&lt;h1 style='color:red'&gt; this is a h1 label &lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;"

const str2 = nimokiko.htmlUnescape(htmlStr2);

console.log(str2);