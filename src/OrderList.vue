<template>
  <div>
    <a @click="onLogoutClicked" class="dropdown-item"
    >My orders </a
    >
    <div id="orderList" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              Shopping cart
            </h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
              <tr v-for="(item,idx) in inCart" :key="idx">
                <td>{{ item.title }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="removeFromCart(item)">&times;</button>
                </td>
              </tr>
              <tr>
                <th></th>
                <th>${{ total }}</th>
                <th></th>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Back to shop</button>
          </div>
        </div>
      </div>
    </div>
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
