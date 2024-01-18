<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/22 15:54
 * @Path: src/views/test/index.vue
-->
<template>
  <div class='home'>
    <div>count: {{ count }}</div>
    <TestA ref="testComRef"
           :count="count"
           @butClick="butClick"></TestA>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import TestA from "./TestA.vue";

const count = ref(0)

function butClick(val: number) {
  count.value = val
}

// 获取子组件实例
const testComRef = ref()
</script>
<style lang='scss' scoped>
.test-body {
  width: 100%;
  height: 100%;
}
</style>
