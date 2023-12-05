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
          <div class="tooltip-img">
            <img v-if="globalStore.sideMenuActive !==item.code"
                 :src="imgUrl.getLayoutIcon(item.defaultIcon)"
                 alt="">
            <img v-else
                 :src="imgUrl.getLayoutIcon(item.activeIcon)"
                 alt="">
          </div>
          <div class="tooltip-title"> {{ item.title }}</div>
        </div>
      </el-tooltip>
    </el-menu-item>
    <el-sub-menu v-else
                 :index="item.code">
      <template #title>
        {{ item.title }}
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

const globalStore = useGlobalStore()

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

function hasChild(itemChildren: [] | undefined) {
  return itemChildren !== undefined && itemChildren.length !== 0
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.side-nav-item {
  width: 100%;

  .el-menu-item {
    height: 80px;
    margin-top: 5px;
    padding-top: 7px;

    .tooltip-content {
      height: 100%;
      display: flex;
      flex-direction: column;

      .tooltip-img {
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          //width: 48px;
          //height: 46px;
        }
      }

      .tooltip-title {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
}
</style>
