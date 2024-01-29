<!--
 * @Description:数字图文验证
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/29 09:56
 * @Path: src/views/verify-code/components/NumTextImg.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})
</script>

<style lang='scss' scoped>
</style>
