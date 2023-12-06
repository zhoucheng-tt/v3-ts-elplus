<!--
 * @Description:四分隔效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 14:40
 * @Path: src/views/test/FourDivision.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="comp-box-item flex-center">0</div>
      <div class="comp-box-item flex-center"
           v-for="(item,index) in list"
           :key="index">{{ item.name }}
      </div>
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

const list = ref([
  {name: 1},
  {name: 2},
  {name: 3},
  {name: 4},
])

</script>

<style lang='scss' scoped>
.comp-content {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
