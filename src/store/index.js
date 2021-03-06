import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

var url;
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    products: [],
    inCart: [],
    orders: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: ""
    },
    endpoints: {
      login: "http://localhost:3000/login",
      products: "http://localhost:8000/products",
      orders: "http://localhost:8000/orders"
    },
   },
   getters: {
    products: state => state.products,
    inCart: state => state.inCart,
   inOrders: state => state.orders,
   },
   mutations: { //synchronous
     setProducts(state, payload) {
       state.products = payload;
     },
   setOrders(state, payload) {
       state.orders = payload;
   },
     addToCart(state, payload) { 
      console.log(payload);
      state.inCart.push(payload);
     },
     removeFromCart(state, item) { 
       state.inCart.splice(item, 1); 
     },
     logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
     },
     login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
     },
     setUrls(state){
       console.log(process.env);
       state.endpoints.login = process.env.VUE_APP_AUTH_URL;
       state.endpoints.products = process.env.VUE_APP_PRODUCTS_URL;
       state.endpoints.orders = process.env.VUE_APP_ORDERS_URL;
       console.log(state.endpoints);
       url = state.endpoints.products;
     }
   },
   actions: { //asynchronous
     async getProducts(state) {
       const products = await fetch(url, { headers });
       const prods = await products.json();
       state.commit("setProducts", prods);
       console.log(prods);
     },
   async getOrders(state) {
       let url = this.$store.state.endpoints.orders;
       let headers = { Accept: "application/json" };
       const products = await fetch(url, { headers });
       const prods = await products.json();
       state.commit("setOrders", prods);
       console.log(prods);
   }
   },
  modules: {
  }
})