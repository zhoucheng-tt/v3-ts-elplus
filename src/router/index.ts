/*
 * @Description: 路由
 * @Author: yanxiaos
 * @Github: https://github.com/yanxiaos
 * @Date: 2022/4/15 17:00
 * @LastEditors: yanxiaos
 * @Path: src/router/index.ts
 */
import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from "@/views/layout/layout.vue";
// 批量获取modules下暴露的东西 批量导入
const modulesFiles = import.meta.globEager("./modules/*.ts")
let routers: Array<RouteRecordRaw> = []

// 整合到一个大数组内
Object.values(modulesFiles).forEach(d => {
  routers = [...routers, ...d.default]
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "/",
    redirect: '/test',
    component: Layout,
    children: [...routers,]
  }]

const router = createRouter({
// createWebHistory:history模式 ;createWebHashHistory:hash模式
  history: createWebHistory(),
  routes,
})

NProgress.configure({
  template: `<div class="bar" role="bar"><div class="peg"></div></div>`
});
router.beforeEach((to, from, next) => {
  NProgress.start()
  setTimeout(() => {
    next()
  }, 100)
})
router.afterEach(() => {
  NProgress.done()
})

export default router
