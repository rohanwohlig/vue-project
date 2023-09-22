<template>
  <div class="login">
    <button
      class="btn btn-primary btn-block"
      v-if="!$auth.isAuthenticated"
      @click="login()"
    >
      Log In
    </button>

    <v-btn class="h3" color="success" @click="logout()" dark>logout</v-btn>

    <v-btn x-small color="secondary" dark> Extra small Button </v-btn>
  </div>
</template>

<script>
export default {
  name: "LoginMain",

  props: {
    msg: String,
  },

  data() {
    return {};
  },

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },

    logout() {
      this.$auth.logout();
    },
  },
};
</script>
