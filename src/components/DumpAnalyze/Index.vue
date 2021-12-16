<template>
  <el-container>
    <el-header> </el-header>
    <el-main>
      <el-row justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <ShowData :uploadData="this.uploadData" />
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light" >
            <el-row justify="center">
              <UploadData v-on={uploadData:getUploadData,analyzeData:getAnalyzeData} />
              <DoAnalyze v-on:analyzeData="getAnalyzeData"/>
            </el-row>
          </div>
          <el-divider></el-divider>
          <div class="grid-content bg-purple-light">
            <el-row justify="center">
              <ShowAnalyzeData  :analyzeData="this.analyzeData"/>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script lang="js">
import UploadData from "./UploadData.vue";
import ShowData from "./ShowData.vue";
import DoAnalyze from "./DoAnalyze.vue";
import ShowAnalyzeData from "./ShowAnalyzeData.vue";
export default {
  name:"AnalyzeIndex",
  data() {
    return {
      uploadData: "",
      analyzeData:""
    };
  },
  components: {
    UploadData,
    ShowData,
    DoAnalyze,
    ShowAnalyzeData
  },
  methods: {
    getUploadData(data) {
      this.uploadData = data;
    },
    getAnalyzeData(data) {
      this.analyzeData = data;
    },
  },
}
</script>