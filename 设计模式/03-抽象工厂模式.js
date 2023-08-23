/**
 * 抽象工厂模式
 *  - 制定整体的结构和功能(只创建抽象方法)，小工厂覆写抽象方法
 *  - 使用抽象工厂管理各个小工厂
 *  - 下方案例解释：
 *    创建一个GameMode类，其中创建抽象方法Mechanism抽象方法，
 *    子类通过继承父类，然后在子类中覆写抽象方法来完成小工厂的个性化操作
 *    通过AbstractGameModeFactory方法来管理创建的类的类型
 *  - 缺点：一旦发生改动需要改动抽象工厂方法，且容易产生更多的类和更多的继承关系
 *
 */
class GameMode {
  constructor(mode) {
    this.mode = mode;
  }
  profile() {
    console.log(`选择${this.mode}模式`);
  }
  // 机制方法(抽象方法，在子类中实现)
  Mechanism() {}
}

class PVPMode extends GameMode {
  constructor(mode){
    super(mode)
  }
  // 覆写父类的机制方法
  Mechanism() {
    console.log("双方上阵五个式神,5V5对决!");
  }
}

class PVEMode extends GameMode {
  constructor(mode){
    super(mode)
  }
  // 覆写父类的机制方法
  Mechanism() {
    console.log("选择五个式神与计算机对抗!");
  }
}
// 抽象工厂方法
function AbstractGameModeFactory(mode) {
  switch (mode) {
    case "pvp":
      return new PVPMode("斗技");
      break;
    case "pve":
      return new PVEMode("副本");
      break;
  }
}

const mode1 = AbstractGameModeFactory("pve");

mode1.profile();
mode1.Mechanism();
