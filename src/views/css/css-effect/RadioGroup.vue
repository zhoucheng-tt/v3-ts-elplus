<!--
 * @Description:el-radio-group
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 14:03
 * @Path: src/views/test/RadioGroup.vue
-->
<template>
  <div class="">
    <div>
      <el-radio-group v-model="applicationType">
        <el-radio class="industry-item"
                  v-for="(item,index) in industryList"
                  :key="index"
                  :label="item.name"
                  border>
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="applicationType1">
        <el-radio class="industry-item"
                  v-for="(item,index) in industryList1"
                  :key="index"
                  :label="item.name"
                  border>
          {{ item.name }}
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
const applicationType = ref('')
const industryList = ref([
  {name: '全部'},
  {name: '通用'},
  {name: '交通'},
  {name: '电力'},
])
const applicationType1 = ref('')
const industryList1 = ref([
  {name: '全部'},
  {name: '基础服务'},
  {name: '数据库'},
])
</script>

<style lang='scss' scoped>
.industry-item {
  width: 85px;
  border-radius: 1px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :deep(.el-radio__inner) {
    display: none;
  }

  :deep(.el-radio__input.is-checked) {
    position: absolute;

    &:before {
      content: "";
      position: absolute;
      right: -45px;
      bottom: -16px;
      border: 10px solid #0052D9;
      border-top-color: transparent;
      border-left-color: transparent;
    }

    &:after {
      content: "";
      width: 3px;
      height: 7px;
      position: absolute;
      right: -42px;
      bottom: -13px;
      border: 1px solid #ffffff;
      border-top-color: transparent;
      border-left-color: transparent;
      transform: rotate(45deg);
    }
  }
}
</style>
