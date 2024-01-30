<!--
 * @Description: 上传图片
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content upDiv">
      <div>
        <div class="button">
          <el-button type="primary"
                     @click="uploadChange = !uploadChange">切换
          </el-button>
        </div>
        <div class="flex-center">
          <UploadImgComp v-model="avatar"
                         :cantUpload="uploadChange"
                         :cantDelete="uploadChange"></UploadImgComp>
        </div>
      </div>
      <div>
        <UploadFileComp v-model="fileUrl"></UploadFileComp>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    label: String,
    default: ''
  }
})
// 头像上传
const uploadChange = ref(true)
const avatar = ref()

// 上传文件
const fileUrl = ref()
</script>

<style lang='scss' scoped>
.upDiv {
  display: flex;
  justify-content: space-evenly;
  align-items: center
}

.button {
  display: flex;
  justify-content: center;
  margin-bottom: 10px
}
</style>
