<template>
  <v-container fluid>
    <div class="mb-16">
      <div class="text-center h2 py-16 font-weight-bold fontcolor">
        Vision & Mission
      </div>

      <v-row :class="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" lg="12" xs="12" sm="12" md="12">
          <div>
            <v-card
              height="168"
              width="748"
              color="#00B0C2
"
              class=""
            >
              <div class="pa-6 mx-14">
                <div class="h3 font-weight-bold">Vision</div>
                <div>
                  <p class="p2">
                    To be a benchmark company in the industry that stands for
                    Innovation, Integrity, Accountability And Commitment.
                  </p>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row :class="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" lg="12" xs="12" sm="12" md="12" class="">
          <div class="d-flex align-center justify-end">
            <v-card height="168" width="748" color="#86c140">
              <div class="pa-6 mx-14 my-5">
                <div class="h3 font-weight-bold">Mission</div>
                <div>
                  <p class="p2">
                    To create paradigm shifts, through smarter & innovative
                    solutions.
                  </p>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default { name: "VisionMission" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.h3 {
  font-size: 28px;
  color: #ffffff;
}
.p2 {
  font-size: 20px;
  color: #ffffff;
}
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 30px;
  }
  .h3 {
    font-size: 20px;
    color: #ffffff;
  }
  .p2 {
    font-size: 15px;
    color: #ffffff;
  }
}
</style>
