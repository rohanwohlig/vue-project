<template>
  <div class="login">
    <v-btn class="mx-5" x-small color="secondary" @click="login()" dark>
      Extra small Button
    </v-btn>

    <v-btn class="mx-5" color="success" @click="logout()" dark>logout</v-btn>

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
