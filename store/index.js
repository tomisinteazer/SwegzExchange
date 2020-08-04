import { vuexfireMutations, firestoreAction } from "vuexfire";
function db() {
  firestoreAction(async function({ bindFirestoreRef }) {
    await bindFirestoreRef("products", ref, { wait: true });
  });
}

export default {
  state: () => ({
    products: [],
    cart: [],
    total: {}
  }),
  mutations: {
    ...vuexfireMutations,
    SET_COUNT_DOCUMENT: (state, countDocument) => {
      // Only needed for SSR/Universal Mode
      state.products = countDocument;
    },
    getProducts(state, payload) {
      state.products.concat(payload);
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    removeFromCart(state, payload) {
      let index = state.cart.indexOf(payload);
      state.cart.splice(index, 1);
    },
    clearCart(state, payload) {
      state.cart = payload;
    },
    calcTotal(state, payload) {
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      let reduceItems = (accumulator, currentValue) =>
        accumulator + currentValue + payload.comma;
      let ItemsMessage = (accumulator, currentValue) =>
        accumulator + currentValue + payload.plus;
      let totalAmount = state.cart
        .map(el => el.price)
        .reduce(reducer, payload.zero);
      let productList = state.cart
        .map(el => el.tittle)
        .reduce(reduceItems, payload.empty);
      let productMessage = state.cart
        .map(el => el.tittle)
        .reduce(ItemsMessage, payload.empty);
      state.total = {
        price: totalAmount,
        info: productList,
        productMessage
      };
    }
  },
  actions: {
    bindProducts: firestoreAction(async function({ bindFirestoreRef }) {
      const ref = this.$fireStore.collection("products");
      await bindFirestoreRef("products", ref, { wait: true });
    })
  },
  modules: {},
  getters: {
    getProduct: state => state.products,
    getCartItems: state => state.cart,
    getTotal: state => state.total
  }
};
db();
