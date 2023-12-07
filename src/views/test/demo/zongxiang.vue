<template>
  <div class="mainbody">
    <div class="length-comp-box-item"
         v-for="(item,index) in list"
         :key="index">
      <component :is="item.compName"
                 :label="item.label"></component>
    </div>
  </div>
</template>

<script setup lang="ts">

const list = shallowRef([
  {compName: '', label: ''},
])
</script>

<style lang='scss' scoped>

</style>
