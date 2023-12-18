<!--
 * @Description:表格双击修改
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/13 17:06
 * @Path: src/views/ele-plus/components/TableDbclickUpdate.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <el-table :data="state.tableList">
        <el-table-column label="说明" prop="describe">
          <template #default="scope">
            <!-- 判断为编辑状态 -->
            <el-input v-if="state.tableRowEditIndex === scope.$index &&
                            state.tableColumnEditIndex == scope.column.id"
                      ref="tableRowInputRef"
                      v-model="scope.row.describe"
                      @keyup.enter="()=> {$event.target.blur()}"
                      @blur="onInputTableBlur(scope)"/>
            <!-- 判断为显示状态 -->
            <p v-else
               class="eidt-row-p"
               @dblclick="dbClickCell(scope)">
              {{ scope.row.describe }}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="状态" prop="checkStateAr">
          <template #default="scope">
            <el-select v-model="scope.row.checkStateAr"
                       @change="onInputTableBlur(scope)"
                       placeholder="状态">
              <el-option v-for="item in reviewStatus"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"/>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
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

const tableRowInputRef: any = ref(null)
const reviewStatus = [
  {value: 0, label: '未开始'},
  {value: 1, label: '正确'},
  {value: 2, label: '错误'}
] // 状态

const state = reactive({
  tableList: [
    {describe: 1}
  ], // 表单数据
  tableRowEditIndex: undefined,  // 编辑的表格行
  tableColumnEditIndex: undefined  // 编辑的表格列
})

// 双击可编辑的单元格
function dbClickCell(scope: any) {
  console.log(scope)
  // 找到单个格子独有的属性 - 这里是用所在行跟列id区别显示
  state.tableRowEditIndex = scope.$index
  state.tableColumnEditIndex = scope.column.id
  nextTick(() => {
    // 获取焦点
    tableRowInputRef.value.focus()
  })
}

// 表格中input取消焦点,select变化
function onInputTableBlur(scope: any) {
  console.log('取消焦点', scope)
  state.tableRowEditIndex = undefined
  state.tableColumnEditIndex = undefined
  const id = scope.row.id
  const key = scope.column.property
  const value = scope.row[key]
  // 更新给后端的数据接口
  // 提交数据........
}
</script>

<style lang='scss' scoped>
.eidt-row-p {
  width: 100%;
  height: 32px;
  line-height: 32px;
}
</style>
