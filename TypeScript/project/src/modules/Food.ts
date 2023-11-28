/**
 *食物类
 *
 * @class Food
 */
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement;
  /**
   * Creates an instance of Food.
   * @memberof Food
   */
  constructor() {
    // 获取页面中的food元素，并将其赋值给element
    // ! : 非空断言符号，排除变量为空的可能性
    this.element = document.getElementById("food")!;
  }
  /**
   *获取食物X轴坐标
   *
   * @readonly
   * @memberof Food
   */
  get X() {
    return this.element.offsetLeft;
  }
  /**
   *获取食物Y轴坐标
   *
   * @readonly
   * @memberof Food
   */
  get Y() {
    return this.element.offsetTop;
  }
  /**
   *改变食物的位置
   *
   * @memberof Food
   */
  change() {
    // 生成随机位置
    // 偏移量：0 ~ 290
    // 蛇每次移动 1格(10px)
    // 食物的坐标必须是10的倍数
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}
export default Food;

