import * as THREE from "./node_modules/three/build/three.module.js";

// 创建场景
const scene = new THREE.Scene();
// 创建相机(PerspectiveCamera透视相机)
// 第一个参数：FOV（视野角度）单位是角度
// 第二个参数：aspect（长宽比）
// 第三个参数：near（近截面）
// 第三个参数：far（远截面）
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(0, 3, 10);
// 创建渲染器
const render = new THREE.WebGLRenderer();
// 设置渲染器的大小
render.setSize(window.innerWidth, window.innerHeight);
// 将渲染器添加到页面中
document.body.appendChild(render.domElement);

// 添加正方体
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "#df7f49" });
// 创建网格
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 2, -2);
// 把正方体添加到场景中
scene.add(cube);
// 创建辅助网格
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

function animation() {
  requestAnimationFrame(animation);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  render.render(scene, camera);
}

animation();
