import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { Auth0Plugin } from "./auth";
const domain = "dev-nyf4tc8zpdbtm55k.us.auth0.com";
const clientId = "0VVpunn8nVOEXVFe65NwigtRDrumfg0q";

Vue.use(Auth0Plugin, {
  domain,
  clientId,

  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,

  vuetify,

  render: (h) => h(App),
}).$mount("#app");
