<!--
 * @Description:自写生成tree+数字总和
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/2/1 15:30
 * @Path: src/views/ele-plus/components/SelfMakeUpTree.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <el-tree :data="dataTreeNum"
               :props="defaultProps">
        <template v-slot="{node,data}">
        <span class="custom-node">
          {{ node.label }}
          总数：<span style="color: red">{{ data.num }}</span>
        </span>
        </template>
      </el-tree>
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
const defaultProps = {
  children: 'children',
  label: 'label',
}

const data = [
  {id: 1, num: 1, label: 'Level one 1', pid: ''},
  {id: 2, num: 1, label: 'Level two 1-1', pid: 1},
  {id: 3, num: 1, label: 'Level three 1-1-1', pid: 2},
  {id: 4, num: 1, label: 'Level one 2', pid: ''},
  {id: 5, num: 1, label: 'Level two 2-1', pid: 4},
  {id: 6, num: 1, label: 'Level three 2-1-1', pid: 5},
  {id: 7, num: 1, label: 'Level two 2-2', pid: 4},
  {id: 8, num: 1, label: 'Level three 2-2-1', pid: 7},
  {id: 9, num: 1, label: 'Level one 3', pid: ''},
  {id: 10, num: 1, label: 'Level two 3-1', pid: 9},
]

const dataTree = ref([])
dataTree.value = buildTree(data, '') as any
const dataTreeNum = ref([])
for (let i = 0; i < dataTree.value.length; i++) {
  sumNodeNum(dataTree.value[i])
}
dataTreeNum.value = dataTree.value

function sumNodeNum(node) {
  let sum = node.num;
  if (node.children && node.children.length > 0) {
    for (let child of node.children) {
      sum += sumNodeNum(child);
    }
  }
  node.num = sum
  return sum;
}

// 把数组变成树形结构
function buildTree(data: any, pid: any) {
  let result = [];
  // 遍历数组中的每个元素
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    // 如果当前元素的父节点ID等于指定的pid，则将其添加到结果数组中
    if (item.pid === pid) {
      let children = buildTree(data, item.id);
      // 如果当前元素有子节点，则将其子节点添加到当前元素的children属性中
      if (children.length > 0) {
        item.children = children;
      }
      result.push(item);
    }
  }
  return result;
}
</script>

<style lang='scss' scoped>
</style>
