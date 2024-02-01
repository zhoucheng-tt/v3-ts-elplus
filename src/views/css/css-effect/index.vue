<!--
 * @Description: css效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/7 15:14
 * @Path: src/views/css/css-effect/index.vue
-->
<template>
  <div class="mainbody-column">
    <div class="item flex-center"
         v-for="(item,index) in list"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import FourDivision from "@/views/css/css-effect/components/FourDivision.vue";
import HoverCard from "@/views/css/css-effect/components/HoverCard.vue";
import HamburgerMenu from "@/views/css/css-effect/components/HamburgerMenu.vue";

const list = shallowRef([
  {compName: HamburgerMenu, label: '汉堡菜单'},
  {compName: HoverCard, label: '悬浮效果'},
  {compName: FourDivision, label: '四分隔效果'},
])
</script>

<style lang='scss' scoped>
</style>
