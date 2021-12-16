<template>
  <div class="container">
    <div class="row nav_images">
      <div class="col-4">
        <a href="/nfc_base"><img src="@/assets/index1.jpg" alt=""> <br></a>
        <a href="/nfc_base">NFCPRO 基础</a>
      </div>
      <div class="col-4">
        <a href="/nfc_pro"><img src="@/assets/index2.jpg" alt=""> <br></a>
        <a href="/nfc_pro">NFCPRO 加强/专业/全能</a>
      </div>
      <div class="col-4">
        <a href="/dump_analyze"><img src="@/assets/index3.jpeg" alt=""> <br></a>
        <a href="/dump_analyze">数据分析</a>
      </div>
    </div>
    <div class="row fenge">
      <div class="col">
        -----------------------
      </div>
    </div>
    <div class="row tupian">
      <div class="col">
        <img src="@/assets/20201110184715.jpg" alt="" class="img-responsive center-block">
      </div>
    </div>
  </div>
</template>
<script lang="js">
export default {
  name: "Index",
}
</script>
<style>
.nav_images{
  margin-top:50px;
  text-align:center;
  font-size:25px;
  font-weight:bold;
}
.nav_images img{
  width:50%;
  max-width: 100%;
  height: auto;
  text-align:center;
}
.nav_images a{
  text-decoration:none;
  color:#333;
}
.nav_images a:hover{
  color:red;
}
.fenge{
  text-align:center;
  color:red;
  font-weight:bold;
  font-size:25px;
}
.tupian{
  text-align:center;
}
.tupian img{
  width:50%;
  height: auto;
  text-align:center;
}
</style>