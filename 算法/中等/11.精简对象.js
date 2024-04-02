/**
 * 现给定一个对象或数组 obj，返回一个 精简对象 。
 * 精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。
 * 数组被视为索引作为键的对象。当 Boolean(value) 返回 false 时，值被视为 假 值。
 * 你可以假设 obj 是 JSON.parse 的输出结果。换句话说，它是有效的 JSON。
 */
var compactObject = function (obj) {
  // 判断obj是数组还是对象
  if (Array.isArray(obj)) {
    // console.log("数组");
    for (let i = 0; i < obj.length; i++) {
      if (!(obj[i] instanceof Array) && !(obj[i] instanceof Object)) {
        if (!Boolean(obj[i])) {
          obj.splice(i, 1);
          i--;
        }
      } else {
        compactObject(obj[i]);
      }
    }
  } else {
    // console.log("对象");
    for (let key in obj) {
      if (!(obj[key] instanceof Array) && !(obj[key] instanceof Object)) {
        if (!Boolean(obj[key])) {
          delete obj[key];
        }
      } else {
        compactObject(obj[key]);
      }
    }
  }
  return obj;
};

// let obj = { a: null, b: [false, 1] };
// let obj = [1, 2, 3, 4, 5];
let obj = [
  null,
  0,
  false,
  1,
  { a: null, b: [false, 1] },
  [0, null, 12, 3, undefined],
];
// compactObject(obj); // { b: [1] }
console.log(compactObject(obj));
