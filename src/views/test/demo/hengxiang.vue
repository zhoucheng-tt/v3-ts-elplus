<template>
  <div class="mainbody-column">
    <div class="item flex-center"
         v-for="(item,index) in listColumn"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
const listColumn = shallowRef([
  {compName: '', label: ''},
])
</script>

<style lang='scss' scoped>
</style>
