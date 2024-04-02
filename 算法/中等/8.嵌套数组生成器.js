/**
 * 现给定一个整数的 多维数组 ，请你返回一个生成器对象，按照 中序遍历 的顺序逐个生成整数。
 * 多维数组 是一个递归数据结构，包含整数和其他 多维数组。
 * 中序遍历 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 中序遍历 。
 */
var inorderTraversal = function* (arr) {
  // flat() 参数为infinity时，无论多少层的嵌套数组都会扁平化
  arr = arr.flat(Infinity);
  if (arr.length == 0) return 0;
  for (let item of arr) {
    yield item;
  }
};

// const gen = inorderTraversal([1, [2, 3]]);
const gen = inorderTraversal([[[[[]]]]]);
console.log(gen.next().value);

// console.log(gen.next().value);
