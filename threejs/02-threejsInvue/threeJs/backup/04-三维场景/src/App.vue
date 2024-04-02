<template>
  <div id="container">
    <div class="wrap" ref="wrap"></div>
  </div>
</template>
<script setup lang="ts" name="app">
import { ref, onMounted } from 'vue'
// 引入threejs包
import * as THREE from 'three'
// 引入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 生命周期函数
onMounted(() => {
  // 创建场景
  const scene = new THREE.Scene()
  // 1.设置场景的背景颜色
  scene.background = new THREE.Color('#262626')
  // 2.添加雾
  const fog = new THREE.Fog('#4f4f4f', 0, 40)
  scene.fog = fog

  // 3.使用自定义图片作为背景(没生效，不知道为啥)
  // const cubeTextureLoader = new THREE.CubeTextureLoader()
  // const bgMap = cubeTextureLoader
  //   .setPath('./assets/img/')
  //   .load(['01.png', '01.png', '01.png', '01.png', '01.png', '01.png'])
  // scene.background = bgMap

  //创建相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // 设置相机位置
  camera.position.set(0, 3, 10)
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer()

  // 获取要放置3d图像的容器
  const wrap = document.querySelector('.wrap')
  // 设置渲染器大小
  renderer.setSize(wrap?.clientWidth, wrap?.clientHeight)
  // 把3d画面渲染到指定的dom节点下
  wrap!.appendChild(renderer.domElement)

  // 创建一个立方体
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshBasicMaterial({ color: '#df7f49' })
  // 创建网格
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 2, -2)

  scene.add(cube)

  // 创建一个平地(辅助网格)
  const gridHelper = new THREE.GridHelper(100, 100)
  scene.add(gridHelper)
  // 创建轨道控制器
  const orbitController = new OrbitControls(camera, renderer.domElement)

  // 创建三维坐标轴帮助器
  const axesHelper = new THREE.AxesHelper(10)
  axesHelper.position.set(0, 1, -2)
  scene.add(axesHelper)

  function animation() {
    requestAnimationFrame(animation)

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    // 调用轨道控制器
    orbitController.update()

    renderer.render(scene, camera)
  }

  animation()
})
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap {
  width: 100vw;
  height: 100vh;
}
</style>
