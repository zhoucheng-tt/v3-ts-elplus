<!--
 * @Description:悬浮效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 14:09
 * @Path: src/views/test/HoverCard.vue
-->
<template>
  <div class="">
    <div class="service-item"
         @mouseenter='handleMouseover(item)'
         @mouseleave='handleMouseleave(item)'>
      <div class="service-banner">
      </div>
      <div class="service-content-card">
        <div class="service-title">{{ item.titleName }}</div>
        <div class="service-content">
          <div class="service-content-title">数据1:</div>
          <div class="service-number">{{ item.applicationCount }}</div>
          <div class="service-content-title"
               style="margin-left: 5%">数据2:
          </div>
          <div class="abnormal-number">{{ item.abnormalCount }}</div>
        </div>
        <transition name="card-hover" appear>
          <div class="service-content-hover"
               v-show="item.hover===true">
            <span class="text">导出</span>
            <span class="text">推送</span>
            <span class="text">详情</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const item = ref({
  titleName: '悬浮效果',
  applicationCount: '1',
  abnormalCount: '2'
})

function handleMouseover(val: any) {
  val.hover = true
}

// 鼠标悬停
function handleMouseleave(val: any) {
  val.hover = false
}
</script>

<style lang='scss' scoped>
.service-item {
  width: 23%;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
  border-radius: 2px;
  margin: 10px 1%;
  position: relative;

  .service-banner {
    width: 100%;
    height: 120px;
  }

  .service-content-card {
    width: 100%;
    height: 70px;

    .service-title {
      height: 30px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #1A1C28;
      margin: 10px 0 0 5%;
    }

    .service-content {
      height: 40px;
      display: flex;
      font-family: PingFangSC-Medium, PingFang SC;
      font-size: 14px;
      margin-left: 5%;


      .service-content-title {
        font-weight: 400;
        color: #575D6B;
      }

      .service-number {
        height: 40px;
        font-weight: 500;
        color: #3ABC6F;
        margin-left: 5%;
      }

      .abnormal-number {
        font-weight: 500;
        color: #E16868;
        margin-left: 5%;
      }
    }

    .service-content-hover {
      width: 100%;
      height: 80px;
      background: #0243EC;
      box-shadow: 0px -2px 4px 0px rgba(76, 100, 134, 0.1);
      opacity: 0.9;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: right;
      align-items: center;

      .text {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}

.card-hover-enter-active {
  animation: transitionAnimation 0.5s;
}

@keyframes transitionAnimation {
  from {
    height: 0px;
    transform: translateY(0);
  }
  to {
    height: 80px;
    transform: translateY(0);
  }
}
</style>
