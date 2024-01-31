<template>
  <div class="mainbody-line">
    <div class="item"
         v-for="(item,index) in listLine"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
const listLine = shallowRef([
  {compName: '', label: ''},
])
</script>

<style lang='scss' scoped>

</style>
