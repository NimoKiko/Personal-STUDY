/**
 * 适配器模式
 *  - 将一个类的接口转化成客户希望的另一个接口。
 *  - 让接口不兼容的类可以一起工作
 * 
 * 案例代码解释：
 *  创建了百度地图和腾讯地图两个类，由于两个类内部的方法不同，用户选择的时候要分别做判断，
 *  这时候，创建一个适配器类(本例中创建了腾讯地图的适配器),在适配器类中创建和百度地图类中相同的方法名
 *  这样，在执行的时候就不用做判断区分哪个类该用哪个方法了
 *
 */

class TencentMap {
  show() {
    console.log("加载腾讯地图");
  }
}

class BaiduMap {
  display() {
    console.log("加载百度地图");
  }
}

class TencentMapAdapter extends TencentMap {
  constructor() {
    super();
  }

  display() {
    this.show();
  }
}

function render(map) {
  map.display();
}

render(new TencentMapAdapter())
render(new BaiduMap())