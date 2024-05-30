/**
 * 给定两个对象 o1 和 o2 ，请你检查它们是否 完全相等 。
 * 对于两个 完全相等 的对象，必须满足以下条件：
 * 如果两个值都是原始类型，它们通过了 === 等式检查，则认为这两个值是 完全相等 的。
 * 如果两个值都是数组，在它们具有相同元素且顺序相同，并且每个元素在这些条件下也 完全相等 时，
 * 认为这两个值是 完全相等 的。
 * 如果两个值都是对象，在它们具有相同键，并且每个键关联的值在这些条件下也 完全相等 时，
 * 认为这两个值是 完全相等 的。
 * 你可以假设这两个对象都是 JSON.parse 的输出。换句话说，它们是有效的 JSON 。
 * 请你在不使用 lodash 的 _.isEqual() 函数的前提下解决这个问题。
 */
var areDeeplyEqual = function (o1, o2) {
  // 判断基础类型
  if (typeof o1 !== "object" && typeof o2 !== "object") {
    if (o1 === o2) {
      return true;
    } else {
      return false;
    }
  } else if (
    o1 instanceof Object &&
    !(o1 instanceof Array) &&
    o2 instanceof Object &&
    !(o2 instanceof Array)
  ) {
    // 判断object类型
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    } else {
      let flag = true;
      for (let key in o1) {
        if (o2[key] !== undefined && o2[key] === o1[key]) {
          continue;
        } else {
          if (
            o1[key] instanceof Object ||
            o2[key] instanceof Object ||
            o1[key] instanceof Array ||
            o2[key] instanceof Array
          ) {
            flag = areDeeplyEqual(o1[key], o2[key]);
            if (!flag) return false;
          } else {
            return false;
          }
        }
      }
      return flag;
    }
  } else if (o1 instanceof Array && o2 instanceof Array) {
    // console.log("error");
    if (o1.length !== o2.length) {
      return false;
    } else {
      let flag = true;
      for (let index in o1) {
        if (o1[index] === o2[index]) {
          continue;
        } else {
          if (
            o1[index] instanceof Object ||
            o2[index] instanceof Object ||
            o1[index] instanceof Array ||
            o2[index] instanceof Array
          ) {
            flag = areDeeplyEqual(o1[index], o2[index]);
            if (!flag) return false;
          } else {
            return false;
          }
        }
      }
      return flag;
    }
  } else {
    if (o1 == null && o2 == null) return true;
    return false;
  }
};
// let o1 = 1;
// let o2 = true;

// let o1 = { x: 1, L: [1, 2, 3] };
// let o2 = { x: 1, L: [1, 2, 3] };

// let o1 = { 0: 1 };
// let o2 = [1];

let o1 = null;
let o2 = null;

console.log(areDeeplyEqual(o1, o2));
