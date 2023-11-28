import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

/**
 *游戏控制器类
 *
 * @class GameControl
 */
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 存储蛇的移动方向
  direction: string = "";
  // 创建一个属性记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10,1);

    this.init();
  }

  /**
   *游戏初始化方法
   *
   * @memberof GameControl
   */
  init() {
    // 绑定键盘按下事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 调用run方法

    this.run();
  }

  /**
   *键盘按下的响应函数
   *
   * @memberof GameControl
   */
  keydownHandler(event: KeyboardEvent) {
    /**
     * ArrowRight | Right
     * ArrowUp | Up
     * ArrowDown | Down
     * ArrowLeft | Left
     */
    // 需要检查是否合法 (用户是否按了正确的按键)
    this.direction = event.key;
  }

  /**
   *蛇运动的方法
   *
   * @memberof GameControl
   */
  run() {
    /**
     * 根据方向（this.direction）来使蛇的位置改变
     *  - 向上 top减少
     *  - 向下 top增加
     *  - 向左 left减少
     *  - 向右 left增加
     *  - ArrowRight | Right
     *  - ArrowUp | Up
     *  - ArrowDown | Down
     *  - ArrowLeft | Left
     */
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向修改X,Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动减少10
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动加10
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 想左移动减10
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动加10
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X,Y);

    // 修改蛇的X，Y值
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      // 进入到catch说明出现异常,弹出提示信息
      alert(e.message + "Game Over~");
      this.isLive = false;
    }

    // 开启一个定时器
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  /**
   *检查蛇是否吃到新坐标
   *
   * @param {number} X
   * @param {number} Y
   * @memberof GameControl
   */
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      console.log("吃到食物");
      // 食物位置需要改变
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl;
