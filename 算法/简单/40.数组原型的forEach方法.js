/**
 * 编写一个数组方法 forEach，使其可以在任何数组上调用 array.forEach(callback, context) 方法，
 * 它将在数组的每个元素上执行回调函数。forEach 方法不应该返回任何内容。
 * 回调函数 callback 接受以下参数：
 * value - 表示数组中当前正在处理的元素的值。
 * index - 表示数组中当前正在处理的元素的索引。
 * array - 表示数组本身，在回调函数内部可以访问整个数组。
 * 上下文 context 应该是作为函数上下文参数传递给回调函数 callback 的对象
 * 确保回调函数 callback 内部的 this 关键字引用此上下文对象。
 * 尝试在不使用内置数组方法的情况下实现这个方法。
 */
Array.prototype.forEach = function (callback, context) {
  for (let index in this) {
    callback.call(context, this[index], index * 1, this);
    // callback(this[index], index, this);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callback = (val, i, arr) => {
  arr[i] = val * (arr[i + 1] || 1);
};
const context = { context: 16 };
arr.forEach(callback, context);
console.log(arr);
