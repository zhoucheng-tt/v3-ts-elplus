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
    redirect: '/css-effect',
    component: Layout,
    children: [...routers,]
  }]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),// createWebHistory:history模式 ;createWebHashHistory:hash模式
  routes, // `routes: routes` 的缩写
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
