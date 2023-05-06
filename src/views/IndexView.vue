<script setup>
import { ref } from "vue";
import PiniaStore from "/src/components/PiniaStore.vue";

const currentStore = ref("");
</script>

<template>
  <header>
    <button @click="currentStore = 'Pinia'">Pinia</button>
    <button @click="currentStore = 'Vuex'">Vuex</button>
    <button @click="currentStore = 'Composable'">Composable</button>
  </header>
  <main>
    <PiniaStore v-if="currentStore === 'Pinia'" />
  </main>
</template>
