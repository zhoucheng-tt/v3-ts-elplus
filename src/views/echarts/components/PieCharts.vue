<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/19 16:53
 * @Path: src/views/echarts/components/PieCharts.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="pie-chart"
           id="pieId">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import echarts from "@/utils/echarts";

const props = defineProps({
  label: {
    label: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  color: {
    type: Array,
    default: []
  },
  data: {
    type: Array,
    default: []
  }
})

onMounted(() => {
  initCharts(document.getElementById('pieId'), props.title, props.color, props.data)
})
onBeforeUnmount(() => {
  disposeCharts(document.getElementById('pieId'))
})

async function initCharts(idElement: any, title: any, color: any, data: any) {
  const myEChart = await echarts.init(idElement);
  const option = {
    // grid: {
    //   left: '20px',  // 左边距
    //   right: '30px',  // 右边距
    //   top: '20px',  // 上边距
    //   bottom: '2%',  // 下边距
    //   containLabel: true,  // 自动计算坐标轴标签的大小，以避免它们的溢出
    // },
    color: color,
    title: {
      text: '', // 设置饼图的标题内容
      left: 'left', // 标题水平居中
      textStyle: {
        color: '#181818', // 字体颜色
        fontSize: 18, // 标题字体大小
        fontWeight: 600 // 标题字体粗细
      }
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      left: '50%',// left、right、top、bottom
      top: 'center',
      orient: 'vertical', // horizontal(水平) vertical(竖直)
      icon: 'circle', // 设置图例的图标为圆形
      itemWidth: 6,  // 设置图例图标的宽度
      itemHeight: 6, // 设置图例图标的高度
      itemGap: 6,
      textStyle: {
        color: '#575D6B',
        fontSize: 14,
        fontWeight: 400
      },
      formatter: function (name: string) {
        let series: any[] = data;
        for (let i = 0; i < data.length; i++) {
          if (series[i].name === name) {
            return series[i].name + '   ' + series[i].value;
          }
        }
      }
    },
    series: {
      name: title,
      type: 'pie',
      center: ['28%', '50%'],// 设置位置
      radius: ['30%', '50%'],// 设置半径
      data: data,
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold'
        }
      }
    }
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
.pie-chart {
  width: 100%;
  height: 100%;
}
</style>
