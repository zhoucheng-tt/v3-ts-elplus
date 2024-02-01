<!--
 * @Description:时间
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 15:00
 * @Path: src/views/test/AboutDate.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="line-item">
        <span class="title">当前时间:</span>
        {{ currentDay }} {{ currentWeekMoment }}
      </div>
      <div class="line-item">
        <span class="title">时间格式化:</span>
        {{ currentDate }} || {{ currentDateFmt }}
      </div>
      <div class="line-item">
        <span class="title">时间戳转时间:</span>
        {{ currentDateTimestamp }} || {{ currentDateTimestampFmt }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {formatDate, timeStampToFmtTime} from "@/utils/publicFun";

const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})

onMounted(() => {
  queryCurrentWeekMoment()
})

// 时间格式化
const currentDate = ref(new Date())
const currentDateFmt = ref(formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'))

// 当前时间时间戳 格式化
const currentDateTimestamp = ref(Math.floor((currentDate.value.getTime() / 1000)))
const currentDateTimestampFmt = ref(timeStampToFmtTime(currentDateTimestamp.value, 'yyyy-MM-dd hh:mm:ss'))

// 获取当天 周几的时刻
const currentWeek = ref(new Date().getDay())
const weekArr = ref(["日", "一", "二", "三", "四", "五", "六"])
const currentWeekMoment = ref('')

const currentDay = ref(formatDate(new Date(), 'yyyy-MM-dd'))
const currentTime = ref(formatDate(new Date(), 'hh'))

function queryCurrentWeekMoment() {
  let week = "星期" + weekArr.value[currentWeek.value]
  let val = Number(currentTime.value)
  if (val >= 0 && val < 12) {
    currentWeekMoment.value = week + '上午'
  } else if (val >= 12 && val < 18) {
    currentWeekMoment.value = week + '下午'
  } else if (val >= 18 && val < 24) {
    currentWeekMoment.value = week + '晚上'
  }
}
</script>

<style lang='scss' scoped>
.line-item {
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px dashed gray;
  font-size: 15px;

  .title {
    font-weight: 600;
  }
}
</style>
