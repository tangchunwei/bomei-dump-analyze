import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSuperSlide from "vue-superslide";
import "./style/reset.css";
import "./style/normalize.css";
import "wowjs/css/libs/animate.css";
import wow from "wowjs";
import axios from "axios";
import {Dialog,TabPane,Tabs,Table,TableColumn, Button, Upload, Message, MessageBox } from "element-ui";
Vue.prototype.$wow = wow;
Vue.prototype.$axios = axios;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false;
Vue.use(VueSuperSlide);
Vue.use(Dialog);
Vue.use(TabPane);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Upload);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
