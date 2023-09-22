/**
 * 观察者模式
 *  - 包含观察目标和观察者两类
 *  - 一个目标可以有多个与之相依赖的观察者
 *  - 一旦观察目标状态发生改变，所有观察者都将得到通知
 *
 */
// 观察目标
class Subject {
  constructor() {
    this.observer = [];
  }
  // 添加观察者方法
  add(observer) {
    this.observer.push(observer);
  }
  // 移除观察者
  remove(observer) {
    this.observer = this.observer.filter((item) => item !== observer);
  }
  // 通知方法
  notify() {
    this.observer.forEach((item) => {
      // console.log(item);
      // 调用观察者的方法(通知观察者)
      item.update();
    });
  }
}
// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(this.name + "：" + "update");
  }
}

let subject = new Subject();
let observer1 = new Observer("allice");
let observer2 = new Observer("eddi");
let observer3 = new Observer("ben");
// 观察目标的观察者列表中添加一个观察者
subject.add(observer1);
subject.add(observer2);
subject.add(observer3);

// 目标产生行为
subject.notify();

subject.remove(observer2);

subject.notify();
