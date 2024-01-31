<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/22 15:54
 * @Path: src/views/test/index.vue
-->
<template>
  <div class='home'>
    <el-tree :data="data">
      <template v-slot="{node,data}">
        <span class="custom-node">总数：{{data.num}}  {{node.label}}</span>
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    label: 'Level one 1',
    num:1,
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style lang='scss' scoped>
.home {
}
</style>
