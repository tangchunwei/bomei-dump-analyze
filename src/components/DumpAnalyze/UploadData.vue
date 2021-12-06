<template>
  <el-upload
    ref="my-upload"
    class="upload-demo"
    action="/api/upload"
    :on-preview="handlePreview"
    :on-success="onSuccess"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
    :on-remove="handleRemove"
    name="upload_dump"
  >
    <el-button size="big" type="primary">选择文件</el-button>
  </el-upload>
</template>
<script lang="js">
export default {
  name:"UploadData",
  methods: {
    handleRemove(){
      this.$emit('uploadData','');
      this.$emit('analyzeData','');
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed() {
      this.$message.warning(
        `重新上传前，请先移除当前dump文件`
      )
    },
    onSuccess(response){
      this.$message.success(
        `文件上传成功，请提交分析`
      )
      //保存文件uuid
      localStorage.uuid = response.uuid;
      //是否已经提交过请求
      localStorage.isReq = 0;
      this.$emit('uploadData',response);
      this.$emit('analyzeData','');
      // console.log(response);
      // console.log(file,fileLis);
      // console.log(fileLis);
    }

  },
}
</script>