<!--
 * @Description:滚动滑块
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/29 10:07
 * @Path: src/views/verify-code/components/RollSilder.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div class="flex-center">
        <el-button type="primary" @click="handleClick">点 击</el-button>
      </div>
      <RollSilderComp v-if="dialogVisible"
                      ref="rollSilderCompRef"
                      @success="successSubmit"/>
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

const dialogVisible = ref(false)
const rollSilderCompRef = ref()

function handleClick() {
  dialogVisible.value = !dialogVisible.value
  // rollSilderCompRef.value.openModal()
}

function successSubmit() {
  dialogVisible.value = false
  console.log('sucess')
}
</script>

<style lang='scss' scoped>
</style>
