<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/29 09:53
 * @Path: src/views/verify-code/index.vue
-->
<template>
  <div class="mainbody-column">
    <div class="item flex-center"
         v-for="(item,index) in list"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumTextImg from "@/views/verify-code/components/NumTextImg.vue";
import RollSilder from "@/views/verify-code/components/RollSilder.vue";

const list = shallowRef([
  {compName: RollSilder, label: '滚动滑块'},
  // {compName: NumTextImg, label: '数字图文'},
])
</script>

<style lang='scss' scoped>

</style>
