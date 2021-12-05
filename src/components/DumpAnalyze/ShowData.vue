<template>
  <div id="show_data">
    <pre v-if="this.uploadData!=='' ">
      <span v-for="(v,k) in this.uploadData.rawdata"  v-bind:key="k">
      <br>  <span v-if="k%4===0">{{k/4}}扇区:</span>  
        <br> <span>  {{ v }} </span>
      </span>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ShowData',
  props: ['uploadData'],
  data(){
    return {
     
    }
  },
  methods:{
    test(){
      console.log(this.uploadData)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show_data{
  overflow:auto;
  height: 600px;
  background-color: #f5f5f5;
  vertical-align: middle;
  text-align: justify; 
  text-align: center;
}
span{
  width:70%;
  font-weight:normal;
  font-size:18px;
  word-wrap:break-word;
  white-space:normal;
}
pre{
  white-space: pre-wrap; /* css-3 */
  word-wrap: break-word; /* InternetExplorer5.5+ */
  white-space: -moz-pre-wrap; /* Mozilla,since1999 */
  white-space: -pre-wrap; /* Opera4-6 */
  white-space: -o-pre-wrap; /* Opera7 */
}
</style>
