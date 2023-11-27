"use strict";
/**
 * 泛型:
 *  - 在定义函数或类的时候，如果遇到类型不明确就可以使用泛型
 */
(function () {
    function fn(a) {
        return a;
    }
    // 可以直接调用具有泛型的函数
    fn(10); // 不指定泛型，可以自动对类型进行推断
    fn("hello"); // 可以指定泛型
    // 可以创建多个泛型
    function fn2(a, b) {
        return a;
    }
    fn2("hello", 123);
    function fn3(a) {
        return a.length;
    }
    fn3('123');
})();
