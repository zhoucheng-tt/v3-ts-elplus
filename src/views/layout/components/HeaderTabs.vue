<!--
 * @Description: 头部选项卡
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/9/8 14:30
 * @Path: src/views/layout/components/HeaderTabs.vue
-->
<template>
  <div class="">
    <el-tabs v-model="globalStore.sideMenuActive"
             type="card"
             closable
             @tabClick="clickTab"
             @tab-remove="removeTab">
      <el-tab-pane v-for="item in headertabsContent.headerTabsList"
                   :key="item.routeCode"
                   :name="item.routeCode"
                   :label="item.routeName">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useHeaderTabsStore} from "@/store/modules/headertabs";
import {useGlobalStore} from "@/store";

const router = useRouter()
// 使用pinia
const headertabsContent = useHeaderTabsStore()
const globalStore = useGlobalStore()

// 点击内容
function clickTab(item: any) {
  let str = hyphenToCamel(item.props.label);
  str = str[0].toUpperCase() + str.slice(1)
  router.push({name: str, query: {type: 'tab'}})
}

// 短横变驼峰
function hyphenToCamel(str: any) {
  return str.replace(/-([a-z])/g, function (match: any, char: any) {
    return char.toUpperCase();
  });
}

// 删除内容
function removeTab(targetName: string) {
  const tabs = headertabsContent.headerTabsList
  let activeName = globalStore.sideMenuActive
  let activeItem = ref()
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.routeCode === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.routeCode
          activeItem.value = nextTab
        }
      }
    })
  }

  globalStore.sideMenuActive = activeName
  router.push("/" + activeItem.value.routeName)
  headertabsContent.headerTabsList = tabs.filter((tab) => tab.routeCode !== targetName)
  localStorage.setItem('headerTabsList', JSON.stringify(headertabsContent.headerTabsList))
  headertabsContent.hearerTabsIndexList = []
  for (let i = 0; i < headertabsContent.headerTabsList.length; i++) {
    headertabsContent.hearerTabsIndexList.push(headertabsContent.headerTabsList[i].routeCode)
  }
  localStorage.setItem('hearerTabsIndexList', headertabsContent.hearerTabsIndexList)
}
</script>

<style lang='scss' scoped>

</style>
