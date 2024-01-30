<!--
 * @Description:侧边栏内容
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/3/22 14:41
 * @Path: src/components/SideNav/src/SideNavItem.vue
-->
<template>
  <div class="side-nav-item">
    <el-menu-item class="el-menu-item"
                  v-if="!hasChild(item.children)"
                  :route="{ path: item.path }"
                  :index="item.code">
      <el-tooltip :content=item.title
                  effect="dark"
                  placement="right">
        <div class="tooltip-content">
          <img v-if="globalStore.sideMenuActive!==item.code"
               :src="imgUrl.getLayoutIcon(item.defaultIcon)"
               alt="">
          <img v-else
               :src="imgUrl.getLayoutIcon(item.activeIcon)"
               alt="">
          {{ item.title }}
        </div>
      </el-tooltip>
    </el-menu-item>
    <el-sub-menu v-else
                 :index="item.code">
      <template #title>
        <div class="flex-center">
          {{ item.title }}
        </div>
      </template>
      <side-nav-item v-for="child in item.children"
                     :key="child.code"
                     :item="child"/>
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import imgUrl from '@/utils/imgUrl'
import {useGlobalStore} from '@/store'

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const globalStore = useGlobalStore()

function hasChild(itemChildren: [] | undefined) {
  return itemChildren !== undefined && itemChildren.length !== 0
}
</script>

<style lang='scss' scoped>
.side-nav-item {
  width: 100%;

  .tooltip-content {
    display: flex;
    align-content: center;

    img {
      width: 15px;
      margin-right: 2px;
    }
  }
}
</style>
