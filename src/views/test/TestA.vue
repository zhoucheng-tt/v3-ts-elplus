<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/2 09:40
 * @Path: src/views/test/TestA.vue
-->
<template>
  <div>
    <h1>TestCom</h1>
    <el-button @click="butClick">修改count</el-button>
    <div>modelValue: {{count}}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['butClick'])

function butClick(){
  emit('butClick', props.count+1)
}

let childData = ref('childData')
// 将数据暴露出去
defineExpose({
  childData
})
</script>
