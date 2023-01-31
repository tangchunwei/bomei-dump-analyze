<template>
  <div class="Instructions">
    <section class="wow fadeInUp" v-for="(items, index) in getData" :key="items.id" data-wow-duration="2s" data-wow-delay=".2s">
      <ul>
        <li>
          <img :src="require(`/public/instructions/${items.cover}`)" alt="" />
          <p v-html="items.description"></p>
        </li>
        <li>
          <p class="content">产品简介 <a @click="toDetail(items,index)"  >：点击查看</a><br></p>
          <p class="content" v-for="(video,index) in items.content" :key="index">
            {{ video.name }}：<a :href="video.url" target="_blank">点击观看</a>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  components: {},
  data() {
    return {};
  },
  computed: {
    getData: () => (require("/public/json/Instructions.json") ? require("/public/json/Instructions.json").Instructions : ""),
  },
  watch: {},
  methods: {
    toDetail(item,index){
      if(item.detail.length > 0){
         this.$router.push({
        path:`/Detail/${index}`
      })
      }
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
.Instructions {
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
          a{
            cursor: pointer;
          }
        }
      }
    }
  }
  > section:last-child {
    border-bottom: unset;
  }
}
</style>
