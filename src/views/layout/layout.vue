<!--
 * @Description:layout
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/3/22 14:42
 * @Path: src/views/layout/layout.vue
-->
<template>
  <div class="layout">
    <el-container class="container">
      <!--头部-->
      <Header class="header"></Header>
      <el-row class="content">
        <!--侧边栏-->
        <el-row class="side-nav">
          <side-nav class="side-nav-item"
                    :routes="routesSide"
                    :default-active="sideMenuActive"
                    mode="vertical"
                    router></side-nav>
        </el-row>
        <!--内容-->
        <el-row class="route-content">
          <header-tabs class="header-tabs"></header-tabs>
          <el-main class="main">
            <router-view v-slot="{ Component, route }">
              <!-- 动画样式定义在@/styles/animation.scss -->
              <transition name="fade"
                          mode="out-in"
                          appear>
                <component :is="Component"/>
              </transition>
            </router-view>
          </el-main>
        </el-row>
      </el-row>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideNav from "./components/SideNav/src/SideNav.vue"
import {routesSide} from "./data";
import {useMenuActive} from "@/views/layout/useLayout";

const {sideMenuActive} = useMenuActive()
</script>
<style lang='scss' scoped>
.layout {
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;

    .header {
      width: 100%;
      height: 64px;
      border-bottom: 1px solid #DDE5EB;
    }

    .content {
      width: 100%;
      height: calc(100% - 64px);
      display: flex;

      .side-nav {
        width: 120px;
        height: calc(100% - 20px);
        margin-bottom: 20px;

        overflow-x: hidden;
        border-right: 1px solid #DDE5EB;

        .side-nav-item {
          width: 100%;
        }
      }

      .route-content {
        width: calc(100% - 120px);
        height: 100%;
        background: #F4F9FC;
        padding: 16px;

        .header-tabs {
          width: 100%;
          height: 45px;
        }

        .main {
          width: calc(100% - 32px);
          height: calc(100% - 45px);
          overflow-x: hidden;
          overflow-y: auto;
          position: relative;
          background: #FFFFFF;
          box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
