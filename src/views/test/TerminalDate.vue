<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 15:00
 * @Path: src/views/test/TerminalDate.vue
-->
<template>
  <div class="welcome">
    <div class="currentTime">{{ currentTime }}</div>
    <div class="welcome-text">
      <div class="welcome-text-left">欢迎进入工作台</div>
      <div class="welcome-text-time">今天是{{ currentDate }}{{ today }}</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {formatDate} from "@/utils/publicFun";

let time = ref(formatDate(new Date(), 'hh'))
const currentTime = ref('')
if (Number(time.value) >= 0 && Number(time.value) < 12) {
  currentTime.value = '上午好，'
} else if (Number(time.value) >= 12 && Number(time.value) < 18) {
  currentTime.value = '下午好，'
} else if (Number(time.value) >= 18 && Number(time.value) < 24) {
  currentTime.value = '晚上好，'
}

// 日期
const currentDate = formatDate(new Date(), 'yyyy/MM/dd')
const array = new Array("日", "一", "二", "三", "四", "五", "六");
const week = new Date().getDay();
const today = "星期" + array[week];
</script>

<style lang='scss' scoped>
.welcome {
  width: 360px;
  color: #FFFFFF;
  background: #0052D9;
  padding: 20px;

  .currentTime {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    line-height: 50px;
  }

  .welcome-text {
    display: flex;
    align-items: end;

    .welcome-text-left {
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      line-height: 33px;
    }

    .welcome-text-time {
      margin-left: 5px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
