<!--
 * @Description: layout 头部
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/3/22 15:16
 * @Path: src/components/SideNav/src/Header.vue
-->
<template>
  <div class="header">
    <div class="header-left">
      <UserInfoCard></UserInfoCard>
    </div>
    <div class="header-right">
      <div class="icon"
           v-for="(item,index) in iconList"
           :key="index">
        <img class="icon-item"
             :src="imgUrl.getLayoutIcon(item.icon)"
             alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imgUrl from '@/utils/imgUrl'

const iconList = reactive([
  {icon: 'active.svg'},
])
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header-right {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 30px;

    .switch {
      margin-right: 10px;
    }

    .input:deep(.el-input__wrapper) {
      width: 300px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid #AAB8DB;

      .el-input__inner {
        margin-left: 10px;
      }
    }

    .icon {
      margin-left: 15px;
      display: flex;
      justify-content: space-evenly;

      .icon-item {
        cursor: pointer;
        width: 19px;
        height: 14px;
      }
    }
  }
}
</style>
