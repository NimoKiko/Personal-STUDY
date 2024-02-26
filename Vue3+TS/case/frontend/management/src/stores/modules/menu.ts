// 创建菜单属性相关仓库
import { defineStore } from 'pinia'

let useMenuStore = defineStore('Menu', {
  state: () => {
    return {
      // 是否折叠
      isCollapse: false,
      // 刷新的标记
      refresh: false,
    }
  },
  actions: {
    // 切换菜单的折叠状态
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 转换刷新的标记
    toggleRefresh() {
      this.refresh = !this.refresh
    },
  },
  getters: {},
})

export default useMenuStore
