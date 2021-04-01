<template>
  <div>
    <a @click="onLogoutClicked" class="dropdown-item"
    >My orders </a
    >
  </div>
</template>
<script>

export default {
  name: 'OrderList',
  computed: {
    userId(){
      return this.$store.state.user.idToken;
    },
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    total() {
      return this.inCart.reduce((acc, cur) => acc + cur.price, 0);
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {

  }
};
</script>
