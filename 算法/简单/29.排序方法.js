/**
 * 给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。sortedArr 必须按照 fn 的输出值 升序 排序。
 * 你可以假设对于给定的数组，fn 不会返回重复的数字。
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
// let arr = [4, 6, 5, 8, 2, 1];
let arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn = (x) => x.x;

sortBy(arr, fn);
