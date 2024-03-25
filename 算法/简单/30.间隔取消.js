/**
 * 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，返回一个取消函数 cancelFn。
 * 在经过 cancelTimeMs 毫秒的延迟后，将调用返回的取消函数 cancelFn。
 * setTimeout(cancelFn, cancelTimeMs)
 * 函数 fn 应立即使用参数 args 调用，然后每隔 t 毫秒调用一次，直到在 cancelTimeMs 毫秒时调用 cancelFn。
 */
var cancellable = function (fn, args, t) {
  let timer = setInterval(() => fn(...args), t);
  return () => clearInterval(timer);
};
const fn = (x) => x * 2;
const args = [5];
const t = 100;
const cancelTimeMs = 1000;
let cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
