<template>
  <div
    class="w-full h-screen bg-[url('../assets/images/wall.png')] object-cover flex justify-center items-center"
  >
    <div class="bg-white rounded-xl w-96 h-96"></div>
  </div>
</template>

<script>
import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_RUTA_API
export default {
  data: () => {
    return {
      Productos:null
    };
  },
  methods: {
    getProducts() {
      axios.get(BASE_URL+"/productos").then((response) => {
        this.Productos = response.data
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
