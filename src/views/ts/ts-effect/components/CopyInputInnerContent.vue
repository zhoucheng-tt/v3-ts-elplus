<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/20 10:09
 * @Path: src/views/ts/ts-effect/components/CopyInputInnerContent.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <div>
        <el-button type="primary"
                   @click="handleClickCopy('inputId',input)">复制
        </el-button>
      </div>
      <div>
        <el-input style="width:500px;margin-top: 20px"
                  id="inputId"
                  v-model="input"
                  :rows="2"
                  :max="100"
                  type="textarea"
                  placeholder="请输入"/>
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

const input = ref('')

function handleClickCopy(label: string, value: string) {
  if (value) {
    const range = document.createRange(); // 创建range对象
    const id: any = document.getElementById(label)
    range.selectNode(id); //获取复制内容的 id 选择器
    const selection: any = window.getSelection();  //创建 selection对象
    //如果页面已经有选取了的话，会自动删除这个选区，没有选区的话，会把这个选取加入选区
    if (selection.rangeCount > 0) {
      selection.removeAllRanges()
    }
    selection.addRange(range); // 将range对象添加到selection选区当中，会高亮文本块
    document.execCommand('copy'); //复制选中的文字到剪贴板
    ElMessage({message: '复制成功！', type: 'success',})
    selection.removeRange(range); // 移除选中的元素
  } else {
    ElMessage({message: '复制内容为空！', type: 'warning',})
  }
}
</script>

<style lang='scss' scoped>
</style>
