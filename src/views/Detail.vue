<template>
  <div class="detail">
    <img :src="`/Instructions/${pic}`" v-for="(pic,index) in getData.detail" :key="index">
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    getData() {
     return require("/public/json/Instructions.json") ? require("/public/json/Instructions.json").Instructions[this.$route.params.id] : "";
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  text-align: center;
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 0.9375rem 0;
  margin: 0 auto;
  img{
    display: block;
    margin: 0 auto;
  }
}
</style>
