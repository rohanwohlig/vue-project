<template>
  <div>
    <v-row :class="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" lg="4" xs="12" sm="12" md="6">
        <v-img
          :src="require('@/assets/Clip path group.png')"
          class="pixcel"
        ></v-img>
      </v-col>
      <v-col cols="12" lg="8" xs="12" sm="12" md="6">
        <div class="mt-16 py-16">
          <div class="text-center pt-16 h2 font-weight-bold fontcolor">
            About Us
          </div>

          <div class="text-center p1 px-16">
            <p class="">
              Wohlig is catalyst that transforms the clients perspective of
              technology and empowers them to take advantage of the digital
              revolution that is constantly evolving.
            </p>
            <p class="">
              We simply want to help you leverage through our expertise to make
              your business efficient, cutting- edge and have a low cost of
              ownership.
            </p>
            <p class="pb-16">
              The core objective from the outset is to give the client a
              scalable paradigm shift through extensive use of modern
              technology, innovation, constant research on upcoming trends and
              malleable operational processes.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default { name: "AboutUs" };
</script>
<style>
.h2 {
  font-size: 45px;
}
.p1 {
  font-size: 22px;
}
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 30px;
  }
  .p1 {
    font-size: 11px;
  }
  .pixcel {
    width: 50%;
  }
}
</style>
