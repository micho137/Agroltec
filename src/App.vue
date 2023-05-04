<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="flex-shrink-0">
      <Navbar />
    </div>
    <div class="flex-grow overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>
