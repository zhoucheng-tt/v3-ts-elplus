<!--
 * @Description:悬浮效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 14:09
 * @Path: src/views/test/HoverCard.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content"
         @mouseenter='handleMouseover(item)'
         @mouseleave='handleMouseleave(item)'>
      <div class="banner"></div>
      <div class="content-card">
        <div class="content">
          <div class="content-title">数据1:</div>
          <div class="number">{{ item.data1 }}</div>
          <div class="content-title"
               style="margin-left: 5%">数据2:
          </div>
          <div class="abnormal-number">{{ item.data2 }}</div>
        </div>
        <transition name="card-hover" appear>
          <div class="content-hover"
               v-show="item.hover===true">
            <span class="text">操作1</span>
            <span class="text">操作2</span>
          </div>
        </transition>
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

const item = ref({
  data1: '1',
  data2: '2'
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
.comp-content {
  position: relative;

  .banner {
    width: 100%;
    height: 120px;
    background-image: url("@/assets/background/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .content-card {
    width: 100%;
    height: calc(100% - 120px);

    .content {
      height: 40px;
      display: flex;
      align-items: center;
      margin-left: 5%;

      font-weight: 500;
      font-size: 14px;

      .content-title {
        font-weight: 400;
        color: #575D6B;
        margin-right: 5%;
      }

      .number {
        color: #3ABC6F;
      }

      .abnormal-number {
        color: #E16868;
      }
    }

    .content-hover {
      width: calc(100% - 10px);
      height: calc(100% - 120px);
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
    height: calc(100% - 120px);
    transform: translateY(0);
  }
}
</style>
