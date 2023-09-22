/**
 * 发布订阅模式
 *
 */

// publish 发布
// subscribe 订阅
// const SubPub = {
//   list:[], // 保存所有的订阅者
//   pulish(){
//     this.list.forEach(item => item())
//   },
//   subscribe(cb){
//     this.list.push(cb)
//   }
// }

// function testA(params) {
//   console.log('testA');
// }
// function testB(params) {
//   console.log('testB');
// }

// SubPub.subscribe(testA)
// SubPub.subscribe(testB)

// SubPub.pulish()

class SubPub {
  constructor() {
    this.message = {};
  }
  // 发布
  publish(type, data) {
    this.message[type].forEach((element) => element(data));
  }

  // 订阅
  subscribe(type, cb) {
    if (!this.message[type]) {
      this.message[type] = [cb];
    } else {
      this.message[type].push(cb);
    }
  }

  // 取消订阅
  unSubscribe(type, cb) {
    if (!this.message[type]) {
      return;
    }
    if (!cb) {
      // 取消所有当前type事件
      this.message[type] && (this.message[type].length = 0);
    } else {
      this.message[type] = this.message[type].filter(item => item !== cb)
    }
  }
}

let subscribeCenter = new SubPub();

function testA(data) {
  console.log("testA", data);
}
function testB(data) {
  console.log("testB", data);
}

subscribeCenter.subscribe("yys", testA);
subscribeCenter.subscribe("apple", testB);

subscribeCenter.publish("yys", "this is yys sub");
