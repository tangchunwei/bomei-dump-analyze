<template>
  <div class="Footer">
    <p>意见反馈：249339628@qq.com</p>
    <section>
      <p>CopyKEY 拷贝齐 闽ICP备18004668号</p>
      <p>Powered by CopyKEY</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.Footer {
  margin-top: 1.875rem;
  > p {
    text-align: right;
    width: 77.5rem;
    margin: 0 auto;
    line-height: 2;
  }
  > section {
    padding: 0.9375rem 0;
    background: #000;
    > p {
      text-align: center;
      font-size: 0.75rem;
      line-height: 1.875rem;
      color: #fff;
    }
    > p:nth-of-type(2) {
      color: #666;
    }
  }
}
</style>
