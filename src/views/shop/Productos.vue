<template>
  <div
    class="w-full h-full bg-[url('../assets/images/wall.png')] object-cover flex justify-center items-center"
  >
    <div
      class="grid grid-cols-4 p-2 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl gap-x-5 justify-center items-center border-2 border-primary"
    >
      <div class="flex w-full" v-for="producto in Productos" :key="producto.id">
        <div
          class="card w-72 bg-base-100 shadow-xl border-2 border-primary m-2"
        >
          <figure class="px-2 pt-5">
            <img :src="producto.imagen" alt="img" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{ producto.nombre }}</h2>
            <p class="text-lg font-semibold">$ <span class="text-primary">{{ producto.precio }}</span></p>
            <div class="flex justify-center items-center gap-x-5">
              <button v-on:click="showAlert()" class="bg-primary text-white font-bold py-2 rounded-full w-full px-2 focus:bg-primary-focus hover:bg-primary-focus">Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>

<script>
import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_RUTA_API;

export default {
  data: () => {
    return {
      Productos: null,
    };
  },
  methods: {
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    getProducts() {
      axios.get(BASE_URL + "/productos").then((response) => {
        this.Productos = response.data;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
