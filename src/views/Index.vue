<template>
  <div class="index_container">
    <h1>公司简介</h1>
    <hr />
    <section class="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
      <ul>
        <li>
          <img src="/index/pic1.jpg" alt="" />
          <p>公司创始人参与的行业展会</p>
        </li>
        <li>
          <h2>恒誉信<br />HENRYSIN</h2>
          <h5>
            公司于2016年，在有“创业之都，科技之城”美誉的深圳的<br />
            一个出租屋内诞生是主营门禁复制机，门禁卡，钥匙扣，手机贴<br />类的品牌，成立之初是一家小小的机器制作手工工坊，于2018年，<br />创始人坚持研发理念:“没有最好，只有更好”的当代匠人精神，<br />
            经历了很多失败与挑战，同时也主动寻求与行业优秀研发工程师合作，<br />匠人匠心独具，出品了多款自主研发设备，同时，获得多项专利。同年，<br />成功取得HENRYSIN商标注册权HENRYSIN从诞生之初，就凭借高效处理<br />客户提出的问题，紧跟行业发展日新月异的步伐及时解决门禁加密技术<br />出现的问题，从而在国内门禁卡设备圈内占得一席之地从而使得研发<br />
            生产销售与客户反馈形成一个良性循环的闭环，渴望成为大家出行装备智<br />能化专家<br />
            让大家轻松的出门，方便的回家，让大家称心如意，心情更美，致敬新时代<br />里每一个拼搏奋斗的你，我们都是美好生活创造者
          </h5>
        </li>
      </ul>
    </section>
    <section class="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">
      <ul>
        <li>
          <img src="/index/pic2.jpg" alt="" />
          <p>办公室</p>
        </li>
        <li>
          <img src="/index/pic3.jpg" alt="" />
          <p>办公室客服部</p>
        </li>
      </ul>
    </section>
    <section class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
      <ul>
        <li>
          <img src="/index/pic4.jpg" alt="" />
          <p>公司获得的荣誉</p>
        </li>
        <li>
          <img src="/index/pic5.jpeg" alt="" />
          <p>行业展会</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  computed: {
    
  },
  watch: {},
  methods: {
    
  },
  created() {},
  mounted() {
    // 在项目加载完成之后初始化wow
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
.index_container {
  position: relative;
  text-align: center;
  width: 75.5rem;
  border: 0.0625rem solid #ececec;
  box-shadow: 0.125rem 0.3125rem 0.625rem #aaaaaa;
  padding: 1.25rem 0.9375rem 0;
  margin: 0 auto;
  > h1 {
    display: inline-block;
    text-align: center;
    width: 20%;
    font-size: 2.25rem;
    line-height: 7.5rem;
    background: #fff;
  }
  > hr {
    z-index: -1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4.375rem;
    width: 90%;
  }
  > section {
    margin-bottom: 1.875rem;
    > ul {
      display: flex;
      justify-content: space-between;
      column-gap: 1.25rem;
      > li {
        width: 50%;
        > img {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
        }
        > h2 {
          text-align: left;
          font-size: 1.5rem;
          color: #9e0000;
          line-height: 1.875rem;
        }
        > p {
          text-align: center;
          line-height: 1.875rem;
        }
        > h5 {
          text-align: left;
          line-height: 1.75rem;
        }
      }
    }
  }
}
</style>
