import Vue from "vue";
import Router from "vue-router";
import LoginMain from "./views/login.vue";
import events from "./views/events.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginMain,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/",
      name: "login",
      component: LoginMain,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/events",
      name: "events",
      component: events,
      //   meta: {
      //     requiresAuth: false,
      //   },
    },
  ],
});
