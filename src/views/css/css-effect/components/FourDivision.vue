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
      <div class="comp-content-item flex-center">0</div>
      <div class="comp-content-item flex-center"
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

.comp-content-item {
  width: 24%;
  height: 30%;
  margin: 5px 0.5%;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
  border-radius: 2px;
}
</style>
