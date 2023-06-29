/**
 * 导入的结果永远以module.exports指向的对象为准
 * 如果使用module.exports = {} 的形式导出那么在这行代码前面的都会找不到
 */
module.exports = {
  username: "kitty",
  test: function(params) {
    console.log('this is a test');
  }
};



