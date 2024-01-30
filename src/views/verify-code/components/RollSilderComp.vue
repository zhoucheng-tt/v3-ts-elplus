<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2024/1/29 10:21
 * @Path: src/views/verify-code/components/RollSilderComp.vue
-->
<template>
  <div class="">
    <slide-verify ref="block"
                  :slider-text="commonData.text"
                  :imgs="commonData.imgList"
                  :w="310"
                  @again="onAgain"
                  @success="onSuccess"
                  @fail="onFail"
                  @refresh="onRefresh"></slide-verify>
  </div>
</template>

<script setup lang="ts">
// vue3-slide-verify
import SlideVerify from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";
import imgUrl from '@/utils/imgUrl'

const commonData = reactive({
  imgList: [
    getImgList('Verify01.jpeg'),
    getImgList('Verify02.jpeg'),
    getImgList('Verify03.jpeg'),
    getImgList('Verify04.jpeg'),
    getImgList('Verify05.jpeg'),
    getImgList('Verify06.jpeg'),
    getImgList('Verify07.jpeg'),
    getImgList('Verify08.jpeg'),
    getImgList('Verify09.jpeg'),
    getImgList('Verify10.jpeg'),
    getImgList('Verify11.jpeg'),
    getImgList('Verify12.jpeg'),
    getImgList('Verify13.jpeg'),
    getImgList('Verify14.jpeg'),
    getImgList('Verify15.jpeg'),
    getImgList('Verify16.jpeg'),
    getImgList('Verify17.jpeg'),
    getImgList('Verify18.jpeg'),
    getImgList('Verify19.jpeg'),
    getImgList('Verify20.jpeg'),
  ],
  verifyState: false,
  text: "滑动上方滑块完成拼图"
})

function getImgList(url: string) {
  return imgUrl.getVerifyImg(url)
}

const emits = defineEmits(['success'])

const block = ref(null);
const msg = ref("");

// function openModal() {
//   commonData.verifyState = true
//   block.value?.refresh();
// }

function onAgain() {
  msg.value = "检测到非人为操作，请再试一次！";
  block.value?.refresh();
  ElMessage.error(msg.value)
}

function onSuccess() {
  emits('success')
  commonData.verifyState = false
  ElMessage.success('验证通过！')
}

function onFail() {
  msg.value = "验证不通过！";
  ElMessage.error(msg.value)
}

function onRefresh() {
  msg.value = "点击了刷新小图标";
}

// defineExpose({
//   openModal
// })
</script>

<style lang='scss' scoped>

</style>
