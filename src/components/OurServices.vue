<template>
  <v-container fluid>
    <div class="pt-16 py-12">
      <div class="text-center h2 font-weight-bold fontcolor py-16">
        Our Services
      </div>
      <v-row
        :class="$vuetify.breakpoint.mdAndUp"
        align="center"
        justify="center"
        class="my-5"
      >
        <v-card class="pa-2 mx-6 mb-4 rounded-xl si" elevation="15">
          <div class="pa-6 mx-11">
            <v-img class="s" :src="require('@/assets/codicon_tools.svg')">
            </v-img>
          </div>
          <div class="h3 font-weight-bold fontcolor">Resource Centre</div>
          <div>
            <p class="py-2">
              Provides an end-to-end service designed to minimise business risk
              and rule out potentially expensive mistakes.
            </p>
          </div>
        </v-card>

        <v-card class="pa-2 mx-6 mb-4 rounded-xl si" elevation="15">
          <div class="pa-6 mx-11">
            <v-img class="s" :src="require('@/assets/graphicon.svg')"></v-img>
          </div>
          <div class="h3 font-weight-bold fontcolor">Analytics</div>
          <div>
            <p class="py-2">
              Analytics help enterprises get valuable business information and
              insights by analyzing a mixture of structured, semi-structured and
              unstructured data.
            </p>
          </div>
        </v-card>

        <v-card class="pa-2 mx-6 mb-4 rounded-xl si" elevation="15">
          <div class="pa-6 mx-11">
            <v-img class="s" :src="require('@/assets/circleicon.svg')"></v-img>
          </div>
          <div class="h3 font-weight-bold fontcolor">Enterprise Mobility</div>
          <div>
            <p class="py-2">
              All about changing the way enterprises are connecting with people
              and also about how efficiently managing their resources, remotely.
            </p>
          </div>
        </v-card>

        <v-card class="pa-2 mx-6 mb-4 rounded-xl si" elevation="15">
          <div class="pa-6 mx-11">
            <v-img class="s" :src="require('@/assets/mobileicon.svg')"></v-img>
          </div>
          <div class="h3 font-weight-bold fontcolor">
            Application Development
          </div>
          <div>
            <p class="py-2">
              Application Development is our core offering. Our goal is to
              Partner with our customers in their growth plans and to build a
              long term relationship with them.
            </p>
          </div>
        </v-card>

        <v-card class="pa-2 mx-6 mb-4 rounded-xl si" elevation="15">
          <div class="pa-6 mx-11">
            <v-img class="s" :src="require('@/assets/gearicon.svg')"></v-img>
          </div>
          <div class="fontcolor h3 font-weight-bold">Technology Consulting</div>
          <div>
            <p class="py-2">
              Perfect IT consulting partner with well-defined strategies and
              deep domain expertise offering unique solutions.
            </p>
          </div>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default { name: "OurServices" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.h3 {
  font-size: 22px;
}
p {
  font-size: 13px;
}
.s {
  height: 64px;
  width: 64px;
}
.si {
  height: 312px;
  width: 219px;
}

@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 30px;
  }
  /* .h3 {
    font-size: 14px;
  }
  p {
    font-size: 8px;
  }

  .si {
    height: 230px;
    width: 160px;
  } */
}
</style>
