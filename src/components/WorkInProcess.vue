<template>
  <v-container fluid>
    <div class="py-16">
      <div class="text-center h2 pa-16 font-weight-bold fontcolor">
        Let’s Work Together!
      </div>

      <v-row
        :class="$vuetify.breakpoint.mdAndUp"
        align="center"
        justify="center"
        class="pa-16"
      >
        <v-card class="pa-2 mx-6 mb-4 rounded-xl sisi" elevation="15">
          <div class="h3 font-weight-bold fontcard">Meet & Discuss</div>
          <div>
            <p class="py-2 fontcardp">
              We meet and discuss to make scope and planning.
            </p>
          </div>
        </v-card>
        <v-card class="pa-2 mx-6 mb-4 rounded-xl sisi" elevation="15">
          <div class="h3 font-weight-bold fontcard">Scope & Plan</div>
          <div>
            <p class="py-2 fontcardp">We scope and plan it accordingly.</p>
          </div>
        </v-card>
        <v-card class="pa-2 mx-6 mb-4 rounded-xl sisi" elevation="15">
          <div class="h3 font-weight-bold fontcard">Develop & Launch</div>
          <div>
            <p class="py-2 fontcardp">
              With plan we develop accordingly and launch.
            </p>
          </div>
        </v-card>
      </v-row>
    </div>
    <div>
      <v-flex class="d-flex justify-center">
        <v-btn class="gradcolor white--text" x-large>Contact Us</v-btn>
      </v-flex>
    </div>
  </v-container>
</template>
<script>
export default { name: "WorkInProcess" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.h3 {
  font-size: 30px;
}
p {
  font-size: 20px;
}

.sisi {
  height: 168px;
  width: 309px;
}
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 30px;
  } /* .h3 { font-size:
14px; } p { font-size: 8px; } .si { height: 230px; width: 160px; } */
}
</style>
