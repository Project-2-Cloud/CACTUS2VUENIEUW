<template>
  <div id="shop">
    <NavHeader />
    <router-view/>
  </div>
</template>

<script>
import NavHeader from "@/LandingPage.vue"
export default {
  components: {
    NavHeader
  },
  
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  }
}
</script>

