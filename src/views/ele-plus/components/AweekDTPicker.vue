<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/30 15:27
 * @Path: src/views/ele-plus/components/AweekDTPicker.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content flex-center">
      <div style="width: 400px">
        <div class="flex-center">
          开始时间：{{ searchForm.start }}<br/>结束时间：{{ searchForm.end }}
        </div>
        <el-date-picker v-model="timeSelect"
                        @change="handleChangeTime"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        :default-time="defaultTime"
                        :disabled-date=disableDate
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {timeStampToFmtTime} from "@/utils/publicFun";

const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})

const searchForm = ref({
  start: 0,
  end: 0
})

// 设置默认选中时间当天00:00:00~23:59：59
const startDate = new Date()
const endDate = new Date()
startDate.setHours(0)
startDate.setMinutes(0)
startDate.setSeconds(0)
endDate.setHours(23)
endDate.setMinutes(59)
endDate.setSeconds(59)
// 时间选择器
const timeSelect = ref([startDate.valueOf(), endDate.valueOf()])
const currentDayStart = Math.floor(timeSelect.value[0] / 1000)
const currentDayEnd = Math.floor(timeSelect.value[1] / 1000)

const defaultTime: [Date, Date] = [
  new Date(2024, 1, 1, 0, 0, 0),
  new Date(2024, 1, 1, 23, 59, 59),
]

function disableDate(time: any) {
  // 7天的时间戳
  const one = 7 * 24 * 3600 * 1000;
  // 当前日期 - one = 7天之前
  const minTime = Date.now() - one;
  // 当前日期 + one = 7天之后
  const maxTime = Date.now() + one;
  //禁止选择今天以后的时间
  return time.getTime() < minTime
    || time.getTime() > maxTime
    || time.getTime() > Date.now()
}

onMounted(() => {
  searchForm.value.start = currentDayStart
  searchForm.value.end = currentDayEnd
})

// 时间选择
function handleChangeTime(val: any) {
  if (val === null) {
    // 清空
    searchForm.value.start = currentDayStart
    searchForm.value.end = currentDayEnd
    timeSelect.value = [startDate.valueOf(), endDate.valueOf()]
  } else {
    // 确认
    searchForm.value.start = timeStampToFmtTime(Number(Math.floor(timeSelect.value[0] / 1000)), 'yyyy-MM-dd hh:mm:ss')
    searchForm.value.end = timeStampToFmtTime(Number(Math.floor(timeSelect.value[1] / 1000)), 'yyyy-MM-dd hh:mm:ss')
  }
}
</script>

<style lang='scss' scoped>
</style>
