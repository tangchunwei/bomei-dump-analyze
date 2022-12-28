<template>
  <div id="Header">
    <div class="container">
      <img src="../assets/header/logo.png" alt="" />
      <superslide :options="options" class="slideBox" v-if="isShow">
        <div class="bd">
          <ul id="nav" class="nav clearfix">
            <li class="nLi" :class="{ on: String(router) === 'index' }">
              <h3>
                <router-link to="/"> 首页 </router-link>
              </h3>
            </li>
            <li class="nLi" :class="{ on: (String(router) === 'Notice') || (String(router) === 'NoticeDetail') }">
              <h3>
                <router-link to="/Notice"> 公告 </router-link>
              </h3>
            </li>
            <li class="nLi" :class="{ on: String(router) === 'Instructions' }">
              <h3>
                <router-link to="/Instructions"> 使用说明 </router-link>
              </h3>
            </li>

            <li class="nLi" :class="{ on: String(router) === 'Download' }">
              <h3>
                <router-link to="/Download"> 软件下载 </router-link>
              </h3>
            </li>

            <li class="nLi" :class="{ on: String(router) === 'DataAnalysis' }">
              <h3>
                <router-link to="/DataAnalysis"> 数据分析 </router-link>
              </h3>
            </li>

            <!-- <li class="nLi" :class="{ on: String(router) === 'Feedback' }">
              <h3>
                <router-link to="/Feedback"> 意见反馈 </router-link>
              </h3>
            </li> -->
          </ul>
        </div>
      </superslide>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: ["router"],
  data() {
    return {
      isShow: true, //实现局部刷新
      options: {
        type: "menu", // 效果类型，针对菜单/导航而引入的参数（默认slide）
        titCell: ".nLi", //鼠标触发对象
        targetCell: ".nLi", //titCell里面包含的要显示/消失的对象
        triggerTime: 0, //鼠标延迟触发时间（默认150）
        returnDefault: true, //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
      },
    };
  },
  computed: {},
  watch: {
    router: function () {
      this.reload();
    },
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
#Header {
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  .container {
    width: 77.5rem;
    height: 4.5rem;
    margin: 1.875rem auto;

    > img {
      height: 100%;
      float: left;
    }
    .slideBox {
      float: right;
      .bd {
        .nav {
          display: flex;
          column-gap: 3.75rem;
          height: 4.5rem;
          line-height: 4.5rem;
          .nLi {
            > h3 {
              > a {
                font-size: 1.125rem;
                padding: 0.625rem;
                color: #333;
              }
            }
          }
          .nLi.on {
            > h3 {
              > a {
                border-bottom: 1px solid #ff0000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
