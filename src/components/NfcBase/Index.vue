<template>
  <el-container>
    <el-main>
      <div class="container">
        <div class="row nfc_jichu">
          <div class="col">
            NFCPRO 基础版
          </div>
        </div>
        <div class="row nfc_jichu_miaoshu">
          <div class="col-6">
            <img src="@/assets/index1.jpg" alt="">
          </div>
          <div class="col-6 nfc_jichu_shebeijieshao">
            设备介绍
          </div>
        </div>
        <div class="row nfc_jichu_shipinlianjie">
          <div class="col-12">
            <b>NFCPRO基础版</b> <a target="_blank" href="/dowloads/jichu/NFC-122.exe">软件下载</a> <br>
            <b>NFCPRO基础版绿色免安装：</b> <a target="_blank" href="/dowloads/jichu/NFC-122-lvse.exe">软件下载</a> <br>
            <b>NFC基础版使用视频：</b><a target="_blank" href="https://www.bilibili.com/video/BV12y4y1U7LL/">点击观看</a> <br>
            <b>NFC基础版写手环/手机：</b><a target="_blank" href="https://www.bilibili.com/video/BV1Ny4y1Y7Py/">点击观看</a> <br>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>

</template>
<script lang="js">
export default {
  name:"NfcBaseIndex",
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