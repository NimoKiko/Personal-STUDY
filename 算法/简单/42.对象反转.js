/**
 * 给定一个对象 obj，返回一个反转的对象 invertedObj。
 * invertedObj 应该以 obj 的键作为值，以 obj 的值作为键。
 * 题目保证 obj 中的值仅为字符串。
 * 该函数应该处理重复值，也就是说，如果在 obj 中有多个具有相同值的键，
 * 那么 invertedObj 应该将该值映射到一个包含所有相应键的数组中。
 */
var invertObject = function (obj) {
  let newKey;
  let newVal;
  let invertObj = {};
  for (let key in obj) {
    newKey = obj[key];
    newVal = key;
    if (invertObj[newKey] === undefined) {
      invertObj[newKey] = newVal;
    } else {
      if (typeof invertObj[newKey] == "string") {
        invertObj[newKey] = [invertObj[newKey]];
      }
      invertObj[newKey].push(newVal);
    }
  }
  console.log(invertObj);
  return invertObj;
};

// let obj = { a: "1", b: "2", c: "3", d: "4" };
let obj = { a: "1", b: "2", c: "2", d: "4" };
// let obj = [1, 2, 3, 4];

invertObject(obj);
