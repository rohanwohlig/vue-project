<template>
  <v-container fluid>
    <div class="mb-16">
      <div>
        <div class="text-center py-16 h2 font-weight-bold fontcolor">
          We Believe In
        </div>
        <div class="px-10">
          <v-row
            align="center"
            justify="center"
            :class="$vuetify.breakpoint.mdAndUp"
          >
            <v-col
              cols="12"
              lg="3"
              xs="6"
              sm="6"
              md="6"
              align="center"
              class=""
            >
              <div class="ml-3">
                <v-img
                  class="size"
                  :src="require('@/assets/Group 2.png')"
                ></v-img>
              </div>
              <div class="h3 font-weight-bold fontcolor">Proactive</div>
              <div>
                <p class="px-5 p2">
                  We are a products of our choices and not circumstances
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" xs="6" sm="6" md="6" align="center">
              <div class="ml-3">
                <v-img
                  class="size"
                  :src="require('@/assets/Group 3.png')"
                ></v-img>
              </div>
              <div class="h3 font-weight-bold fontcolor">
                First things first
              </div>
              <div>
                <p class="p2">We put important things first, not urgent</p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" xs="6" sm="6" md="6" align="center">
              <div class="ml-3">
                <v-img
                  class="size"
                  :src="require('@/assets/Group 4.png')"
                ></v-img>
              </div>
              <div class="h3 font-weight-bold fontcolor">End in mind</div>
              <div>
                <p class="p2">
                  We live by design Not <br />
                  "DEFAULT”
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" xs="6" sm="6" md="6" align="center">
              <div class="ml-3">
                <v-img
                  class="size"
                  :src="require('@/assets/Group 5.png')"
                ></v-img>
              </div>
              <div class="h3 font-weight-bold fontcolor">Think win-win</div>
              <div>
                <p class="px-3 p2">
                  We believe there is plenty of space for everyone & more to
                  share
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default { name: "WeBelieveIn" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.h3 {
  font-size: 28px;
}
.p2 {
  font-size: 20px;
}
.size {
  height: 150px;
  width: 150px;
}
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 30px;
  }
  .h3 {
    font-size: 14px;
  }
  .p2 {
    font-size: 10px;
  }
  .size {
    height: 75px;
    width: 75px;
  }
}
</style>
