var reduce = function (nums, fn, init) {
  // 把init插入数组第一项
  if (init) {
    nums.unshift(init);
  }
  // 先判断数组中是否有超过两个值
  if (nums.length > 1) {
    // 把数组第一第二项相加
    let newVal = fn(nums[0], nums[1]);
    // 删除数组第一第二项，然后把新值加入数组的第一项
    nums.splice(0, 2, newVal);
    // 递归调用
    reduce(nums, fn);

    return nums[0];
  } else {
    return init;
  }
};

let nums = [0];

let init = 25;

let fn = function (acc, cur) {
  return 0;
};
console.log(reduce(nums, fn, init));
