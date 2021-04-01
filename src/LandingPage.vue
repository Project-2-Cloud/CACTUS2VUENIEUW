<!DOCTYPE html>
<template>
  <div>
    <Navigation />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Navigation from './BobbelNav.vue';
import Main from './BobbelMain';
import Footer from './BobbelFooter';

export default {
  components: {Navigation, Main, Footer},
  name: "LandingPage",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
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