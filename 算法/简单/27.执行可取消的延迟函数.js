/**
 * 给定一个函数 fn ，一个参数数组 args 和一个以毫秒为单位的超时时间 t ，返回一个取消函数 cancelFn 。
 * 在 cancelTimeMs 的延迟后，返回的取消函数 cancelFn 将被调用。
 * setTimeout(cancelFn, cancelTimeMs
 * 最初，函数 fn 的执行应该延迟 t 毫秒。
 * 如果在 t 毫秒的延迟之前调用了函数 cancelFn，它应该取消 fn 的延迟执行。否则，如果在指定的延迟 t 内没有调用 cancelFn，则应执行 fn，并使用提供的 args 作为参数。
 */
var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => {
    console.log(fn(...args));
    fn(args);
  }, t);
  return function () {
    clearTimeout(timer);
  };
};
const fn = (x1, x2) => x1 * x2;
const t = 20;
let cancelFn = cancellable(fn, [2, 4], t);

const cancelTimeMs = 50;
setTimeout(cancelFn, cancelTimeMs);

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   }, 1000);
// }, 1000);
