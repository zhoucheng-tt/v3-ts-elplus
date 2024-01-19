<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/9/8 10:13
 * @Path: src/App.vue
-->
<template>
  <!--  <el-config-provider :locale="locale">-->
  <!--    <router-view/>-->
  <!--  </el-config-provider>-->
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="主应用" name="first">
      <router-view/>
    </el-tab-pane>
    <el-tab-pane label="子应用" name="second">
      <!-- 子应用的容器 -->
      <div id="vue2pcId"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
const activeName = ref('first')
const router = useRouter()

function handleClick(tab) {
  console.log(tab, 'tabtabtab', tab.paneName)
  if (tab.paneName === 'first') {
    window.location.replace('http://localhost:8081/')
  } else if (tab.paneName === 'second') {
    router.push('/vue2pc/')
  }
}
</script>

<style>
:deep(.el-tabs__header) {
  position: relative;
  padding: 0;
  margin: 0 !important;
}
</style>

