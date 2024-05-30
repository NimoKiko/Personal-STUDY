/**
 * 请你编写一个函数，返回一个 无穷方法对象 。
 * 无穷方法对象 被定义为一个对象，它允许您调用任何方法，并始终返回方法的名称。
 * 例如，如果执行 obj.abc123() ，它将返回 "abc123" 。
 */
var createInfiniteObject = function () {
  return new Proxy(
    {},
    {
      get(target, p) {
        console.log(target, p);
        return () => p;
      },
    }
  );
};
const obj = createInfiniteObject();
obj["abc123"]();
// obj();
// console.log(obj["abc123"]());
