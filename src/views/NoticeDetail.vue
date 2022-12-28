<template>
  <div class="NoticeDetail">
    <main>
        <h1>{{getDetail.title}}</h1>
        <p v-html="getDetail.updateMsg"></p>
        <h5 v-html="getDetail.content"></h5>
    </main>
  </div>
</template>

<script>
export default {
  name: "NoticeDetail",
  components: {},
  data() {
    return {};
  },
  computed: {
    getDetail() {
      const index = this.$route.query.index;
      return require("@/assets/json/notice.json") ? require("@/assets/json/notice.json").notice[index] : "";
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.NoticeDetail {
  text-align: left;
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 2.1875rem;
  margin: 0 auto;
  >main{
    >h1{
        font-size: 1.375rem;
        color: #444;
        line-height: 3;
    }
    >p{
        font-size: .75rem;
        color: #999;
    }
    >h5{
        line-height: 2.5;
        padding-top: 1.875rem;
    }
  }
}
</style>
