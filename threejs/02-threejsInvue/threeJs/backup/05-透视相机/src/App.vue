<template>
  <div id="container">
    <div class="wrap" ref="wrap"></div>
    <div class="btn-wrap">
      <button class="btn1" @click="moveCamera">移动相机</button>
      <button class="btn2" @click="moveCube">移动立方体</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="app">
import { ref, onMounted } from 'vue'
// 引入threejs包
import * as THREE from 'three'
// 引入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 生命周期函数
// 创建场景
const scene = new THREE.Scene()
// 设置场景的背景颜色
scene.background = new THREE.Color('#262626')
// 创建相机(PerspectiveCamera透视相机)
// 第一个参数：FOV（视野角度）单位是角度
// 第二个参数：aspect（长宽比）
// 第三个参数：near（近截面）
// 第三个参数：far（远截面）
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置相机位置
camera.position.set(0, 15, 10)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()

onMounted(() => {
  // 获取要放置3d图像的容器
  const wrap = document.querySelector('.wrap')
  // 设置渲染器大小
  renderer.setSize(wrap?.clientWidth, wrap?.clientHeight)
  // 把3d画面渲染到指定的dom节点下
  wrap!.appendChild(renderer.domElement)
})

// 创建一个立方体
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: '#df7f49' })
// 创建网格
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 0, -2)

scene.add(cube)

// 创建一个平地(辅助网格)
const gridHelper = new THREE.GridHelper(100, 100)
scene.add(gridHelper)

function animation() {
  requestAnimationFrame(animation)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

function moveCamera() {
  /**
   * lookAt()：此方法可以控制相机看向的位置
   */
  camera.lookAt(0, 0, -2)
}

function moveCube() {
  cube.position.set(0, 10, -2)
  // 相机看向立方体
  camera.lookAt(cube.position)
}

animation()
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.wrap {
  width: 100vw;
  height: 100vh;
}
.btn-wrap {
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
}
</style>
