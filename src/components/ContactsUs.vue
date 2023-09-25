<template>
  <div>
    <div class="text-center mt-10 h2 font-weight-bold fontcolor">
      Contact Us
    </div>

    <v-row class="py-10 px-16"
      ><v-col cols="12" lg="3" xs="12" sm="6" md="6" class="text-left">
        <div class="szz">
          <div class="h4 font-weight-bold">MUMBAI OFFICE</div>
          <div>
            <p>
              Unit No 805 and 806, 8th Floor,Neelkanth Corporate Park,Near
              Vidyavihar Station,Vidyavihar (West), Mumbai 400086,Maharashtra,
              India.CIN: U72900MH2016PTC286381
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="3" xs="12" sm="6" md="6" class="text-left">
        <div class="szz">
          <div class="h4 font-weight-bold">LONDON OFFICE</div>
          <p>
            Robinson Suite 2, 5th Floor, AMBA House, 15 College Road, Harrow,
            HA1 1BA, UK.
          </p>
        </div>
      </v-col>
      <v-col cols="12" lg="3" xs="12" sm="6" md="6" class="text-left">
        <div class="szz">
          <div class="h4 font-weight-bold">DUBAI OFFICE</div>
          <p>
            Meydan - Free Zone, The Meydan Hotel, Dubai, U.A.E.Company License
            Number: 2201776.01
          </p>
        </div>
      </v-col>
      <v-col cols="12" lg="3" xs="12" sm="6" md="6" class="text-left">
        <div class="szz">
          <div class="h4 font-weight-bold">CONTACT DETAILS</div>
          <p>Email: info@wohlig.com</p>
        </div></v-col
      >
    </v-row>
    <v-row class="pa-16">
      <v-col>
        <div class="text-center footer">
          Copyright © 2023 Wohlig Transformations Pvt. Ltd.
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default { name: "ContactsUs" };
</script>
<style scoped>
.h2 {
  font-size: 45px;
}
.h4 {
  font-size: 20px;
  color: #31373d;
  line-height: 24px;
}
p {
  font-size: 14px;
  color: #31373db2;
  line-height: 24px;
}
.footer {
  font-size: 18px;
  color: #31373db2;
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
