<template>
  <div>
    <div class="text-center mt-10 h2 font-weight-bold fontcolor">
      Our Clients
    </div>
    <v-row :class="$vuetify.breakpoint.mdAndUp">
      <div class="pa-12 mx-13">
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
    height: 130px;
    width: 250px;
  }
  .h2 {
    font-size: 30px;
  }
}
</style>
