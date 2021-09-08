<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">使用简介</el-menu-item>
    <el-menu-item index="2">一键分析</el-menu-item>
    <el-menu-item index="3">后台登录</el-menu-item>
    <el-menu-item index="4">上传未知系统</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>