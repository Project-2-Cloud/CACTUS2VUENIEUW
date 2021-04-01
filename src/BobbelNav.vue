<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Bobbel</title>
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
    </head>
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Bobbel</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 10%;
            "
            class="navbar-nav ml-auto"
          >
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded"
                href="landingPage.html"
                >Home
              </a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger navbutton"
                href="#about"
                >About</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger navbutton"
                href="#review"
                >Reviews</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a
                class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger navbutton"
                href="#contact"
                >Contact</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#shopscroll"
                >Shop
              </a>
            </li>
            <router-link
              to="/"
              tag="li"
              v-if="!isAuthenticated"
              class="nav-item"
              active-class="active"
            >
              <a @click="onLoginClicked" class="nav-link">Login</a>
            </router-link>

            <li v-if = false class="nav-item mx-0 mx-lg-1">
              <OrderList />
            </li>

            <li v-if="isAuthenticated" class="nav-item mx-0 mx-lg-1">
            <a @click="onLogoutClicked" class="nav-link py-3 px-0 px-lg-3 rounded"
            >Logout \\n {{ this.$store.state.user.name }}</a
            >
            </li>
            <li style="margin-left: 2rem;">
              <ShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">Bobbel</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">
          That's what all the FIZZ is about!
        </p>
        <a href="#shopscroll">
          <button class="btn btn-homePage btn-lg">BUY NOW</button>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
import OrderList from "./OrderList.vue";
export default {
  components: { ShoppingCart, OrderList },
  name: "NavHeader",
  computed: {
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
    userEmail() {
      return this.isAuthenticated ? this.currentUser.email : "";
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
