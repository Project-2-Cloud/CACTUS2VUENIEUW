<template>
  <div>
    <a v-if="isAuthenticated" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger navbutton" data-toggle="modal" data-target="#orderList"
    >My orders </a
    >
    <div id="orderList" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Your Order List:
            </h5>
              <button class="close" data-dismiss="modal">
                &times;
              </button>
            <div class="modal-body">
              <table class="table">
                <tbody>
                <tr v-for="(item,idx) in inCart" :key="idx">
                  <td>{{ item.title }}</td>
                  <td>${{ item.price }}</td>
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
  </div>
</template>

<script>



export default {
  name: 'OrderList',
  computed: {

      isAuthenticated() {
        return this.$store.state.user.isAuthenticated;
      },

      inCart() {
        return this.$store.getters.inOrders;
      },

  },
  methods: {


  }
};
</script>
