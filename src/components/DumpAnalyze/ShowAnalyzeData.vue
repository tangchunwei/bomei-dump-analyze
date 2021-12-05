<template>
  <div v-if="analyzeData.system_name!== undefined && analyzeData.system_name.length >=1">
    <el-tag type="danger" effect="dark" size="medium">{{
      analyzeData.system_name
    }}</el-tag>
  </div>

  <el-table :data="analyzeData.data" style="width: 80%" border="true">
    <el-table-column prop="data" label="数据项目" width="180" />
    <el-table-column prop="location" label="位置信息" width="180" />
    <el-table-column prop="code" label="具体代码" />
    <el-table-column prop="other" label="其他说明" />
  </el-table>
</template>

<script lang="js">
export default {
  name:'ShowAnalyzeData',
  props: ['analyzeData'],
}
</script>
