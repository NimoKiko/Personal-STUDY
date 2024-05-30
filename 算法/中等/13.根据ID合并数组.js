/**
 * 现给定两个数组 arr1 和 arr2 ，返回一个新的数组 joinedArray 。
 * 两个输入数组中的每个对象都包含一个 id 字段。
 * joinedArray 是一个通过 id 将 arr1 和 arr2 连接而成的数组。
 * joinedArray 的长度应为唯一值 id 的长度。返回的数组应按 id 升序 排序。
 * 如果一个 id 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。
 * 如果两个对象共享一个 id ，则它们的属性应进行合并：
 * 如果一个键只存在于一个对象中，则该键值对应该包含在对象中。
 * 如果一个键在两个对象中都包含，则 arr2 中的值应覆盖 arr1 中的值。
 */
var join = function (arr1, arr2) {
  let arr = arr1.concat(arr2);
  let res = [];
  arr.sort((a, b) => {
    return a.id - b.id;
  });
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].id !== arr[i + 1].id) {
      res.push(arr[i]);
      let j = i + 1;
      if (j == arr.length - 1) res.push(arr[i + 1]);
      continue;
    } else {
      res.push(arr[i]);
      for (let key in arr[i + 1]) {
        res[res.length - 1][key] = arr[i + 1][key];
      }
      i++;
      let j = i + 1;
      if (j == arr.length - 1) res.push(arr[i + 1]);
    }
  }
  // console.log(res);
  return res;
};

// let arr1 = [
//   { id: 1, x: 2, y: 3 },
//   { id: 2, x: 3, y: 6, z: 100 },
//   { id: 4, x: 32, y: 62, z: 1002 },
// ];
// let arr2 = [
//   { id: 2, x: 10, y: 20 },
//   { id: 3, x: 0, y: 0 },
//   { id: 4, x: 22, y: 1 },
// ];

// let arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
// let arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
// let arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];
// let arr2 = [{ id: 3, x: 5 }];
let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

join(arr1, arr2);
