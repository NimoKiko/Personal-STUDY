/**
 * 请你编写一个函数，它接受一个异步函数 fn 和一个以毫秒为单位的时间 t。
 * 它应根据限时函数返回一个有 限时 效果的函数。函数 fn 接受提供给 限时 函数的参数。
 * 限时 函数应遵循以下规则：
 * 如果 fn 在 t 毫秒的时间限制内完成，限时 函数应返回结果。
 * 如果 fn 的执行超过时间限制，限时 函数应拒绝并返回字符串 "Time Limit Exceeded" 。
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let timeLimitPromise = new Promise((resolve, reject) => {
      timer = setTimeout(reject, t, "Time Limit Exceeded");
    });
    let functionPromise = fn(...args);
    return await Promise.race([functionPromise, timeLimitPromise]);
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 200));
  return n * n;
};

let fun = timeLimit(fn, 100);
fun(5)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
