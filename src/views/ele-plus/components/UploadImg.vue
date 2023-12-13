<!--
 * @Description: 上传图片
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
-->
<template>
  <div class="comp-body">
    <div class="comp-title">头像上传组件</div>
    <div class="comp-content"
         style="display: flex;justify-content: center">
      <!-- 没图片 -->
      <el-upload v-show="!uploadShow"
                 v-model:file-list="fileList"
                 :class="cantUpload?'avatar-uploader':'avatar-uploader-uploading'"
                 :http-request="uploadImg"
                 :before-upload="beforeImgUpload"
                 :on-success="handleImgSuccess"
                 :show-file-list="false"
                 :limit="1">
        <!--默认可以上传-->
        <el-icon class="avatar-uploader-icon"
                 v-if="cantUpload===false">
          <Plus/>
        </el-icon>
      </el-upload>
      <!-- 已经有图片 -->
      <div v-show="uploadShow"
           class="el-upload-list el-upload-list--picture-card">
        <div class="el-upload-list__item is-success">
          <img class="uploadImage"
               :src="imgUrl">
          <span class="el-upload-list__item-actions">
            <span @click="dialogVisible = true">
               <el-icon><zoom-in/></el-icon>
            </span>
            <!--默认可以删除-->
            <span class="el-upload-list__item-delete">
              <el-icon v-if="cantDelete===false"
                       @click="handleRemove()">
                <Delete/>
              </el-icon>
            </span>
          </span>
        </div>
      </div>
      <el-dialog title="图片预览"
                 v-model="dialogVisible">
        <img style="width: 100%;height: 100%"
             :src="imgUrl"
             alt="">
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElUpload, ElIcon, ElDialog, ElMessage} from 'element-plus'
import {computed, ref} from "vue";
import axios from "axios";

const props = defineProps({
  modelValue: {
    type: String,
    defalut: ''
  },
  // 是否可以上传
  cantUpload: {
    type: Boolean,
    defalut: false
  },
  // 是否可以删除
  cantDelete: {
    type: Boolean,
    defalut: false
  }
})

const emit = defineEmits(['update:modelValue'])

const imgUrl = computed({
  get: () => props.modelValue,
  set: (val: any) => emit('update:modelValue', val)
});

const uploadShow = computed({
  get: () => imgUrl.value,
  set: (val) => val === '' ? false : true
})

const api = '/uploadApi'
const imgBaseUrl = '/uploadApi/'
const fileList = ref([])
const dialogVisible = ref(false)

// 文件上传前
function beforeImgUpload(file: any) {
  if (file.size / 1024 / 1024 > 2) {
    ElMessage.error('不大于 2MB!')
    return false
  }
  if (file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/webp") {
    ElMessage.error('图片仅支持jpg、jpeg、png、webp')
    return false
  }
  return true
}

// 上传单个图片
async function uploadImg(file: any) {
  let formD = new FormData();		// 新建一个FormData()对象，这就相当于你新建了一个表单
  formD.append("file", file.file);	// 将文件保存到formData对象中
  let result: any = await uploadFileAjax(formD)
  imgUrl.value = imgBaseUrl + result
}

// 未封装的上传文件请求
function uploadFileAjax(formdata: any) {
  return new Promise(async resolve => {
    await axios.post(api + '/files/upload', formdata).then((res: any) => {
      resolve(res.data.result.url)
    }).catch((err: any) => {
      console.log(err, '错误err')
    })
  })
}

// const fileRaw = ref()
// 文件上传成功 回显
function handleImgSuccess(response: any, uploadFile: any) {
  // fileRaw.value = URL.createObjectURL(uploadFile.raw!)
}

// 删除
async function handleRemove() {
  // let result = await deleteFileAjax(imgUrl.value)
  fileList.value = []
  imgUrl.value = ""
}

// 未封装的删除文件请求
function deleteFileAjax(url: any) {
  return new Promise(async resolve => {
    await axios.get(api + '/files/delete?url=' + url).then((res: any) => {
      resolve(res.data)
    }).catch((err: any) => {
      console.log(err, '错误err')
    })
  })
}
</script>

<style lang='scss' scoped>
.avatar-uploader {
  width: 90px;
  height: 90px;
  line-height: 90px;
  border-radius: 50%;
  border: 1px dashed #d9d9d9;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: url('@/assets/avatar.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.avatar-uploader-uploading {
  width: 90px;
  height: 90px;
  line-height: 90px;
  border-radius: 50%;
  border: 1px dashed #d9d9d9;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #ffffff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
}

.uploadImage {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}

:deep(.el-upload-list__item) {
  width: 90px !important;
  height: 90px !important;
  margin: 0 2px 0 0;
  padding: 0;
  border-radius: 50%;
  //border: 1px solid var(--el-border-color);
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--el-fill-color-blank);
  display: inline-flex;
  background: transparent;
  border: none;
}

:deep(.el-upload--picture-card) {
  width: 90px !important;
  height: 90px !important;
  box-sizing: border-box;
  border-radius: 50%;
  //border: 1px dashed var(--el-border-color-darker);
  background-color: var(--el-fill-color-lighter);
  cursor: pointer;
  vertical-align: top;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.el-upload-list--picture-card) {
  display: inline-flex;
  flex-wrap: nowrap;
}
</style>
