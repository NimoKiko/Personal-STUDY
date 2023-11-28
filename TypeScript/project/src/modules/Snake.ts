/**
 *贪吃蛇类
 *
 * @class Snake
 */
class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体(包括蛇头)
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.bodies = this.element.getElementsByTagName("div");
  }
  /**
   *获取蛇头的X坐标
   *
   * @readonly
   * @memberof Snake
   */
  get X() {
    return this.head.offsetLeft;
  }
  /**
   *获取蛇头的Y坐标
   *
   * @readonly
   * @memberof Snake
   */
  get Y() {
    return this.head.offsetTop;
  }
  /**
   *设置蛇头的X坐标
   *
   * @memberof Snake
   */
  set X(value: number) {
    // 如果新值和旧值一样则不修改
    if (this.X === value) return;

    // X值的合法范围为 0~290
    if (value < 0 || value > 290) {
      // 进入判断，说明蛇撞墙了
      throw new Error("蛇撞墙了");
    }
    // 修改X时，是修改水平坐标，蛇向左移动时不能向右掉头，反之亦然
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // console.log('水平方向发生了掉头');
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        // 如果新值大于旧值则说明蛇要向右走，此时发生掉头，蛇应该向左走
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    // 移动身体
    this.moveBody();

    this.head.style.left = value + "px";
    // 检查是否撞到自己
    this.checkHeadBody();
  }
  /**
   *设置蛇头的Y坐标
   *
   * @memberof Snake
   */
  set Y(value: number) {
    // 如果新值和旧值一样则不修改
    if (this.Y === value) return;
    // Y值的合法范围为 0~290
    if (value < 0 || value > 290) {
      // 进入判断，说明蛇撞墙了
      throw new Error("蛇撞墙咯~");
    }

    // 修改Y时，是修改纵向坐标，蛇向上移动时不能向下掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // console.log('水平垂直发生了掉头');
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.Y) {
        // 如果新值大于旧值则说明蛇要向下走，此时发生掉头，蛇应该向上走
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    // 移动身体
    this.moveBody();

    this.head.style.top = value + "px";
    // 检查是否撞到自己
    this.checkHeadBody();
  }
  /**
   *增加蛇的身体
   *
   * @memberof Snake
   */
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  /**
   *蛇身体移动的方法
   *
   * @memberof Snake
   */
  moveBody() {
    /**
     * 将后边的身体设置为前边身体的位置
     *  - eg:第四节身体 = 第三节身体的位置
     *       第三节身体 = 第二节身体的位置
     *       第二节身体 = 头的位置
     */
    // console.log(this.bodies.length);

    for (let i = this.bodies.length - 1; i > 0; i--) {
      // console.log(i);

      // 获取前边身体的位置
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将这个值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = x + "px";
      (this.bodies[i] as HTMLElement).style.top = y + "px";
    }
  }

  /**
   *检查头和身体是否相撞
   *
   * @memberof Snake
   */
  checkHeadBody() {
    // 获取所有的身体，检查是否和头坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到身体，游戏结束
        throw new Error("撞到自己咯~");
      }
    }
  }
}

export default Snake;
