<!--
 * @Description:自写tooltip
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 16:07
 * @Path: src/views/test/SelfTooltip.vue
-->
<template>
  <div class="tooltip-container">
    <div>这是一个文本</div>
    <div class="sanjiao"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='scss' scoped>
.tooltip-container {
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #cccccc;
  position: relative;

  .sanjiao {
    position: absolute;
    top: 100%; /* 当鼠标移动到容器上时，将箭头定位在容器下方 */
    left: 50%; /* 水平居中 */
    transform: translateX(-50%); /* 通过变换使箭头垂直居中 */
    border-width: 10px; /* 箭头大小 */
    border-style: solid; /* 箭头样式 */
    border-color: #cccccc transparent transparent transparent; /* 箭头颜色 */
  }
}

</style>
