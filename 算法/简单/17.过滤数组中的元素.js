// var filter = function (arr, fn) {
//   return arr.reduce((pre, cur, index) => {
//     console.log(pre, cur);
//     if (fn(cur)) {
//       pre.push(cur);
//     }
//     return pre;
//   }, []);
// };
var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

let arr = [0, 10, 20, 30];

fn = function greaterThan10(num) {
  return num > 10;
};
const newArray = filter(arr, fn);

console.log(newArray);
