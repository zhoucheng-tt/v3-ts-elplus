<!--
 * @Description:
 * @Author: zhoucheng
 * @Github: https://github.com/zhoucheng
 * @Date: 2023/12/22 09:53
 * @Path: src/views/ts/ts-effect/components/YamlJson.vue
-->
<template>
  <div class=""></div>
</template>

<script setup lang="ts">
let jsonObj = ref({
  "name": "Henry Black",
  "description": " Hi, there.\nNice to meet you!",
  "nickname": ["Henry", "O Black"],
  "optionals": {
    "married": false,
    "age": 23,
    "hobbies": [
      [{"name": "music", "weight": 0.8},
        {"name": "reading", "weight": 0.3},],
      [{"name": "sports", "weight": 0.7},
        {"name": "~", "weight": 0.5},]
    ],
  }
})

const yamlStr = ref(`name: Henry Black
description: |2-
   Hi, there.
  Nice to meet you!
nickname:
  - Henry
  - O Black
optionals:
  married: false
  age: 23
  hobbies:
    - - name: music
        weight: 0.8
      - name: reading
        weight: 0.3
    - - name: sports
        weight: 0.7
      - name: "~"
        weight: 0.5`)

// console.log(yamlToJson(yamlStr.value))
// console.log(jsonToYaml(jsonObj.value, 0, true))
</script>

<style lang='scss' scoped>

</style>
