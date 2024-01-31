<!--
 * @Description:用户信息
 * @Author: zhoucheng
 * @Github: https://github.com/yanxiaos
 * @Date: 2022/11/7 11:41
 * @Path: src/views/layout/components/UserInfoCard.vue
-->
<template>
  <div class="user-info">
    <div class="sanjiao"></div>
    <span>v3-Ts-ElementPlus</span>
  </div>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default {
  name: 'UserInfoCard',
  inheritAttrs: false
}
</script>

<style lang='scss' scoped>
.user-info {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: 18px;
  font-weight: 500;
  color: #2E323B;

  .sanjiao {
    z-index: 10000;
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
