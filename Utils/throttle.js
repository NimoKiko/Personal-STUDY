/**
 * 节流函数
 */
function throttle(fun, delay) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    if(timer) {
      return;
    }
    timer = setTimeout(() => {
      fun.apply(context, args);
      timer = null;
    },delay)
  }
}
