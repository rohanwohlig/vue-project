<template>
  <v-app id="app">
    <v-app-bar height="96px" background-color="#F5F5F4" fixed>
      <v-btn
        class="d-none-xl-show"
        outlined
        border-none
        style="border: none"
        @click.stop="drawer = !drawer"
      >
        <v-icon>menu </v-icon>
      </v-btn>
      <div class="mx-2">
        <v-img
          :src="require('@/assets/image 1.png')"
          height="40"
          contain
        ></v-img>
      </div>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-toolbar-title>Title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <div right class="px-5 mx-10 d-none-xl-hide">
        <a href="#home" class="text-size text-decoration-none fontcolor mx-5"
          >Home</a
        >
        <a href="#about" class="text-size text-decoration-none fontcolor mx-5"
          >About Us</a
        >

        <a href="#service" class="text-size text-decoration-none fontcolor mx-5"
          >Service</a
        >

        <a href="#work" class="text-size text-decoration-none fontcolor mx-5"
          >Work Process</a
        >

        <a href="#client" class="text-size text-decoration-none fontcolor mx-5"
          >Client</a
        >

        <a href="#contact" class="text-size text-decoration-none fontcolor mx-5"
          >Contacts</a
        >
        <button
          class="text-size mx-5"
          v-if="!$auth.isAuthenticated"
          @click="login()"
        >
          Login
        </button>
        <button
          class="text-size mx-5"
          v-if="$auth.isAuthenticated"
          @click="logout()"
        >
          Logout
        </button>
      </div>
      <div right class="px-5 mx-10 d-none-xl-show">
        <button
          class="text-size mx-5"
          v-if="!$auth.isAuthenticated"
          @click="login()"
        >
          Login
        </button>
        <button
          class="text-size mx-5"
          v-if="$auth.isAuthenticated"
          @click="logout()"
        >
          Logout
        </button>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      class="d-none-xl-show"
      v-model="drawer"
      app
      left
      style="transition: 0.3s"
    >
      <v-list-item>
        <v-btn
          outlined
          border-none
          style="border: none"
          @click="drawer = !drawer"
        >
          <v-icon size="18">close</v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item title="Home" href="#home"> Home </v-list-item>
      <v-list-item title="About Us" href="#about"> About Us </v-list-item>
      <v-list-item title="Service" href="#service">Service </v-list-item>
      <v-list-item title="Work Process" href="#work">Work Process </v-list-item>
      <v-list-item title="Client" href="#client">Client </v-list-item>
      <v-list-item title="Contacts" href="#contact">Contacts </v-list-item>
    </v-navigation-drawer>

    <main>
      <section>
        <home-page id="home" class="pt-16"></home-page>
        <about-us id="about" class="pt-16"></about-us>
        <we-believe-in class="pt-16"></we-believe-in>
        <vision-mission class="pt-16"></vision-mission>
        <wohlig-partners class="pt-16"></wohlig-partners>
        <our-services id="service"></our-services>
        <work-in-process id="work" class="pt-16"></work-in-process>
        <our-clients id="client" class="pt-16"></our-clients>
        <contacts-us id="contact" class="pt-16"></contacts-us>
      </section>
    </main>

    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import AboutUs from "./components/AboutUs.vue";
import WeBelieveIn from "./components/WeBelieveIn.vue";
import VisionMission from "./components/VisionMission.vue";
import WohligPartners from "./components/WohligPartners.vue";
import OurServices from "./components/OurServices.vue";
import WorkInProcess from "./components/WorkInProcess.vue";
import OurClients from "./components/OurClients.vue";
import ContactsUs from "./components/ContactsUs.vue";

export default {
  name: "App",
  data: function () {
    return {
      drawer: false,
    };
  },

  components: {
    HomePage,
    AboutUs,
    WeBelieveIn,
    VisionMission,
    WohligPartners,
    OurServices,
    WorkInProcess,
    OurClients,
    ContactsUs,
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect().catch(() => {});
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  margin-top: 60px;
}
.text-size {
  font-size: 18px;
}
main {
  background: #f5f5f4;
}
.cardColor {
  background: #f5f5f4 !important;
  border-color: transparent !important;
}
.d-none-xl-show {
  display: none !important;
}

@media only screen and (max-width: 1048px) {
  .d-none-xl-show {
    display: block !important;
  }
  .d-none-xl-hide {
    display: none !important;
  }
}

/* .cardColor {
  background-color: white !important;
  border-color: transparent !important;
} */
</style>
