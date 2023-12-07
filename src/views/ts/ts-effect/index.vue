<!--
 * @Description:ts 相关
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/13 10:22
 * @Path: src/views/ts/ts-effect/index.vue
-->
<template>
  <div class="mainbody">
    <div class="length-comp-box-item"
         v-for="(item,index) in list"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import TerminalDate from "@/views/ts/ts-effect/components/TerminalDate.vue";

const list = shallowRef([
  {compName: TerminalDate, label: '时间'},
])
</script>

<style lang='scss' scoped>

</style>
