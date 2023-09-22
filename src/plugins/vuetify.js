import Vue from "vue";

import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css"; // Add this line

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // 'md' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: true,
  },
  themes: {
    light: {
      primary: "#4682b4",
      secondary: "#b0bec5",
      accent: "#8c9eff",
      error: "#b71c1c",
    },
  },
});
