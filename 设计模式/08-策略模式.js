/**
 * 策略模式
 *  - 一种对象行为模式，通过对算法的封装把使用算法的责任和算法的实现分隔开。
 *  - 定义算法，封装算法。
 *  - 主要解决在有多种算法相似的情况下，使用if...else带来的复杂度额难以维护性
 *
 */

let stratagy = {
  S: (salary) => {
    return salary * 6;
  },
  A: (salary) => {
    return salary * 4;
  },
  B: (salary) => {
    return salary * 2;
  },
  C: (salary) => {
    return salary * 1;
  },
};

function calBonus(level, salary) {
  return stratagy[level](salary);
}

console.log(calBonus("S",10000));
