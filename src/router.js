import Vue from "vue";
import Router from "vue-router";
import LoginMain from "./views/login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "login",
      component: LoginMain,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});
