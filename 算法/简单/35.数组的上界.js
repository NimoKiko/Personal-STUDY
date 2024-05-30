/**
 * 请你编写代码实现一个数组方法，任何数组都可以调用 upperBound() 方法
 * 并返回给定目标数字的最后一个索引。
 * nums 是一个可能包含重复数字的按升序排序的数组。如果在数组中找不到目标数字，则返回-1。
 */
Array.prototype.upperBound = function (target) {
  let flag = false;
  let temp;
  for (let index in this) {
    if (this[index] > target && !flag) return -1;
    if (this[index] == target) {
      flag = true;
      temp = index;
    }
  }
  if (flag) {
    return temp;
  } else {
    return -1;
  }
  // console.log(this);
};
console.log([3, 4, 6, 6, 6, 6, 7].upperBound(1));
