<template>
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
</template>

<script>
import UploadData from "./components/DumpAnalyze/UploadData.vue";
import ShowData from "./components/DumpAnalyze/ShowData.vue";
import DoAnalyze from "./components/DumpAnalyze/DoAnalyze.vue";
import ShowAnalyzeData from "./components/DumpAnalyze/ShowAnalyzeData.vue";
export default {
  name: "App",
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
