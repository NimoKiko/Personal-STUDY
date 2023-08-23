/**
 * 装饰器模式
 *  - 对已有功能进行扩展
 *  - 在保证源代码不改动的情况下进行扩展
 *  -
 *
 */
/**
 * apply()方法
 */
// let obj1 = {
//   a: "1",
//   use: function () {
//     console.log(this);
//   },
// };
// let obj2 = {
//   a: "2",
// };

// obj1.use.apply(obj2);

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

Function.prototype.before = function (beforeFn) {
  let _this = this;
  return function () {
    // 执行前置函数
    beforeFn.apply(this, arguments);
    // 执行原函数
    return _this.apply(this, arguments);
  };
};

function test() {
  console.log("1111111");
}

let test1 = test.before(function () {
  console.log("000000");
});

test1();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// class Circle{
//   draw(){
//     console.log('画了一个圆');
//   }
// }

// class Decorator{
//   constructor(circle) {
//     this.circle = circle
//   }

//   draw() {
//     this.circle.draw();
//     this.setBorder()
//   }

//   setBorder() {
//     console.log('设置了一个边框');
//   }
// }

// const circle = new Circle()
// // circle.draw()

// const decorator = new Decorator(circle)

// decorator.draw()

/**
 * 装饰器模式 ES7语法 使用 @ 快速实现装饰器
 *
 */
// function sayHi(str) {
//   console.log(str);
// }
// @sayHi
// class Button {}

// const x = new Button()

// x.sayHi("hello")
