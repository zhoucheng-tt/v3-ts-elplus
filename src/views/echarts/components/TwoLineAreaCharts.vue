<!--
 * @Description:双层面积图
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/19 16:05
 * @Path: src/views/echarts/components/TwoLineAreaCharts.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div ref="twoLineAreaRef"
           id="twoLineAreaId"
           class="line-area-chart">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import echarts from "@/utils/echarts";

const props = defineProps({
  label: {
    type: String
  },
  xData: {
    type: Array,
    default: []
  },
  y1Data: {
    type: Array,
    default: []
  },
  y2Data: {
    type: Array,
    default: []
  },
  legendData: {
    type: Array,
    default: []
  }
})

const twoLineAreaRef = ref()

onMounted(() => {
  initCharts(document.getElementById('twoLineAreaId'), props.xData, props.y1Data, props.y2Data, props.legendData)
})

onBeforeUnmount(() => {
  disposeCharts(document.getElementById('twoLineAreaId'))
})

async function initCharts(idElement: any, xData: any, y1Data: any, y2Data: any, legendData: any) {
  const myEChart = await echarts.init(idElement);
  const option = {
    grid: {
      left: '20px',  // 左边距
      right: '30px',  // 右边距
      top: '40px',  // 上边距
      bottom: '2%',  // 下边距
      containLabel: true  // 自动计算坐标轴标签的大小，以避免它们的溢出
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.7)', // 提示框背景颜色
      textStyle: {
        color: '#ffffff' // 提示框文字颜色
      },
      axisPointer: {
        type: 'line',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: legendData,
      padding: [10, 30],
      icon: 'roundRect',
      itemWidth: 10,  // 设置图例图标的宽度
      itemHeight: 2, // 设置图例图标的高度
      itemGap: 10, // 设置图例项之间的间隔距离
      orient: 'horizontal', // 设置图例水平布局
      left: 'right', // 设置图例居中对齐
      top: 'top', // 设置图例位于底部
      textStyle: {
        color: '#575D6B', // 设置图例文字颜色
        fontWeight: 400,
        fontSize: 14 // 设置图例文字字号
      }
    },
    xAxis: [
      {
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
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 14, // 字体大小
          fontWeight: 400,
          color: '#575D6B', // 字体颜色
          formatter: '{value}s'
        },
        splitLine: {
          lineStyle: {
            color: '#D5D9DE',
            width: 1,
            type: 'solid'
          }
        }
      }
    ],
    series: [
      {
        name: legendData[0],
        type: 'line',
        stack: 'Total',
        itemStyle: {
          color: '#FE9F4B'
        },
        areaStyle: {
          color: 'rgba(249,189,136,0.2)'
        },
        symbol: 'none', // 去除折线上的标点
        emphasis: {
          focus: 'series'
        },
        data: y1Data
      },
      {
        name: legendData[1],
        type: 'line',
        stack: 'Total',
        itemStyle: {
          color: '#12D2C5'
        },
        areaStyle: {
          color: 'rgba(18,210,197,0.1)'
        },
        symbol: 'none',// 去除折线上的标点
        emphasis: {
          focus: 'series'
        },
        data: y2Data
      },
    ]
  };
  myEChart.setOption(option);
  // 根据页面大小自动响应图表大小
  window.addEventListener("resize", function () {
    myEChart.resize();
  })
}

function disposeCharts(idElement: any) {
  echarts.dispose(idElement)
}

defineExpose({
  initCharts,
  disposeCharts
})
</script>

<style lang='scss' scoped>
.line-area-chart {
  width: 100%;
  height: 100%;
}
</style>
