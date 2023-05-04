<template>
  <div class="w-full h-full bg-secondary-content p-5 flex flex-col justify-center items-center">
    <h2 class="text-white font-bold text-xl mt-5 text-center">
      - Historial de Navegación -
    </h2>
    <div class="m-5 w-full h-full bg-white p-5 rounded-xl border-4 border-secondary-focus">
      <ul class="grid grid-cols-5">
        <li class="text-lg font-semibold text-center" v-for="(ruta, index) in historial" :key="index">{{ ruta }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Historial",
  props: {
    historial: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      historialLocal: [],
    };
  },
  mounted() {
    this.historialLocal = JSON.parse(localStorage.getItem("historial")) || [];
  },
};
</script>
