<template>
  <div class="py-16">
    <v-row :class="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" lg="6" xs="12" sm="12" md="6" class="py-16 my-8 px-10">
        <div class="text-center pa-10 h2 font-weight-bold fontcolor">
          Wohlig partners with Shopify
        </div>
        <div>
          <v-card class="cardColor" outlined>
            <v-card-text>
              <v-row align="center">
                <v-col cols="6" class="pl-7">
                  <v-img
                    class="sizee"
                    :src="require('@/assets/image 2.png')"
                  ></v-img>
                </v-col>
                <v-col cols="6" class="pl-10">
                  <v-img
                    class="sizee"
                    :src="require('@/assets/image 3.png')"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        xs="12"
        sm="12"
        md="6"
        class="my-8"
        :class="{ 'pl-12 ml-7': $vuetify.breakpoint.smAndDown }"
      >
        <v-img class="siz" :src="require('@/assets/dev.svg')"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default { name: "WohligPartners" };
</script>
<style scoped>
.cardColor {
  background: #f5f5f4 !important;
  border-color: transparent !important;
}
.h2 {
  font-size: 45px;
}
.sizee {
  height: 80px;
  width: 282px;
}
.siz {
  width: 600px;
}

@media only screen and (max-width: 600px) {
  .cardColor {
    background: #f5f5f4 !important;
    border-color: transparent !important;
  }
  .h2 {
    font-size: 30px;
  }
  .sizee {
    height: 40px;
    width: 141px;
  }
  .siz {
    width: 300px;
  }
}
</style>
