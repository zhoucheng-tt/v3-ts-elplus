import {useGlobalStore} from "@/store";
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, useRoute} from 'vue-router';

// 菜单激活下标 切换/显示 方法
export function useMenuActive() {
  const globalStore = useGlobalStore()
  const route = useRoute()
  // 监听路由变化，设置导航激活下

  onBeforeRouteUpdate(updateMenu)
  onMounted(() => updateMenu(route))

  // 更新菜单状态
  function updateMenu(route: RouteLocationNormalizedLoaded) {
    // 顶部导航设置激活标签
    globalStore.sideMenuActive = route.meta.code as string
  }

  return {
    sideMenuActive: computed(() => globalStore.sideMenuActive),
  }
}
