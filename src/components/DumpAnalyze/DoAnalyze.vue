<template>
    <el-button @click="doAnalyze" type="success" size="big">提交分析</el-button>
</template>
<script setup lang="js">
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
        // if(this.tableData.data.length !== 0 ){
        //   this.$message.error('您已经提交分析，请不要重复提交！！！');
        //   return;
        // }
        let data = {"uuid":localStorage.uuid}
        axios.post('/analysis',data)
             .then(response => {
                //  console.log(response.data.data[0][0])
                this.tableData = {
                    data:[],
                    system_name:''
                },
                 this.tableData.system_name = response.data.data[0][0].rawname
                    response.data.data[0][0].value.forEach((value) => {
                        let obj={};
                        obj.data = value.a
                        obj.location = value.b
                        obj.code = value.c
                        obj.other = value.d
                        this.tableData.data.push(obj)
                    });
                })
        // console.log(this.tableData)
        this.$emit('analyzeData',this.tableData);
      }
  }
}
</script>