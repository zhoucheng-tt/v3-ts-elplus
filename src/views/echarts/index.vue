<!--
 * @Description:面积图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/28 09:25
 * @Path: src/views/echarts/index.vue
-->
<template>
  <div class="mainbody">
    <div class="item comp-box-item flex-center"
         v-for="(item,index) in list"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"
                 :xData="item.xData"
                 :yData="item.yData"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineAreaCharts from "@/views/echarts/components/LineAreaCharts.vue";

const xData = ref(['11/20\n19:41', '11/20\n19:42', '11/20\n19:43', '11/20\n19:44', '11/20\n19:45', '11/20\n19:46', '11/20\n19:47'])
const y1Data = ref([60, 32, 46, 50, 45, 55, 36])
const list = shallowRef([
  {label: '面积图', compName: LineAreaCharts, xData: xData.value, yData: y1Data.value},
])
</script>

<style lang='scss' scoped>
.mainbody {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .item {
    width: 24%;
    height: 200px;
    margin: 5px 0.5%;
  }
}
</style>
