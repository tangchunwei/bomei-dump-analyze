<template>
  <div class="DataAnalysis">
    <aside  class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
      <div class="no_data" v-if="rawdata.length <= 0"><img src="@/assets/noData.jpg" alt="" /></div>
      <div class="show_data" v-for="(item, index) in rawdata" :key="index">
        <p v-if="index % 4 === 0">{{ index / 4 }}扇区:</p>
        {{ item }}
      </div>
    </aside>
    <main>
      <el-tabs v-model="activeName" type="border-card" class="wow fadeInDown" data-wow-duration="2s" data-wow-delay=".2s">
        <el-tab-pane
          :label="item.name ? item.name : '未上传文件'"
          :name="String(index) ? String(index) : '0'"
          v-for="(item, index) in tableData"
          :key="index ? index : '0'"
        >
          <el-table :data="item.value" :row-class-name="tableRowClassName" :key="activeName">
            <el-table-column prop="a" label="数据项目"> </el-table-column>
            <el-table-column prop="b" label="位置信息"> </el-table-column>
            <el-table-column prop="c" label="具体代码"> </el-table-column>
            <el-table-column prop="d" label="其他说明"> </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-upload
        class="upload wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay=".2s"
        action="/api/upload"
        :on-remove="handleRemove"
        :on-success="upload"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
        name="upload_dump"
      >
        <el-button type="primary">点击上传</el-button>
        <el-button type="success" @click.stop="confirm_analysis">提交分析</el-button>
      </el-upload>
      <el-dialog title="温馨提示" :visible.sync="centerDialogVisible" width="30%" center>
        <span>{{ tip }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">好的</el-button>
        </span>
      </el-dialog>
    </main>
  </div>
</template>

<script>
import { toAnalysis } from "../api/index";
export default {
  name: "DataAnalysis",
  components: {},
  data() {
    return {
      tip: "请先上传文件哦~",
      centerDialogVisible: false,
      uuid: "",
      activeName: "0",
      rawdata: [],
      tableData: ["1"],
    };
  },
  computed: {
    fileList() {
      return [];
    },
  },
  watch: {},
  methods: {
    async confirm_analysis() {
      if (this.uuid && this.tableData[0] == 1) {
        let params = { uuid: this.uuid };
        const result = await toAnalysis(params);
        if (result && result.data.code == 200) {
          this.tableData = result.data.data[0];
        } else {
          this.$message.error("分析失败，请刷新页面重新上传~");
        }
      } else if (this.tableData[0] != 1) {
        this.tip = "当前文件已分析完成~";
        this.centerDialogVisible = true;
      } else {
        this.tip = "请先上传文件哦~";
        this.centerDialogVisible = true;
      }
    },
    upload(res) {
      this.rawdata = res.rawdata;
      this.uuid = res.uuid;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    handleRemove(file, fileList) {
      //数据初始化
      this.uuid = "";
      this.rawdata = [];
      this.tableData = ["1"];
      this.activeName = "0";
    },
    handleExceed(files, fileList) {
      this.$message.warning(`请先移除当前文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      new this.$wow.WOW({
        animateClass: "animated",
        offset: 10,
        mobile: true,
        live: true,
      }).init();
    });
  },
};
</script>

<style lang="less" scoped>
.DataAnalysis {
  display: flex;
  column-gap: 1.875rem;
  text-align: center;
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 0.9375rem;
  margin: 0 auto;
  > aside {
    width: 25rem;
    height: 48.75rem;
    border: 0.0625rem solid #efefef;
    overflow: auto;
    .no_data {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .show_data {
      font-size: 1.125rem;
      padding: 1.25rem 0.9375rem;
      > p {
        line-height: 1.875rem;
      }
    }
  }
  > main {
    flex: 1;
    .upload {
      width: 50%;
      margin: 0 auto;
      overflow: hidden;
      /deep/.el-upload-list__item {
        transition: unset;
      }
    }
  }
}
/deep/.el-table {
  min-height: 19.375rem;
  .warning-row {
    background: oldlace;
  }
  .success-row {
    background: #f0f9eb;
  }
  .el-table__cell {
    width: 11.25rem;
  }
}
/deep/.el-upload {
  margin-top: 1.875rem;
  > button {
    margin: 0 1.875rem;
  }
}
/deep/.el-dialog {
  border-radius: 0.75rem;
  .el-dialog__body {
    text-align: center;
  }
  .el-dialog__footer {
    .el-button--primary {
      width: 30%;
    }
  }
}
</style>
