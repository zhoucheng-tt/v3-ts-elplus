<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/3/22 14:41
 * @Path: src/components/SideNav/src/SideNav.vue
-->
<template>
  <el-scrollbar>
    <el-menu v-bind="$attrs"
             @select="selectMenu">
      <side-nav-item v-for="route in props.routes"
                     :key="route.code"
                     :item="route">
      </side-nav-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import {useHeaderTabsStore} from "@/store/modules/headertabs";

const props = defineProps({
  routes: {
    type: Array,
    default: () => ([])
  }
})
const emit = defineEmits(['select'])
const headertabsContent = useHeaderTabsStore()

function selectMenu(index: string, indexPath: any, route: any) {
  if (!headertabsContent.hearerTabsIndexList.includes(index)) {
    headertabsContent.hearerTabsIndexList.push(index)
    localStorage.setItem('hearerTabsIndexList', headertabsContent.hearerTabsIndexList)

    headertabsContent.headerTabsList.push({
      routeCode: index,
      routeName: route.route.path.split('/')[1],
    })
    localStorage.setItem('headerTabsList', JSON.stringify(headertabsContent.headerTabsList))
  }

  emit('select', index)
}

</script>

<style lang='scss' scoped>

</style>
