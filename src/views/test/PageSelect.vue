<!--
 * @Description:自写分页并实现跨页多选
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/11/21 15:17
 * @Path: src/views/test/PageSelect.vue
-->
<template>
  <div class="text-right">
    <el-button class="text-button"
               @click="batchDeploy">批量部署
    </el-button>
  </div>
  <div class="content">
    <div class="content-item"
         v-for="(item,index) in listShow"
         :key="index"
         :label="item.applicationId"
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
  <!--  分页区 -->
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
</template>

<script setup lang="ts">
const list = reactive([
  {id: "1", checked: false},
  {id: "2", checked: false},
  {id: "3", checked: false},
  {id: "4", checked: false},
  {id: "5", checked: false},
  {id: "6", checked: false},
  {id: "7", checked: false},
  {id: "8", checked: false},
  {id: "9", checked: false},
  {id: "10", checked: false},
])
const listShow = ref([])
const pageNum = ref(1)
const pageSize = ref(5)
const total = ref(list.length)

onMounted(() => {
  amount(pageNum.value, pageSize.value);
})

function handleClickItem(item: any) {
  console.log('点击每项', item.id)
}

function handleChangeCheckbox(item: any) {
  console.log('点击每项', item)
  // item.checked = true
}

function handleChangeRate(item: any) {
  console.log('点击评分', item.id)
}

function handleClickSingleDeploy(item: any) {
  console.log('点击部署按钮', item.id)
}

// 分页
function onChange(val: number) {
  listShow.value = [];
  pageNum.value = val;
  amount(pageNum.value, pageSize.value);
}

// 分页
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

function batchDeploy() {
  const a = list.filter(item => {
    if (item.checked === true) {
      return item
    }
  })
  console.log(a)
}
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  margin-top: 10px;

  .content-item {
    width: calc(100% - 60 * 2px);
    height: calc(100% - 23 * 2px);
    margin-top: 10px;
    padding: 23px 60px;
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
        width: 16px;
        height: 16px;
        border-radius: 1px;
        border: 1px solid #ADB0B8;
      }

      :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
        background: #0052D9;
      }
    }

    .title {
      width: 220px;

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
        font-family: PingFang Bold;
        font-weight: 600;
        color: #1A1C28;
        display: flex;
        align-items: center;

        .title-content-item {
          display: flex;
          align-items: center;
          margin-right: 12px;
          white-space: nowrap; /*设置不换行*/
          overflow: hidden; /*设置隐藏*/
          text-overflow: ellipsis; /*设置隐藏部分为省略号*/
        }
      }

      .title-desc {
        font-size: 14px;
        font-family: PingFang Regular;
        font-weight: 400;
        color: #1A1C28;
      }
    }

    .content-inner {
      .content-title {
        font-size: 14px;
        font-family: PingFang Regular;
        font-weight: 400;
        color: #4B5B76;
      }

      .content-text {
        font-size: 16px;
        font-family: PingFang Bold;
        font-weight: 500;
        color: #1A1C28;
      }
    }

    .content-deploy {
      font-size: 18px;
      font-family: PingFang Bold;
      font-weight: 600;
      color: #0052D9;
      cursor: pointer;
    }
  }
}
</style>
