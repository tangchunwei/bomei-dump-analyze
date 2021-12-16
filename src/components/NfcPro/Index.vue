<template>
  <el-container >
    <el-main>
      <div class="container">
        <div class="row nfc_jichu">
          <div class="col">
            NFCPRO 加强/专业/全能
          </div>
        </div>
        <div class="row nfc_jichu_miaoshu">
          <div class="col-6">
            <img src="@/assets/index2.jpg" alt="">
          </div>
          <div class="col-6 nfc_jichu_shebeijieshao">
            设备介绍
          </div>
        </div>
        <div class="row nfc_jichu_shipinlianjie">
          <div class="col-12">
            <b>NFCPRO专业/全能版：</b> <a target="_blank" href="/dowloads/zhuanye/NFC-PRO-zhuanye.exe">软件下载</a> <br>
            <b>NFCPRO专业/全能版绿色免安装：</b> <a target="_blank" href="/dowloads/zhuanye/NFC-PRO-lvse.exe">软件下载</a> <br>
            <b>NFCPRO专业/全能版使用视频：</b><a target="_blank" href="https://www.bilibili.com/video/BV1cK4y1Q7kA/">点击观看</a> <br>
            <b>全能版 深度解密：</b><a target="_blank" href="https://share.plvideo.cn/front/video/view?vid=e17b29daaba1f577a558c66284db2a4e_e">点击观看</a> <br>
            <b>滚动码判断操作：</b><a target="_blank" href="https://www.bilibili.com/video/BV18r4y1A7dr/">点击观看</a> <br>
            <b>侦测流程：</b><a target="_blank" href="https://www.bilibili.com/video/BV17p4y1p78P/">点击观看</a> <br>
            <b>写手环/手机：</b><a target="_blank" href="https://www.bilibili.com/video/BV1LU4y1x7Mh/">点击观看</a> <br>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>

</template>
<script lang="js">
export default {
  name:"NfcProIndex",
}
</script>
<style>
.nfc_jichu{
  margin-top:1rem;
  font-size:3rem;
  font-weight:bold;
}
.nfc_jichu_miaoshu img{
  width:100%;
  max-width: 100%;
  height: auto;
  text-align:center;
}
.nfc_jichu_miaoshu{
  margin-top:2rem;
}
.nfc_jichu_shebeijieshao{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border:solid 2px black;
  border-radius:2rem;;
  text-align:center;
  font-size:3rem;
}
.nfc_jichu_shipinlianjie{
  display: flex;
  align-items: center;
  margin-top:2rem;
  border:solid 2px rgb(47,82,143);
  border-radius:2rem;;
  /* height:15rem; */
  text-align:center;
}
</style>