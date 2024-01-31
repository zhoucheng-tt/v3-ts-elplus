<!--
 * @Description:ts 相关
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/13 10:22
 * @Path: src/views/ts/ts-effect/index.vue
-->
<template>
  <div>
    <div class="mainbody-line">
      <div class="item"
           v-for="(item,index) in listLine"
           :key="index">
        <component :is="item.compName"
                   :label="item.label"></component>
      </div>
    </div>
    <div class="mainbody-column">
      <div class="item  flex-center"
           v-for="(item,index) in listColumn"
           :key="index">
        <component :is="item.compName"
                   :label="item.label"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TerminalDate from "@/views/ts/ts-effect/components/TerminalDate.vue";
import CopyInputInnerContent from "@/views/ts/ts-effect/components/CopyInputInnerContent.vue";

const listLine = shallowRef([
  {compName: TerminalDate, label: '时间'},
])

const listColumn = shallowRef([
  {compName: CopyInputInnerContent, label: '复制输入框内的内容'},
])
</script>

<style lang='scss' scoped>

</style>
