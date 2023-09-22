<template>
  <div id="app">
    <v-app>
      <v-app-bar
        absolute
        color="primary"
        dark
        inverted-scroll
        scroll-target="#scrolling-techniques-8"
        app
        elevation="2"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-side-icon>
          <v-img src="@/assets/logo.png" />
        </v-toolbar-side-icon>
        <v-tabs v-model="tab" centered dark icons-and-text>
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1"> Home </v-tab>

          <v-tab href="#tab-2"> About </v-tab>

          <v-tab href="#tab-3"> Nearby </v-tab>

          <v-tab href="#tab-3"> Contacts </v-tab>
        </v-tabs>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </v-app>

    <router-view></router-view>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: { HelloWorld },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blue;
  margin-top: 60px;
}
</style>
