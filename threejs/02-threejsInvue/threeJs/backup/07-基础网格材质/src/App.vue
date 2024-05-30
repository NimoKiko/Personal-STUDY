<template>
  <div id="container">
    <div class="wrap" ref="wrap"></div>
    <div class="gui"></div>
    <!-- <div class="btn-wrap">
      <button class="btn1" @click="moveCamera">移动相机</button>
      <button class="btn2" @click="moveCube">移动立方体</button>
    </div> -->
  </div>
</template>
<script setup lang="ts" name="app">
import { ref, onMounted } from 'vue'
// 引入threejs包
import * as THREE from 'three'
// 引入dat.gui包 命令:npm i dat.gui
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 创建控制对象
const controlData = {
  rotationSpeed: 0.01,
  color: '#66ccff',
  wireframe: false
}
// 创建gui实例
const gui = new dat.GUI()
// 创建一个面板
const panel = gui.addFolder('cube')
// 为面板设置属性
// 添加旋转控制
panel.add(controlData, 'rotationSpeed', 0, 0.1, 0.01)
// 添加颜色选择器
panel.addColor(controlData, 'color')
// 选择框
panel.add(controlData, 'wireframe')
// 给面板的dom元素设置id
panel.domElement.id = 'gui'
// 打开面板
panel.open()
// 生命周期函数(dom挂载完成后将3d场景和gui面板挂载到页面中)
onMounted(() => {
  // 获取要放置3d图像的容器
  const wrap = document.querySelector('.wrap')
  // 获取要放置gui的容器
  const gui = document.querySelector('.gui')
  // 设置渲染器大小
  renderer.setSize(wrap?.clientWidth, wrap?.clientHeight)
  // 把3d画面渲染到指定的dom节点下
  wrap!.appendChild(renderer.domElement)
  // 将gui添加到页面中
  gui!.appendChild(panel.domElement)
})
// 创建场景
const scene = new THREE.Scene()
// 设置场景的背景颜色
// scene.background = new THREE.Color('#262626')
// 创建立体纹理
// 方向：左右 上下 前后
const cubeTexture = new THREE.CubeTextureLoader().load([
  'textures/01.png',
  'textures/01.png',
  'textures/01.png',
  'textures/01.png',
  'textures/01.png',
  'textures/01.png'
])
scene.background = cubeTexture
// 创建相机(PerspectiveCamera透视相机)
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
// 设置相机位置
camera.position.set(0, 5, 10)
// 创建渲染器
const renderer = new THREE.WebGLRenderer()

// 创建纹理
// const texture = new THREE.TextureLoader().load('/textures/01.png')
// texture.wrapS = THREE.RepeatWrapping
// texture.wrapT = THREE.RepeatWrapping
// texture.repeat.set(1, 1)

// 创建一个立方体
// const geometry = new THREE.BoxGeometry(2, 2, 2)
// const material = new THREE.MeshBasicMaterial({ color: controlData.color, map: texture })

// 创建一个球体
const sphere = new THREE.SphereGeometry(4)
const material = new THREE.MeshBasicMaterial({ color: controlData.color, envMap: cubeTexture })
// 创建网格
const cube = new THREE.Mesh(sphere, material)
cube.position.set(0, 5, 0)
scene.add(cube)

// 创建一个平地(辅助网格)
const gridHelper = new THREE.GridHelper(100, 100)
scene.add(gridHelper)

// 1.创建轨道控制器
const orbitController = new OrbitControls(camera, renderer.domElement)

function animation() {
  requestAnimationFrame(animation)

  cube.rotation.x += controlData.rotationSpeed
  cube.rotation.y += controlData.rotationSpeed
  // 设置立方体的颜色
  cube.material.color.set(controlData.color)
  // 设置立方体是否显示线框
  cube.material.wireframe = controlData.wireframe

  renderer.render(scene, camera)
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
.gui {
  position: absolute;
  top: 0;
  right: 0;
}
.btn-wrap {
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
}
</style>
