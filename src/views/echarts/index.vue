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
                 :y1Data="item.y1Data"
                 :y2Data="item.y2Data"
                 :legendData="item.legendData"
                 :title="item.title"
                 :color="item.color"
                 :data="item.data"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineAreaCharts from "@/views/echarts/components/LineAreaCharts.vue";
import TwoLineAreaCharts from "@/views/echarts/components/TwoLineAreaCharts.vue";
import PieCharts from "@/views/echarts/components/PieCharts.vue";
// 单图
const xData = ref(['11/20\n19:41', '11/20\n19:42', '11/20\n19:43', '11/20\n19:44', '11/20\n19:45', '11/20\n19:46', '11/20\n19:47'])
const y1Data = ref([60, 32, 46, 50, 45, 55, 36])
// 双线/柱图
const y2Data = ref([60, 32, 46, 50, 45, 55, 36])
const legendData = ref(['出', '入'])
// 饼图
const title = ref('')
const color = ['#FDA15A', '#0243EC', '#D9D9D9']
const data = [
  {name: '操作中', value: 12},
  {name: '运行中', value: 30},
  {name: '已停止', value: 23},
]

const list = shallowRef([
  {
    label: '面积图',
    compName: LineAreaCharts,
    xData: xData.value,
    y1Data: y1Data.value
  },
  {
    label: '两条面积图',
    compName: TwoLineAreaCharts,
    xData: xData.value,
    y1Data: y1Data.value,
    y2Data: y2Data.value,
    legendData: legendData.value
  },
  {
    label: '饼图',
    compName: PieCharts,
    title: title.value,
    color: color,
    data: data
  },
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
