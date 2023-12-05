<!--
 * @Description:四分隔效果
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 14:40
 * @Path: src/views/test/FourDivision.vue
-->
<template>
  <div class="mainbody">
    <div class="add">0</div>
    <div class="item"
         v-for="(item,index) in list"
         :key="index">{{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const list = ref([
  {name: 1},
  {name: 2},
  {name: 3},
  {name: 4},
])
</script>

<style lang='scss' scoped>
.mainbody {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  .add {
    width: 23%;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
    border-radius: 2px;
    cursor: pointer;
    margin: 10px 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  .item {
    width: 23%;
    height: 200px;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
    border-radius: 2px;
    margin: 10px 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
}
</style>
