<!--
 * @Description:上传文件组件
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/13 10:30
-->
<template>
  <div>
    <el-upload class="upload-file"
               :http-request="handleUploadFile"
               :before-upload="beforeUploadFile"
               :on-remove="handleRemove"
               :file-list="fileList"
               :show-file-list="true"
               :limit="1">
      <el-button type="primary">点击上传</el-button>
      <template #tip>
        <div class="el-upload__tip">
          仅支持.md文件
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";
import axios from "axios";
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    defalut: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const fileUrl = computed({
  get: () => props.modelValue,
  set: (val: any) => emit('update:modelValue', val)
});

const fileList = ref([])

// 类型 大小 判断
function beforeUploadFile(file: any) {
  // 苹果 和 windows
  if (!file.type.includes('markdown') && !(file.type.length === 0 && file.name.includes('md'))) {
    ElMessage.error('请上传md文件!')
    return false
  }
  return true
}

// 上传
async function handleUploadFile(file: any) {
  let formD = new FormData();		// 新建一个FormData()对象，这就相当于你新建了一个表单
  formD.append("file", file.file);	// 将文件保存到formData对象中
  let result: any = await uploadFileAjax(formD)
  fileUrl.value = '/uploadApi/' + result
}

// 上传
function uploadFileAjax(formdata: any) {
  return new Promise(async resolve => {
    await axios.post('/uploadApi/files/upload', formdata).then((res: any) => {
      resolve(res.data.result.url)
    })
  })
}

// 删除
function handleRemove(url: any) {
  return new Promise(async resolve => {
    await axios.get('/uploadApi/files/delete?url=' + url).then((res: any) => {
      resolve(res.data)
    }).catch((err: any) => {
      console.log(err, '错误err')
    })
  })
}
</script>

<style lang='scss' scoped>
.upload-file {
  text-align: center;
}
</style>
