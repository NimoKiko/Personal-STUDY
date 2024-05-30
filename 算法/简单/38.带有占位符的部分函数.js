/**
 * 给定函数 fn 和数组 args，返回一个函数 partialFn。
 * args 中的占位符 "_" 需要用 restArgs 中索引从 0 开始的值替换。
 * restArgs 中剩余的值则添加到 args 的末尾。
 * partialFn 应该返回 fn 的结果。fn 应该使用修改后的 args 的元素作为单独的参数调用。
 */
var partial = function (fn, args) {
  return function (...restArgs) {
    let restArr = [];
    for (let item of restArgs[0]) {
      restArr.push(item);
    }
    for (let index in args) {
      if (args[index] === "_") {
        let replace = restArr[0];
        args.splice(index, 1, replace);
        restArr.splice(0, 1);
      }
    }
    if (restArr.length > 0) {
      for (let item of restArr) {
        args.push(item);
      }
    }
    return fn(...args);
  };
};
// let args = ["_", 5];
// let restArgs = [5, 20];
// let fn = (a, b, c) => b + a - c;

// let args = [2, 4, 6];
// let restArgs = [8, 10];
// let fn = (...args) => args;

let args = [1, 2, "_", 4, "_", 6];
let restArgs = [3, 5];
let fn = (...args) => args;

const partialFn = partial(fn, args);
let res = partialFn(restArgs);
console.log(res);
