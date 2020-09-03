import { vuexfireMutations, firestoreAction } from "vuexfire";

export default {
  state: () => ({
    products: [],
    cart: [],
    total: {},
    orders: []
  }),
  mutations: {
    ...vuexfireMutations,
    getProducts(state, payload) {
      state.products.concat(payload);
    },
    persistCart(state, payload) {
      state.cart = payload;
    },
    addToCart(state, payload) {
      let found = state.cart.find(product => product.id == payload.id);

      if (found) {
        found.quantity++;
      } else {
        state.cart.push(payload);
      }

      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, payload) {
      let found = state.cart.find(product => product.id == payload.id);
      let index = state.cart.indexOf(payload);
      if (found.quantity > 1) {
        found.quantity--;
      } else {
        state.cart.splice(index, 1);
      }

      this.commit("saveData");
    },
    clearCart(state, payload) {
      state.cart = payload;
      this.commit("saveData");
    },
    calcTotal(state, payload) {
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      let reduceItems = (accumulator, currentValue) =>
        accumulator + currentValue + payload.comma;
      let ItemsMessage = (accumulator, currentValue) =>
        accumulator + currentValue + payload.plus;
      let totalAmount = state.cart
        .map(el => el.price * el.quantity)
        .reduce(reducer, payload.zero);
      let productList = state.cart
        .map(el => el.tittle + " " + el.quantity)
        .reduce(reduceItems, payload.empty);
      let productMessage = state.cart
        .map(el => el.tittle + " +( " + el.quantity + " )")
        .reduce(ItemsMessage, payload.empty);

      let newProductlist = productList.slice(0, -2);
      state.total = {
        price: totalAmount,
        info: newProductlist,
        productMessage
      };
    }
  },
  actions: {
    bindProducts: firestoreAction(async function({ bindFirestoreRef }) {
      const ref = this.$fireStore.collection("products");
      await bindFirestoreRef("products", ref, { wait: true });
    }),
    bindOrders: firestoreAction(async function({ bindFirestoreRef }) {
      const oRef = this.$fireStore.collection("orders");
      await bindFirestoreRef("orders", oRef, { wait: true });
    })
  },
  modules: {},
  getters: {
    getProduct: state => state.products,
    getOrders: state => state.orders,
    getCartItems: state => state.cart,
    getTotal: state => state.total
  }
};
