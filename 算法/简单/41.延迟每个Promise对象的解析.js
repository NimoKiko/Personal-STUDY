/**
 * 给定一个函数数组 functions 和一个数字 ms，返回一个新的函数数组。
 * functions 是一个返回 Promise 对象的函数数组。
 * ms 表示延迟的时间，以毫秒为单位。
 * 它决定了在新数组中的每个函数返回的 Promise 在解析之前等待的时间。
 * 新数组中的每个函数应该返回一个 Promise 对象，
 * 在延迟了 ms 毫秒后解析，保持原始 functions 数组中的顺序。
 * delayAll 函数应确保从 functions 中的每个 Promise 都被延迟执行
 * 形成返回延迟的 Promise 的函数的新数组。
 */
var delayAll = function (functions, ms) {
  let funArr = [];
  for (let fun of functions) {
    let p = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          fun().then(resolve).catch(resolve);
        }, ms);
      });
    };
    funArr.push(p);
  }
  return funArr;
};
let functions = [
  () => new Promise((resolve) => setTimeout(resolve, 1000)),
  () => new Promise((resolve) => setTimeout(resolve, 2000)),
];
let ms = 1000;

let p = delayAll(functions, ms);
console.log(p);
for (let fun of p) {
  fun().then((res) => {
    console.log(res);
  });
}
