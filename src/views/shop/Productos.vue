<template>
  <div
    class="w-full h-full bg-[url('../assets/images/wall.png')] object-cover flex justify-evenly items-center"
  >
    <div
      class="overflow-y-scroll max-h-[700px] border-2 border-primary rounded-t-xl"
    >
      <table class="flex flex-col justify-center items-center">
        <thead class="sticky top-0 bg-primary text-white rounded-t-lg w-full">
          <tr class="flex justify-evenly items-center">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Imagen</th>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Precio</th>
            <th class="px-4 py-2">Funcion</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-primary bg-white">
          <tr
            class="flex justify-evenly items-center"
            v-for="(producto, index) in Productos"
            :key="index"
          >
            <td class="px-4 py-2">{{ producto.id }}</td>
            <td class="px-4 py-2 flex justify-center items-center">
              <img class="" :src="producto.imagen" alt="producto" />
            </td>
            <td class="px-4 py-2">{{ producto.nombre }}</td>
            <td class="px-4 py-2">${{ producto.precio }}</td>
            <td class="px-4 py-2">
              <a v-on:click="showAlert()" href="#">
                <svg
                  class="h-8 p-1 hover:text-primary duration-200"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    class=""
                  ></path>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>

<script>
import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_RUTA_API;
import { useProductStoreStore } from "../../stores/ProductStore";

export default {
  setup() {
    const store = useProductStoreStore();

    return {
      productos: store.productos,
      getProductos: store.getProductos,
    };
  },
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
