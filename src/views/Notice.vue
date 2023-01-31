<template>
  <div class="Notice">
    <section class="wow fadeInUp" @click="toNoticeDetail(index)" v-for="(item, index) in getNotice" :key="index"  data-wow-duration="2s" data-wow-delay=".2s">
      <ul>
        <li><img :src="item.cover" alt="" /></li>
        <li>
          <h3>{{ item.title }}</h3>
          <p>{{ item.updateMsg }}</p>
          <h5 v-html="item.content"></h5>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Notice",
  components: {},
  data() {
    return {};
  },
  computed: {
    getNotice: () => (require("/public/json/notice.json") ? require("/public/json/notice.json").notice : ""),
  },
  watch: {},
  methods: {
    toNoticeDetail(index){
      this.$router.push({
        path:'/NoticeDetail',
        query:{index}
      });
    }
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
.Notice {
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 0.9375rem;
  margin: 0 auto;
  > section {
    > ul {
      display: flex;
      column-gap: 1.875rem;
      padding: 1.25rem 0 1.875rem;
      border-bottom: 0.0625rem solid #efefef;
      cursor: pointer;
      > li {
        > img {
          display: block;
          width: 14.0625rem;
          height: 8rem;
        }
        > h3 {
          font-size: 1.125rem;
          line-height: 1.5rem;
          color: #333;
        }
        > p {
          font-size: 0.8125rem;
          line-height: 1.25rem;
          color: #999;
          padding: 0.5rem 0;
        }
        > h5 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 0.9375rem;
          line-height: 1.625rem;
          color: #666;
          padding: 0.125rem 0.3125rem 0.3125rem 0;
        }
      }
    }
  }
}
</style>
