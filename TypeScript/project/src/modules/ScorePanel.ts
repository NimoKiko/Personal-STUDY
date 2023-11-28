/**
 *记分牌类
 *
 * @class ScorePanel
 */
class ScorePanel {
  // score 和 level 记录元素的分数和等级
  score = 0;
  level = 1;
  // 分数 和 等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 限制等级
  maxLevel: number;
  // 设置变量多少分升一级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  /**
   *加分的方法
   *
   * @memberof ScorePanel
   */
  addScore() {
    this.score++;
    this.scoreEle.innerHTML = this.score + "";

    // 判断分数
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  /**
   *等级提升
   *
   * @memberof ScorePanel
   */
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;

