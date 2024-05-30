/**
 * 给定两个数组 keysArr 和 valuesArr，返回一个新的对象 obj。
 * obj 中的每个键值对都来自 keysArr[i] 和 valuesArr[i]。
 * 如果前面的索引中存在重复的键，则应该跳过该键值对。换句话说，只有第一次出现的键会被添加到对象中。
 * 如果键不是字符串，则应通过调用 String() 方法将其转换为字符串。
 */
var createObject = function (keysArr, valuesArr) {
  for (let index in keysArr) {
    keysArr[index] = String(keysArr[index]);
  }
  let obj = {};
  for (let index in keysArr) {
    if (String(obj[keysArr[index]]) === "undefined") {
      obj[keysArr[index]] = valuesArr[index];
    }
  }
  // console.log(obj);
  return obj;
};
let keysArr = [91, 47, "", 23, "", 24, 0];
let valuesArr = [
  0,
  [46, false, "l", 72, 4, "v", true],
  false,
  21,
  true,
  [26, false, 33, 52, 0, 98, "y"],
  "p",
];
createObject(keysArr, valuesArr);
// createObject([], []);
