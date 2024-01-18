// 画布的放大倍率
const canvasTimes = 5;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// 选择器元素
let select = document.getElementById("sift");
// 按钮元素
let calc = document.getElementById("btn");
// 输入框元素
let inputs = document.getElementsByClassName("pointInput");

// 翻转坐标轴，把原点放在左下角
ctx.scale(1, -1);
ctx.translate(0, -canvasTimes * 100);

if (canvas.getContext) {
  // 监听input输入事件
  inputListener();

  // 监听按钮点击事件
  btn.onclick = function () {
    //清空整个画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制坐标轴
    drawAxis(select.value);
    let [pointX, pointY, pointZ] = inputs;
    drawPoint(pointX, pointY, pointZ, "#f00006");
  };
}
// 绘制坐标轴
function drawAxis(option) {
  // 绘制O2坐标轴
  drawO2Axis(canvasTimes);
  // 绘制N2坐标轴
  drawN2Axis(canvasTimes);
  // 绘制选中气体坐标轴
  drawGasAxis(canvasTimes);
  // 绘制空气线
  drawLine(
    axisTransform(100, 0, 0).x,
    axisTransform(100, 0, 0).y,
    axisTransform(0, 20.9, 79.1).x,
    axisTransform(0, 20.9, 79.1).y,
    "#145494"
  );
  // 绘制爆炸三角区
  drawBoomArea(option);
}
// 绘制O2坐标轴
function drawO2Axis(times) {
  // 绘制O2坐标轴
  drawLine(0, 0, 100 * times, 0, "#f2a01c");

  // O2坐标轴上的虚线
  let O2Interval = 10 * times;
  let halfO2Interval = O2Interval / 2;
  for (let i = 1; i <= 9; i++) {
    drawDashLine(
      O2Interval * i,
      0,
      halfO2Interval * i,
      halfO2Interval * i * Math.sqrt(3),
      "#f2a01c"
    );
  }
  // 绘制O2线上的刻度
  let O2MarkInterval = 10 * times;
  let O2Mark = 10;
  for (let i = 0; i <= 9; i++) {
    markAxis(O2Mark * (10 - i), O2MarkInterval * i, 10, "#f2a01c");
  }
}
// 绘制N2坐标轴
function drawN2Axis(times) {
  // 绘制N2坐标轴
  drawLine(50 * times, 50 * times * Math.sqrt(3), 100 * times, 0, "#0a8f21");

  // 绘制N2坐标轴上的线
  let N2Interval = 10 * times;
  let halfN2Interval = N2Interval / 2;
  for (let i = 1; i <= 9; i++) {
    drawDashLine(
      N2Interval * i,
      0,
      50 * times + halfN2Interval * i,
      (50 * times - halfN2Interval * i) * Math.sqrt(3),
      "#0a8f21"
    );
  }
  // 绘制N2线上的刻度
  let N2MarkInterval = 10 * times;
  let N2MarkHalfInterval = N2MarkInterval / 2;
  let N2Mark = 10;
  for (let i = 0; i <= 9; i++) {
    markAxis(
      N2Mark * (10 - i),
      100 * times - N2MarkHalfInterval * i,
      -N2MarkHalfInterval * Math.sqrt(3) * i,
      "#0a8f21"
    );
  }
}
// 绘制选中气体坐标轴
function drawGasAxis(times) {
  // 绘制pp坐标轴
  drawLine(0, 0, 50 * times, 50 * times * Math.sqrt(3), "#d40902");

  // 绘制pp坐标轴上的线
  let ppInterval = 10 * times;
  let halfPPInterval = ppInterval / 2;
  for (let i = 1; i <= 9; i++) {
    drawDashLine(
      halfPPInterval * i,
      halfPPInterval * i * Math.sqrt(3),
      100 * times - halfPPInterval * i,
      halfPPInterval * i * Math.sqrt(3),
      "#d40902"
    );
  }
  // 绘制N2线上的刻度
  let gasMarkInterval = 10 * times;
  let gasMarkHalfInterval = gasMarkInterval / 2;
  let gasMark = 10;
  for (let i = 1; i <= 10; i++) {
    markAxis(
      gasMark * i,
      gasMarkHalfInterval * i - 15,
      -gasMarkHalfInterval * Math.sqrt(3) * i,
      "#d40902"
    );
  }
}
// 绘制虚线
function drawDashLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.setLineDash([3, 3]);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
// 绘制实线
function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
// 点坐标转化(三元点坐标转化为二元点坐标)
function axisTransform(PP, O2, N2, times = canvasTimes) {
  if (PP + O2 + N2 == 100) {
    return {
      x: (PP / 2 + N2) * times,
      y: (PP / 2) * Math.sqrt(3) * times,
    };
  } else {
    return confirm("输入的点坐标有误");
  }
}
// 绘制刻度
function markAxis(text, x, y, color) {
  ctx.save();
  ctx.scale(1, -1);
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.restore();
}
// 绘制爆炸三角区
function drawBoomArea(option) {
  // 获取选中材料在空气和纯氧中的上下限四个点坐标
  let juncionPointParams = {
    x1: axisTransform(
      ingredients[option][0].airLow.PP,
      ingredients[option][0].airLow.O2,
      ingredients[option][0].airLow.N2
    ).x,
    y1: axisTransform(
      ingredients[option][0].airLow.PP,
      ingredients[option][0].airLow.O2,
      ingredients[option][0].airLow.N2
    ).y,
    x2: axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).x,
    y2: axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).y,
    x3: axisTransform(
      ingredients[option][0].airUpper.PP,
      ingredients[option][0].airUpper.O2,
      ingredients[option][0].airUpper.N2
    ).x,
    y3: axisTransform(
      ingredients[option][0].airUpper.PP,
      ingredients[option][0].airUpper.O2,
      ingredients[option][0].airUpper.N2
    ).y,
    x4: axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).x,
    y4: axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).y,
  };
  // 计算四个点坐标练成的直线的交点坐标
  let junction = juncionPoint(
    juncionPointParams.x1,
    juncionPointParams.y1,
    juncionPointParams.x2,
    juncionPointParams.y2,
    juncionPointParams.x3,
    juncionPointParams.y3,
    juncionPointParams.x4,
    juncionPointParams.y4
  );
  // 绘制下限直线
  drawLine(
    axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).x,
    axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).y,
    junction.x,
    junction.y,
    "#f82f16"
  );
  // 绘制上限直线
  drawLine(
    axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).x,
    axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).y,
    junction.x,
    junction.y,
    "#f82f16"
  );
}
// 绘制自定义点
function drawPoint(pointX, pointY, pointZ, color) {
  let { x, y } = axisTransform(
    pointX.value * 1,
    pointY.value * 1,
    pointZ.value * 1
  );
  // console.log(x, y);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  // 判断点是否在爆炸三角区内
  setTimeout(() => {
    judgeIsPointInBoomArea(x, y);
  }, 1000);
}
// 判断点是否在爆炸三角区内
function judgeIsPointInBoomArea(x, y) {
  let { x1, y1, x2, y2, x3, y3 } = getBoomAreaPoint();
  let a = (x1 - x) * (y2 - y1) - (x2 - x1) * (y1 - y);
  let b = (x2 - x) * (y3 - y2) - (x3 - x2) * (y2 - y);
  let c = (x3 - x) * (y1 - y3) - (x1 - x3) * (y3 - y);
  if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c < 0)) {
    alert("爆炸三角区内");
  } else {
    alert("爆炸三角区外");
  }
}
// 获取爆炸三角区的三个点坐标
function getBoomAreaPoint() {
  let option = select.value;
  let juncionPointParams = {
    x1: axisTransform(
      ingredients[option][0].airLow.PP,
      ingredients[option][0].airLow.O2,
      ingredients[option][0].airLow.N2
    ).x,
    y1: axisTransform(
      ingredients[option][0].airLow.PP,
      ingredients[option][0].airLow.O2,
      ingredients[option][0].airLow.N2
    ).y,
    x2: axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).x,
    y2: axisTransform(
      ingredients[option][1].oxygenLow.PP,
      ingredients[option][1].oxygenLow.O2,
      ingredients[option][1].oxygenLow.N2
    ).y,
    x3: axisTransform(
      ingredients[option][0].airUpper.PP,
      ingredients[option][0].airUpper.O2,
      ingredients[option][0].airUpper.N2
    ).x,
    y3: axisTransform(
      ingredients[option][0].airUpper.PP,
      ingredients[option][0].airUpper.O2,
      ingredients[option][0].airUpper.N2
    ).y,
    x4: axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).x,
    y4: axisTransform(
      ingredients[option][1].oxygenUpper.PP,
      ingredients[option][1].oxygenUpper.O2,
      ingredients[option][1].oxygenUpper.N2
    ).y,
  };
  let junction = juncionPoint(
    juncionPointParams.x1,
    juncionPointParams.y1,
    juncionPointParams.x2,
    juncionPointParams.y2,
    juncionPointParams.x3,
    juncionPointParams.y3,
    juncionPointParams.x4,
    juncionPointParams.y4
  );
  return {
    x1: juncionPointParams.x2,
    y1: juncionPointParams.y2,
    x2: junction.x,
    y2: junction.y,
    x3: juncionPointParams.x4,
    y3: juncionPointParams.y4,
  };
}
// 求两个线段的交点
function juncionPoint(x1, y1, x2, y2, x3, y3, x4, y4) {
  // debugger
  let k1 = (y2 - y1) / (x2 - x1);
  let k2 = (y4 - y3) / (x4 - x3);
  let b1 = y1 - k1 * x1;
  let b2 = y3 - k2 * x3;
  let x = (b2 - b1) / (k1 - k2);
  let y = k1 * x + b1;
  return { x, y };
}

function inputListener() {
  let [a, b, c] = inputs;
  a.addEventListener("input", function () {
    if (!a.value || a.value == '-') a.value = 0;
    if (a.value && b.value) {
      c.value = 100 - a.value - b.value;
    }
    if (a.value && c.value) {
      b.value = 100 - a.value - c.value;
    }
    if (b.value && c.value) {
      a.value = 100 - b.value - c.value;
    }
  });
  b.addEventListener("input", function () {
    if (!b.value || b.value == '-') b.value = 0;
    if (a.value && b.value) {
      c.value = 100 - a.value - b.value;
    }
    if (b.value && c.value) {
      a.value = 100 - b.value - c.value;
    }
    if (a.value && c.value) {
      b.value = 100 - a.value - c.value;
    }
  });
  c.addEventListener("input", function () {
    if (!c.value || c.value == '-') c.value = 0;
    if (a.value && c.value) {
      b.value = 100 - a.value - c.value;
    }
    if (b.value && c.value) {
      a.value = 100 - b.value - c.value;
    }
    if (a.value && b.value) {
      c.value = 100 - a.value - b.value;
    }
  });
}
