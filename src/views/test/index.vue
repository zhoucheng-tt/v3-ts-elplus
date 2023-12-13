<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/12 16:57
 * @Path: src/views/test/index.vue
-->
<template>
  <div class=""></div>
</template>

<script setup lang="ts">
const arr = ref([{a: 'a', b: 'c', children: [{a: 'b', b: 'b'}]}])

function searchValue(array: any, target: any) {
  // 判断array是否为null, undefined, 0, NaN, false, 空字符串
  // 以及判断array长度是否大于0
  if (array && array.length) {
    for (let item of array) {
      if (Object.values(item).includes(target)) {
        // 可以标记该节点存在目标值或执行某些操作
        item.flag = true
        if (item.children) {
          item.flag = true
          searchValue(item.children, target);
        }
      }
    }
  }
  return array
}

console.log(searchValue(arr.value, 'c'))
</script>

<style lang='scss' scoped>

</style>
