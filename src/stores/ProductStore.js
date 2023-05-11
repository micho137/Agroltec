import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

const devRuta = import.meta.env.VITE_APP_RUTA_API;

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [],
    cartItems: [],
  }),
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    countCartItems(state) {
      return state.cartItems.length;
    },
    getCartItems: (state) => {
      return state.cartItems;
    },
  },
  actions: {
    async fetchProducts() {
      const response = await axios.get(devRuta + "/productos");
      this.$state.products = response.data;
    },
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto agregado al carrito",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto guardado',
            showConfirmButton: false,
            timer: 1500
          });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto actualizado',
        showConfirmButton: false,
        timer: 1500
      });
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto actualizado',
            showConfirmButton: false,
            timer: 1500
          });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto eliminado del carrito',
        showConfirmButton: false,
        timer: 1500
      });
    },
  },
  persist:true
});
