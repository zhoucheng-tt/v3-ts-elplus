<!--
 * @Description:elementPlus 首页
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/7 10:50
 * @Path: src/views/ele-plus/index.vue
-->
<template>
  <div class="mainbody">
    <div class="item length-comp-box-item"
         v-for="(item,index) in list"
         :key="index">
      <component style="margin-top: 10px"
                 :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSelect from "@/views/ele-plus/components/PageSelect.vue";
import RadioGroup from "@/views/ele-plus/components/RadioGroup.vue";

const list = shallowRef([
  {compName: PageSelect, label: '自写分页并实现跨页多选'},
  {compName: RadioGroup, label: '打钩的ElRaido'},
])
</script>

<style lang='scss' scoped>

</style>
