<!--
 * @Description:echarts 面积图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/19 15:29
 * @Path: src/views/echarts/components/LineAreaCharts.vue
-->
<template>
  <div ref="lineAreaRef"
       id="lineAreaId"
       class="line-area-chart">
  </div>
</template>

<script setup lang="ts">
import echarts from "@/utils/echarts";

const props = defineProps({
  xData: {},
  yData: {}
})
const lineAreaRef = ref()

onMounted(() => {
  initCharts(document.getElementById('lineAreaId'), props.xData, props.yData)
})
onBeforeUnmount(() => {
  lineAreaRef.value.disposeChart(document.getElementById('lineAreaId'))
})

async function initCharts(idElement: any, xData: any, yData: any) {
  const myEChart = await echarts.init(idElement);
  const option = {
    grid: {
      left: '20px',  // 左边距
      right: '30px',  // 右边距
      top: '20px',  // 上边距
      bottom: '2%',  // 下边距
      containLabel: true  // 自动计算坐标轴标签的大小，以避免它们的溢出
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xData,
      axisLabel: {
        fontSize: 14, // 字体大小
        fontWeight: 400,
        color: '#575D6B' // 字体颜色
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(2,67,236,0.1)', // 轴线颜色
          width: 1, // 轴线宽度
          type: 'solid' // 轴线类型，可选值：'solid', 'dashed', 'dotted'
        }
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 14, // 字体大小
        fontWeight: 400,
        color: '#575D6B' // 字体颜色
      },
      splitLine: {
        lineStyle: {
          color: '#D5D9DE',
          width: 1,
          type: 'solid'
        }
      }
    },
    tooltip: {
      trigger: 'axis', // 触发类型，可选值有 'axis'（坐标轴触发）和 'item'（数据项触发）
      formatter: '{b}: {c}', // 提示框内容的格式化字符串，{b}表示类目轴数据，{c}表示数据值
      backgroundColor: 'rgba(0,0,0,0.7)', // 提示框背景颜色
      textStyle: {
        color: '#ffffff' // 提示框文字颜色
      }
    },
    series: [
      {
        data: yData,
        type: 'line',
        itemStyle: {
          color: '#0243EC'
        },
        areaStyle: {
          color: 'rgba(2,67,236,0.1)'
        },
        symbol: 'none' // 去除折线上的标点
      }
    ]
  };
  myEChart.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    myEChart.resize();
  })
}

function disposeChart(idElement: any) {
  echarts.dispose(idElement)
}

defineExpose({
  initCharts,
  disposeChart
})
</script>

<style lang='scss' scoped>
.line-area-chart {
  width: 100%;
  height: 100%;
}
</style>
