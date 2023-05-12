import { defineStore } from "pinia";
import axios from "axios";
const axiosConfig = {
  "Content-Type": "application/json;charset=UTF-8",
  "Acces-Control-Allow-Origin": "*",
  "Acces-Control-Allow-Methods": "*",
};
const devRuta = import.meta.env.VITE_APP_RUTA_API;
axios.defaults.baseURL = devRuta;
axios.defaults.headers.common = axiosConfig;

import Swal from "sweetalert2/dist/sweetalert2.js";
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
      const response = await axios.get(
        devRuta + "/tienda/inventario/productos"
      );
      this.$state.products = response.data;
    },
    async editProduct(productIndex, newData) {
      const productId = this.products[productIndex].id;
      try {
        const response = await axios.put(
          `${devRuta}/tienda/inventario/productos/${productId}`,
          newData
        );
        this.products[productIndex] = response.data;
        Swal.fire({
          icon: "success",
          title: "Producto editado exitosamente",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al editar el producto",
          text: "Hubo un problema al actualizar la información del producto. Intente de nuevo más tarde.",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
    async deleteProducts(productID) {
      const response = await axios.delete(`${devRuta}/tienda/inventario/productos/${productID}`)
      this.$state.products = this.$state.products.filter(product=>product.id !== productID)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      });
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
          position: "top-end",
          icon: "success",
          title: "Producto guardado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
      }
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
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id !== item.id
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto eliminado del carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  persist: true,
});
