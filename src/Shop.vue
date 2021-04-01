<template>
  <div id="shop">
    <LandingPage />
    <router-view/>
  </div>
</template>

<script>
import LandingPage from "@/LandingPage.vue"
export default {
  components: {
    LandingPage
  },
  
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getOrders");
  }
}
</script>

