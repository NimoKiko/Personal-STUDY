// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue'
// 将全局组件存在一个对象中，方便遍历注册
const allGlobalComponents = { SvgIcon }
// 引入element-plus的图表组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install(app: any) {
    // 遍历注册全局组件
    Object.keys(allGlobalComponents).forEach((key) => {
      console.log(key)
      // @ts-expect-error 不需要被ts检查
      app.component(key, allGlobalComponents[key])
    })
    // 注册element-plus的图标组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
