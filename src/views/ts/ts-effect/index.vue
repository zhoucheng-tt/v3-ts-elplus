<!--
 * @Description:ts 相关
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/13 10:22
 * @Path: src/views/ts/ts-effect/index.vue
-->
<template>
  <div class="mainbody-column">
    <div class="item  flex-center"
         v-for="(item,index) in listColumn"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyInputInnerContent from "@/views/ts/ts-effect/components/CopyInputInnerContent.vue";

const listColumn = shallowRef([
  {compName: CopyInputInnerContent, label: '复制输入框内的内容'},
])
</script>

<style lang='scss' scoped>
</style>
