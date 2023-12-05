<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/9/8 10:13
 * @Path: src/App.vue
-->
<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script setup lang="ts">
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {useHeaderTabsStore} from "@/store/modules/headertabs";
import {onMounted} from "vue";

const locale = zhCn
const headertabsContent = useHeaderTabsStore()

onMounted(() => {
  if (localStorage.getItem('hearerTabsIndexList')) {
    headertabsContent.hearerTabsIndexList = localStorage.getItem('hearerTabsIndexList')
  }
  if (localStorage.getItem('headerTabsList')) {
    headertabsContent.headerTabsList = JSON.parse(localStorage.getItem('headerTabsList'))
  }
})

</script>

<style>
</style>

