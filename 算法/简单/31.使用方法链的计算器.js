/**
 * 设计一个类 Calculator 。该类应提供加法、减法、乘法、除法和乘方等数学运算功能。同时，它还应支持连续操作的方法链式调用。Calculator 类的构造函数应接受一个数字作为 result 的初始值。
 * 你的 Calculator 类应包含以下方法：
 * add - 将给定的数字 value 与 result 相加，并返回更新后的 Calculator 对象。
 * subtract - 从 result 中减去给定的数字 value ，并返回更新后的 Calculator 对象。
 * multiply - 将 result 乘以给定的数字 value ，并返回更新后的 Calculator 对象。
 * divide - 将 result 除以给定的数字 value ，并返回更新后的 Calculator 对象。如果传入的值为 0 ，则抛出错误 "Division by zero is not allowed" 。
 * power - 计算 result 的幂，指数为给定的数字 value ，并返回更新后的 Calculator 对象。（result = result ^ value ）
 * getResult - 返回 result 的值。
 * 结果与实际结果相差在 10-5 范围内的解被认为是正确的。
 */
class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    let newVal = this.value + value;
    return new Calculator(newVal);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    let newVal = this.value - value;
    return new Calculator(newVal);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    let newVal = this.value * value;
    return new Calculator(newVal);
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0) {
      throw new Error("Division by zero is not allowed");
    } else {
      let newVal = this.value / value;
      return new Calculator(newVal);
    }
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    let newVal = Math.pow(this.value, value);
    return new Calculator(newVal);
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}
const calculator = new Calculator(2);
console.log(calculator.multiply(5).power(2).getResult());
