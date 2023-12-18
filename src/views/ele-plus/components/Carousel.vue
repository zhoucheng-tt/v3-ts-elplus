<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <img class="arrow"
           src="@/assets/common/arrow-left.svg"
           @click="arrowClick('left')"/>
      <el-carousel class="carousel"
                   ref="cardShow"
                   arrow="never"
                   trigger="click"
                   height="120px"
                   :autoplay=false
                   indicator-position="outside">
        <el-carousel-item class="carousel-item"
                          v-for="(item,index) in Math.ceil(list.length/5)"
                          :key="item">
          <div class="item"
               :style="{background:colorList[indexIn]}"
               v-for="(itemIn, indexIn) in list.slice(index * 5, index * 5 + 5)"
               :key="indexIn">
          </div>
        </el-carousel-item>
      </el-carousel>
      <img class="arrow"
           src="@/assets/common/arrow-right.svg"
           @click="arrowClick('right')"/>
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

const list = ref([
  {},
  {},
  {},
  {},
  {},
  {},
])

const cardShow = ref()
const colorList = [
  'linear-gradient(135deg, rgba(59,255,247,0.2) 0%, rgba(255,255,255,0) 100%)',
  'linear-gradient(135deg, rgba(59,139,255,0.2) 0%, rgba(255,255,255,0) 100%)',
  'linear-gradient(135deg, rgba(111,59,255,0.2) 0%, rgba(255,255,255,0) 100%)',
  'linear-gradient(135deg, rgba(255,115,59,0.2) 0%, rgba(255,255,255,0) 100%)',
  'linear-gradient(135deg, rgba(255,59,59,0.2) 0%, rgba(255,255,255,0) 100%)',
]

// 左右点击事件
function arrowClick(val: any) {
  if (val === 'right') {
    cardShow.value.next()
  } else {
    cardShow.value.prev()
  }
}
</script>

<style lang='scss' scoped>
.comp-content {
  width: 100%;
  display: flex;
  align-items: center;

  .carousel {
    width: 100%;
    height: 100%;
    margin: 0 2px;
    .carousel-item {
      display: flex;
      justify-content: flex-start;

      .item {
        width: calc(calc(100% / 5) - 8 * 2px);
        padding: 8px;
        margin-right: 8px;
        background: linear-gradient(360deg, #FEFEFF 0%, #F5F6F9 100%);
        border-radius: 8px;
        border: 1px dashed gray;
        cursor: pointer;
        position: relative;
      }
    }
  }
}
</style>
