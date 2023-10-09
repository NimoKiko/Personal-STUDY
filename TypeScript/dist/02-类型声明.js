"use strict";
// 声明一个变量a 并设置类型未Number
let a;
// 不声明类型直接赋值时会默认类型
let b = 123; // 自动设置类型未 Number
// 创建函数的时候可以给参数设置类型，和返回值的类型
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
