/**
 * 泛型:
 *  - 在定义函数或类的时候，如果遇到类型不明确就可以使用泛型
 */
(function () {
  function fn<T>(a: T): T {
    return a;
  }
  // 可以直接调用具有泛型的函数
  fn(10); // 不指定泛型，可以自动对类型进行推断
  fn<string>("hello"); // 可以指定泛型

  // 可以创建多个泛型
  function fn2<T, K>(a: T, b: K): T {
    return a;
  }
  fn2<string, number>("hello", 123);

  // 泛型可以继承指定的接口
  interface inter {
    length: number;
  }
  function fn3<T extends inter>(a: T): number {
    return a.length;
  }
  fn3('123')
})();
