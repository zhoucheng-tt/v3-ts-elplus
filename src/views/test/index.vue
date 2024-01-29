<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/22 15:54
 * @Path: src/views/test/index.vue
-->
<template>
  <div class='home'>
    <div class="need-bg" style="background-image: url('@/assets/layout/active.svg')"></div>
  </div>
</template>

<script setup lang="ts">
const nums = [1, 2, 3, 1, 2, 3];

removeElement(nums, 2)

function removeElement(nums, val) {

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val) {
  //     console.log(nums[i])
  //   }
  // }
  // return nums
};
</script>

<style lang='scss' scoped>
.test-body {
  width: 100%;
  height: 100%;
}
.need-bg{
  width: 100px;
  height: 100px;
}
</style>
