<template>
  <div id="app">
   <Header :router='getRouter'></Header>
    <router-view/>
     <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
  computed:{
    getRouter(){
      return this.$route.name;
    }
  },
  mounted(){
    
  }
}
</script>
