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
      userId(){
        return this.$store.state.user.idToken;
      },

  },
  methods: {
    async getProducts(state) {
      let url = this.$store.state.endpoints.orders;
      let headers = { Accept: "application/json" };
      const products = await fetch(url+"/"+this.userId, { headers });
      const prods = await products.json();
      state.commit("setProducts", prods);
      console.log(prods);
    }

  }
};
</script>
