import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import { routes } from "./router";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(vueRouter);
const router = new vueRouter({
  mode: "history",
  routes,
});
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
