<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/19 20:56
 * @Path: src/views/ele-plus/components/TableInlineCopy.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <el-table :data="tableList">
        <el-table-column label="名称" prop="name">
          <template #default="scope">
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button link type="primary"
                       @click="handleClickCopy(scope.row)">复制
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";

const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})

const tableList = ref([
  {name: 'zhouxixi'},
  {name: 'sunhaha'},
])

function handleClickCopy(row: any) {
  const save = function (e: any) {
    e.clipboardData.setData("text/plain", row.name);
    e.preventDefault();// 阻止默认行为
  };
  document.addEventListener("copy", save);// 添加一个copy事件
  document.execCommand("copy");// 执行copy方法
  ElMessage({message: "复制成功" + row.name, type: "success"});
}
</script>

<style lang='scss' scoped>
</style>
