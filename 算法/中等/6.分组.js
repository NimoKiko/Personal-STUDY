/**
 * 请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，
 * 它返回对该数组 分组后 的结果。
 * 数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，
 * 该数组中含有原数组中具有该键的所有项。
 * 提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。
 * 每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。
 * 请在不使用 lodash 的 _.groupBy 函数的前提下解决这个问题。
 */
Array.prototype.groupBy = function (fn) {
  let obj = {};
  this.forEach((element) => {
    let index = fn(element);
    obj[index] ? obj[index].push(element) : (obj[index] = [element]);
  });
  console.log(obj);
  return obj;
};

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fn = function (n) {
  return String(n > 5);
};
array.groupBy(fn);
