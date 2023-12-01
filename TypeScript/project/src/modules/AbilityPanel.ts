class AbilityPanel {
  // 能力的元素
  abilityEle: HTMLElement;
  timerEle: HTMLElement;
  // 倒计时
  time: number;
  // 计时器
  timer: any;

  constructor(time: number = 30) {
    this.abilityEle = document.getElementById("ability")!;
    this.timerEle = document.getElementById("timer")!;
    this.time = time;
  }

  /**
   * 设置能力的方法
   *
   * @memberof AbilityPanel
   */
  set ability(value: string) {
    this.abilityEle.innerHTML = value;
  }
  /**
   *  启动计时器的方法
   *
   * @memberof AbilityPanel
   */
  startTimer() {
    // 设置计时器的初始值
    // this.timerEle.innerHTML = this.timer + "";
    // 设置计时器
    this.timer = setInterval(() => {
      // 判断计时器是否为0
      if (this.time == 0) {
        // console.log("计时器为0");
        this.stopTimer();
        // 重置计时器
        this.time = 30;
        this.timerEle.innerHTML = this.time + "s";
      }
      this.timerEle.innerHTML = this.time + "s";
      this.time--;
    }, 1000);
  }
  /**
   * 停止计时器的方法
   *
   * @memberof AbilityPanel
   */
  stopTimer() {
    // 重置计时器
    this.time = 30;
    this.timerEle.innerHTML = this.time + "s";
    clearInterval(this.timer);
  }
}

export default AbilityPanel;
