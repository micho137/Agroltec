<template>
  <div class="w-full h-full bg-secondary-content p-5 flex">
    <h2 class="text-white font-bold text-xl text-center">
      Historial de Navegación
    </h2>
    <div class="m-5 w-full h-full">
      <ul>
        <li v-for="(ruta, index) in historial" :key="index">{{ ruta }}</li>
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
