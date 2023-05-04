<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="w-full h-[100vh] overflow-y-hidden">
    <div class="bg-primary shadow-lg">
      <Navbar />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
