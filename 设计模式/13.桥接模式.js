/**
 * 桥接模式
 *  -
 *
 */

function Aodi(engine) {
  this.engine = engine;
}

Aodi.prototype.platform = function () {
  console.log("aoti 平台");
};

Aodi.prototype.loadEngine = function () {
  this.engine.run();
};

function V6() {
  this.run = function () {
    console.log("v6发动机");
  };
}
function V8() {
  this.run = function () {
    console.log("v8发动机");
  };
}

let aodi1 = new Aodi(new V6());

aodi1.loadEngine()
