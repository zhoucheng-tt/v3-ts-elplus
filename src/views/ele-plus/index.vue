<!--
 * @Description:elementPlus 首页
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/7 10:50
 * @Path: src/views/ele-plus/index.vue
-->
<template>
  <div class="two-type">
    <div class="mainbody-line">
      <div class="item"
           v-for="(item,index) in listLine"
           :key="index">
        <component style="margin-top: 10px"
                   :is="item.compName"
                   :label="item.label"></component>
      </div>
    </div>
    <div class="mainbody-column">
      <div class="item flex-center"
           v-for="(item,index) in listColumn"
           :key="index">
        <component :is="item.compName"
                   :label="item.label"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/views/ele-plus/components/Carousel.vue";
import RadioGroup from "@/views/ele-plus/components/RadioGroup.vue";
import TableDbclickUpdate from "@/views/ele-plus/components/TableDbclickUpdate.vue";
import PageSelect from "@/views/ele-plus/components/PageSelect.vue";
import UploadComp from "@/views/ele-plus/components/UploadComp.vue";
import AweekDTPicker from "@/views/ele-plus/components/AweekDTPicker.vue";
import TableInlineCopy from "@/views/ele-plus/components/TableInlineCopy.vue";
import SelfMakeUpTree from "@/views/ele-plus/components/SelfMakeUpTree.vue";

const listLine = shallowRef([
  {compName: AweekDTPicker, label: '默认七天时间选择器'},
  {compName: UploadComp, label: '上传图片/上传文件'},
  {compName: PageSelect, label: '自写分页并实现跨页多选'},
  {compName: Carousel, label: '自定义图标走马灯'},
])
const listColumn = shallowRef([
  {compName: SelfMakeUpTree, label: '自写生成tree+num'},
  {compName: RadioGroup, label: '打钩的ElRaido'},
  {compName: TableDbclickUpdate, label: '表格双击修改'},
  {compName: TableInlineCopy, label: '表格行内复制'},
])
</script>

<style lang='scss' scoped>
.two-type {
  padding-bottom: 30px;
}
</style>
