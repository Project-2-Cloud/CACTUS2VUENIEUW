<template>
  <div>
    <Navigation />
    <Main />
    <Shop />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Navigation from './BobbelNav.vue';
import Main from './BobbelMain';
import Footer from './BobbelFooter';
import Shop from './views/Shop.vue';

export default {
  components: {Navigation, Main, Shop, Footer},
  name: "LandingPage",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    }, 
  },
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  },
  methods: {
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    getUserName() {
      return this.$store.state.user.name;
    },
  },
};
</script>

