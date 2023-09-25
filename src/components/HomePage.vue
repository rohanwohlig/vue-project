<template>
  <v-container fluid>
    <v-row :class="$vuetify.breakpoint.mdAndUp">
      <v-col
        cols="12"
        lg="6"
        xs="12"
        sm="12"
        md="6"
        class="pl-10 py-8"
        :class="{ 'mr-16 pr-10': $vuetify.breakpoint.smAndDown }"
      >
        <v-card class="my-16 cardColor" width="100%" outlined>
          <div class="text-center h1">
            <div class="px-16 h1 font-weight-bold fontcolor">
              Transforming the Perspective of Technology
            </div>
          </div>

          <div class="text-center p1">
            <p class="py-8">
              The catalyst that empowers to take advantage of the digital
              revolution.
            </p>
          </div>
          <div class="text-center h2">
            <v-btn class="gradcolor white--text h4" x-large>
              Let’s work together!
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" xs="12" sm="12" md="6" class="pr-0">
        <div class="">
          <!-- <v-img :src="require('@/assets/image4.png')" max-width="600">
            <v-img
              :src="require('@/assets/12307-removebg-preview 1.png')"
            ></v-img>
          </v-img> -->
          <v-img :src="require('@/assets/handworld.svg')"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default { name: "HomePage" };
</script>
<style scoped>
.h1 {
  font-size: 64px;
  line-height: 72px;
}
.h4 {
  font-size: 20px;
}
v-btn {
  color: #ffffff;
}

.p1 {
  font-size: 24px;
  line-height: 28px;
}
@media only screen and (max-width: 600px) {
  .h1 {
    font-size: 30px;
    line-height: 36px;
  }
  .h4 {
    font-size: 10px;
  }
  .p1 {
    font-size: 12px;
    line-height: 14px;
  }
}
</style>
