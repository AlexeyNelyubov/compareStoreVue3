<script setup>
import { ref } from "vue";
import { useCounterStore } from "/src/stores/PiniaCounter.js";

const counterStore = useCounterStore();
</script>

<template>
  <main>
    <button @click="counterStore.decriment">-</button>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.doubleCount">x2</button>
    {{ counterStore.count }}
  </main>
</template>
