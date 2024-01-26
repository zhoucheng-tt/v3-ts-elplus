<!--
 * @Description:画一个三角
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/7 15:06
 * @Path: src/views/css/css-effect/components/PiantATriangle.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="sanjiao"></div>
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
.comp-content {
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #cccccc;
  position: relative;

  .sanjiao {
    position: absolute;
    top: 100%; /* 当鼠标移动到容器上时，将箭头定位在容器下方 */
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 通过变换使箭头垂直居中 */
    border-width: 15px; /* 箭头大小 */
    border-style: solid; /* 箭头样式 */
    border-color: #cccccc transparent transparent transparent; /* 箭头颜色 */
  }
}
</style>
