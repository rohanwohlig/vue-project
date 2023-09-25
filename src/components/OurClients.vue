<template>
  <div>
    <div class="text-center mt-10 h2 font-weight-bold fontcolor">
      Our Clients
    </div>
    <v-row :class="$vuetify.breakpoint.mdAndUp" class="mx-5 py-16">
      <div
        class=""
        :class="{
          'ma-3 p2-2': $vuetify.breakpoint.smAndDown,
          'pl-16 mx-16': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-img
          class="szz"
          :src="require('@/assets/Property 1=Variant2.png')"
        ></v-img>
      </div>
    </v-row>
  </div>
</template>
<script>
export default { name: "OurClients" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.szz {
  height: 458;
  width: 1116;
}
@media only screen and (max-width: 600px) {
  .szz {
    height: 180px;
    width: 350px;
  }
  .h2 {
    font-size: 30px;
  }
}
</style>
