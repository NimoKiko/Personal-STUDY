/**
 * 编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
 * 返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
 * 请你在不使用内置方法 Array.map 的前提下解决这个问题。
 *
 */
var map = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

const fn = function plusone(n) {
  return n + 1;
};
const arr = [1, 2, 3, 4, 5];

const newArray = map(arr, fn);

console.log(newArray);
