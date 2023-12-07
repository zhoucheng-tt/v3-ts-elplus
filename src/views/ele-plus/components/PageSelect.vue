<!--
 * @Description:自写分页并实现跨页多选
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 15:17
 * @Path: src/views/test/PageSelect.vue
-->
<template>
  <div class="comp-body">
    <div class="comp-title">{{ label }}</div>
    <div class="comp-content">
      <el-button @click="batchDeploy">批量部署</el-button>
      <div class="content">
        <div class="content-item"
             v-for="(item,index) in listShow"
             :key="index"
             :label="item.id"
             @click.self="handleClickItem(item)">
          <el-checkbox class="checkbox"
                       size='large'
                       v-model="item.checked"
                       :checked="item.checked===true"
                       @change="handleChangeCheckbox"></el-checkbox>
          <div class="title">
            <div class="title-content">
              <div class="title-content-item">{{ item.id }}</div>
              <el-rate v-model="item.rate"
                       clearable
                       size="large"
                       @change.native="handleChangeRate(item)"/>
            </div>
            <div class="title-desc">{{ item.applicationDesc }}</div>
          </div>
          <div class="content-inner">
            <div class="content-title">部署次数</div>
            <div class="content-text">{{ item.timesOfDeploy }}</div>
          </div>
          <div class="content-inner">
            <div class="content-title">收藏次数</div>
            <div class="content-text">{{ item.timesOfFavorite }}</div>
          </div>
          <div class="content-inner">
            <div class="content-title">上架时间</div>
            <div class="content-text">{{ item.updatedAt }}</div>
          </div>
          <div class="content-deploy"
               @click.stop="handleClickSingleDeploy(item)">部署
          </div>
        </div>
      </div>
      <div class="table-pagination">
        <div class="table-pagination-left">
          共 <span class="table-pagination-total">{{ total }}</span> 条
        </div>
        <div class="table-pagination-right">
          <el-pagination small
                         background
                         layout="prev,pager,next,jumper"
                         prev-text="上一页"
                         next-text="下一页"
                         v-model:current-page="pageNum"
                         v-model:page-size="pageSize"
                         :total="total"
                         @current-change="onChange"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})

const list = reactive([
  {id: "1", checked: false},
  {id: "2", checked: false},
  {id: "3", checked: false},
  {id: "4", checked: false},
  {id: "5", checked: false},
])

const listShow = ref([])
const pageNum = ref(1)
const pageSize = ref(1)
const total = ref(list.length)

onMounted(() => {
  amount(pageNum.value, pageSize.value);
})

function handleClickItem(item: any) {
  ElMessage.info('点击每项加每项id' + '' + item.id)
}

function handleChangeCheckbox(item: any) {
  ElMessage.info('点击每项checkbox')
  // item.checked = true
}

function handleChangeRate(item: any) {
  ElMessage.info('点击评分')
}

function handleClickSingleDeploy(item: any) {
  ElMessage.info('点击部署按钮')
}

// 批量部署按钮
function batchDeploy() {
  const finalChoose = list.filter(item => {
    if (item.checked === true) {
      return item
    }
  })
  let idList = ref([])
  for (let i = 0; i < finalChoose.length; i++) {
    idList.value.push(finalChoose[i].id)
  }
  if (idList.value.length > 0) {
    let idStr = ref('')
    idStr.value = idList.value.join('、')
    ElMessage.success('已选中' + idStr.value)
  } else {
    ElMessage.info('未选中')
  }
}

// 分页
function onChange(val: number) {
  listShow.value = [];
  pageNum.value = val;
  amount(pageNum.value, pageSize.value);
}

// 自写分页
function amount(a: number, b: number) {
  listShow.value = [];
  let c = (a - 1) * b;
  if (list.length < a * b) {
    for (let i = c; i < list.length; i++) {
      listShow.value.push(list[i]);
    }
  } else {
    if (a * b > list.length) {
      for (let i = c; i < list.length; i++) {
        listShow.value.push(list[i]);
      }
    } else {
      for (let i = c; i < a * b; i++) {
        listShow.value.push(list[i]);
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 10px;

  .content-item {
    margin-top: 10px;
    padding: 5px;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px 0px rgba(76, 100, 134, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    user-select: none;

    .checkbox {
      position: absolute;
      left: 30px;

      :deep(.el-checkbox__inner) {
        width: 14px;
        height: 14px;
        border-radius: 1px;
        border: 1px solid #ADB0B8;
      }

      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background: #0052D9;
      }
    }

    .title {
      width: 100px;
      margin-left: 60px;

      :deep(.el-rate) {
        .el-rate__item:nth-child(2) {
          display: none;
        }

        .el-rate__item:nth-child(3) {
          display: none;
        }

        .el-rate__item:nth-child(4) {
          display: none;
        }

        .el-rate__item:nth-child(5) {
          display: none;
        }
      }

      .title-content {
        font-size: 22px;
        font-weight: 600;
        color: #1A1C28;
        display: flex;
        align-items: center;

        .title-content-item {
          display: flex;
          align-items: center;
          margin-right: 12px;
        }
      }

      .title-desc {
        font-size: 14px;
        font-weight: 400;
        color: #1A1C28;
      }
    }

    .content-inner {
      .content-title {
        font-size: 14px;
        font-weight: 400;
        color: #4B5B76;
      }

      .content-text {
        font-size: 16px;
        font-weight: 500;
        color: #1A1C28;
      }
    }

    .content-deploy {
      font-size: 18px;
      font-weight: 600;
      color: #0052D9;
      cursor: pointer;
      margin-right: 20px;
    }
  }
}
</style>
