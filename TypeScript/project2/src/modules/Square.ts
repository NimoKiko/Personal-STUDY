/**
 *方块类
 *
 * @class Square
 */
class Square {
  // 屏幕元素
  screen: HTMLElement;
  // 当前方块的id
  currentId: number = 0;
  // 定时器
  timer: any;

  constructor() {
    this.screen = document.getElementById("screen")!;
  }

  /**
   *在屏幕顶部随机的位置生成一个方块的方法
   *
   * @memberof Square
   */
  newSqure() {
    // 创建一个1-12之间的随机数
    let id = Math.floor(Math.random() * 12 + 1);
    this.currentId = id;
    // 创建一个id为'block'的div
    let div = document.createElement("div");
    div.id = `block-${id}`;
    div.className = "block";
    this.screen.appendChild(div);
    for (let i = 0; i < 5; i++) {
      let childDiv = document.createElement("div");
      div.appendChild(childDiv);
    }
    // 调用确认范围的方法，确保方块不会穿过屏幕
    let random = this.squareRange(id);
    div.style.left = random + "px";

    // 调用方块移动的方法
    this.timer = setInterval(this.run.bind(this), 500);
  }
  /**
   *判断方块的宽度范围
   *
   * @memberof Square
   */
  squareRange(id: number) {
    let div = document.getElementById(`block-${id}`)!;
    let width = div.offsetWidth;
    let random: number;
    switch (width) {
      case 30:
        // 生成0-17的随机数
        random = Math.floor(Math.random() * 18) * 10;
        return random;
      case 20:
        // 生成0-18的随机数
        random = Math.floor(Math.random() * 19) * 10;
        return random;
      case 50:
        // 生成0-15的随机数
        random = Math.floor(Math.random() * 16) * 10;
        return random;
    }
  }
  /**
   *方块移动的方法
   *
   * @memberof Square
   */
  run() {
    let div = document.getElementById(`block-${this.currentId}`)!;
    let top = div.offsetTop;
    this.squareCover();
    top += 10;
    div.style.top = top + "px";
  }
  /**
   *方块停止的方法
   *
   * @memberof Square
   */
  stop() {
    // 清除定时器
    clearInterval(this.timer);
    // 调用生成新方块的方法
    // this.newSqure();
  }
  /**
   *判断两个方块是否重合的方法
   *
   * @memberof Square
   */
  squareCover() {
    let movingSqure = document.getElementById(`block-${this.currentId}`)!;
    let squares = document.getElementsByClassName("block");
    // 如果只有一个方块，就不用判断了
    if (squares.length === 1) {
      // 如果方块到达底部，就停止
      if (movingSqure.offsetTop + movingSqure.offsetHeight == 310) {
        // 停止方块移动
        this.stop();
        return;
      }
      return;
    } else {
      
      // 如果有多个方块，就判断是否重合
      // 1.判断是否到达底部
      if (movingSqure.offsetTop + movingSqure.offsetHeight == 310) {
        // 停止方块移动
        this.stop();
        return;
      }
    }
  }
}

// 导出Square类
export default Square;
