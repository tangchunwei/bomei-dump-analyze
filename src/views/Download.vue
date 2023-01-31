<template>
  <div class="Download">
    <section class="wow fadeInUp" v-for="(items, index) in getData" :key="index" data-wow-duration="2s" data-wow-delay=".2s">
      <ul>
        <li>
          <img :src="require(`/public/instructions/${items.cover}`)" alt="" />
          <p v-html="items.description"></p>
        </li>
        <li>
          <p class="content" v-for="(video, index) in items.content" :key="index">
            {{ video.name }}：<a :href="video.url" target="_blank">点击下载</a>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Download",
  components: {},
  data() {
    return {};
  },
  computed: {
    getData: () => (require("/public/json/download.json") ? require("/public/json/download.json").download : ""),
  },
  watch: {},
  methods: {},
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
.Download {
  text-align: center;
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 0.9375rem;
  margin: 0 auto;
  > section {
    padding: 1.25rem 0;
    border-bottom: 0.0625rem solid #999;
    > ul {
      display: flex;
      column-gap: 12.5rem;
      align-items: center;
      > li {
        > img {
          width: 18.75rem;
        }
        > p {
          columns: #000;
          line-height: 1.875rem;
        }
        > p.content {
          text-align: left;
        }
      }
    }
  }
  > section:last-child {
    border-bottom: unset;
  }
}
</style>
