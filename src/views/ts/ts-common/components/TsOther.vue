<!--
 * @Description:其他的commonts
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/2/1 11:42
 * @Path: src/views/ts/ts-common/components/TsOther.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="line-item">
        <span class="title">当前系统是PC还是移动端:</span>
        {{ whichSystem }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {querySystem} from "@/utils/publicFun";

const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})

// 当前系统
const whichSystem = ref(querySystem())
</script>

<style lang='scss' scoped>
.line-item {
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px dashed gray;
  font-size: 15px;

  .title {
    font-weight: 600;
  }
}
</style>
