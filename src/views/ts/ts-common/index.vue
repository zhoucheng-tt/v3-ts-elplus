<!--
 * @Description:ts 相关
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/13 10:22
 * @Path: src/views/ts/ts-effect/index.vue
-->
<template>
  <div class="mainbody-line">
    <div class="item"
         v-for="(item,index) in listLine"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutDate from "@/views/ts/ts-common/components/AboutDate.vue";
import TsOther from "@/views/ts/ts-common/components/TsOther.vue";

const listLine = shallowRef([
  {compName: AboutDate, label: '时间'},
  {compName: TsOther, label: '其他Ts'},
])
</script>

<style lang='scss' scoped>

</style>
