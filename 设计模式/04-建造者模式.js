/**
 * 建造者模式
 *  - 创建型设计模式的一种
 *  - 提供一种创建复杂对象的方式，将复杂对象的创建和表示分离
 *  - 关注细节和过程
 *
 * 下方案例解释：
 *  以Navbar类为例，实际中如果有许多不同的类，但是他们执行的整体流程一致，可以通过建造者模式，统一处理
 *  就像Navbar类有三个行为，初始化(init), 获取数据(getData), 渲染(render), 如果有类似的组件比如说List组件，
 *  也同时有如前者的三种行为，就可以通过建造模式统一处理
 */
class Navbar {
  init() {
    console.log("navbar-init");
  }

  getData() {
    console.log("navbar-getData");
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("navbar-1111")
      },3000)
    })
  }

  render() {
    console.log("navbar-render");
  }
}
class List {
  init() {
    console.log("list-init");
  }
  // 模拟异步
  getData() {
    console.log("list-getData");
  }

  render() {
    console.log("list-render");
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("list-1111")
      },3000)
    })
  }
}

class Builder {
  async startBuild(builder) {
    await builder.init();
    await builder.getData().then(res => {
      console.log(res);
    });
    await builder.render();
  }
}

let bd = new Builder();
bd.startBuild(new Navbar());
// bd.startBuild(new List());
