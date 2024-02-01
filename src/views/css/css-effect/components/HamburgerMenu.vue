<!--
 * @Description: 汉堡菜单
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/2/1 19:16
 * @Path: src/views/css/css-effect/components/HamburgerMenu.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content hover-effect">
      <div>
        <div>
          <button class="hamburger hamburger1">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
        <div>
          <button class="hamburger hamburger2">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
        <div>
          <button class="hamburger hamburger3">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
      </div>
      <div>
        <div>
          <button class="hamburger hamburger4">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
        <div>
          <button class="hamburger hamburger5">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
        <div>
          <button class="hamburger hamburger6">
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
            <div class="hamburger__line"></div>
          </button>
        </div>
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
</script>

<style lang='scss' scoped>
.hover-effect {
  display: flex;
  align-content: center;
  justify-content: space-evenly
}

.hamburger {
  background: transparent;
  border: transparent;
  cursor: pointer;
  padding: 0;
}

.hamburger__line {
  background: rgb(203 213 225);
  margin: 5px 0;
  height: 4px;
  width: 32px;
  transition: all 0.3s ease-out;
}

.hamburger1:hover .hamburger__line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger1:hover .hamburger__line:nth-child(2) {
  opacity: 0;
}

.hamburger1:hover .hamburger__line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}


.hamburger2:hover .hamburger__line:nth-child(1) {
  transform: translateY(9px);
}

.hamburger2:hover .hamburger__line:nth-child(2) {
  opacity: 0;
}

.hamburger2:hover .hamburger__line:nth-child(3) {
  transform: translateY(-9px);
}


.hamburger3:hover .hamburger__line:nth-child(1) {
  opacity: 0;
  transform: translateX(-100%);
}

.hamburger3:hover .hamburger__line:nth-child(3) {
  opacity: 0;
  transform: translateX(100%);
}

.hamburger4:hover .hamburger__line:nth-child(1) {
  transform: translateY(9px);
}

.hamburger4:hover .hamburger__line:nth-child(2) {
  opacity: 0;
}

.hamburger4:hover .hamburger__line:nth-child(3) {
  transform: translateY(-9px) rotate(-90deg);
}


.hamburger5:hover .hamburger__line:nth-child(1) {
  transform: translate(-2px, 4px) rotate(-45deg);
  width: 16px;
}

.hamburger5:hover .hamburger__line:nth-child(3) {
  transform: translate(-2px, -4px) rotate(45deg);
  width: 16px;
}

.hamburger6:hover .hamburger__line:nth-child(1) {
  transform: translate(17px, 4px) rotate(45deg);
  width: 16px;
}

.hamburger6:hover .hamburger__line:nth-child(3) {
  transform: translate(17px, -4px) rotate(-45deg);
  width: 16px;
}
</style>
