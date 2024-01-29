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
      <!--      <el-dialog v-model="dialogVisible"-->
      <!--                 :show-close=false-->
      <!--                 :align-center=true-->
      <!--                 append-to-rollSilderCompRef>-->
      <RollSilderComp v-if="dialogVisible"
                      ref="rollSilderCompRef"
                      @success="successSubmit"/>
      <!--      </el-dialog>-->
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

function handleClick() {
  dialogVisible.value = !dialogVisible.value
}

const rollSilderCompRef = ref()

function successSubmit() {
  dialogVisible.value = false
  console.log('sucess')
}
</script>

<style lang='scss' scoped>
</style>
