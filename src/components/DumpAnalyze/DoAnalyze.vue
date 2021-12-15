<template>
  <el-row>
      <el-button @click="doAnalyze" type="success" size="big">提交分析</el-button>
  </el-row>
</template>
<script lang="js">
import  axios  from "axios";
export default {
  name: 'DoAnalyze',
    data() {
    return {
      tableData: {
        data:[],
        system_name:''
      },
    }
  },
  methods:{
      doAnalyze(){
        if(localStorage.isReq== 1 ){
          this.$message.error('您已经提交分析，请上传新的文件！！');
          return;
        }
        let data = {"uuid":localStorage.uuid}
        axios.post('/api/analysis',data)
             .then(response => {
               if(response.data.data[0][0] == undefined){
                 this.$message.error('暂无分析数据，请更换dump');
                  return;
               }
                 this.tableData.system_name = response.data.data[0][0].rawname
                    response.data.data[0][0].value.forEach((value) => {
                        let obj={};
                        obj.data = value.a
                        obj.location = value.b
                        obj.code = value.c
                        obj.other = value.d
                        this.tableData.data.push(obj)
                    });
                    //标记为已经提交过请求
                  localStorage.isReq = 1
                })
        // console.log(this.tableData)
        this.$emit('analyzeData',this.tableData);
      }
  }
}
</script>