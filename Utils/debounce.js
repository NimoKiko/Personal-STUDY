/**
 * 
 */
function debounce(fun, delay) {
  let timer;
  return function() {
    // 如果定时器存在，就清除定时器
    if(timer){
      clearTimeout(timer);
    }
    let arg = arguments;
    let context = this;
    timer = setTimeout(() => {
      fun.apply(context, arg);
    }, delay);
  }
}