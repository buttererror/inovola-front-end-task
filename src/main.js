import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/main.scss";
import { offCanvasEventListeners } from "./js/utils.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted() {
    offCanvasEventListeners();
  },
}).$mount("#app");
