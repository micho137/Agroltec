import { defineStore } from "pinia";
import axios from "axios";

export const useProductStoreStore = defineStore("ProductStore", () => ({
    state: {
      productos: []
    },
    actions: {
      async getProductos() {
        try {
          const response = await axios.get("http://localhost:3000/productos");
          this.productos = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }));