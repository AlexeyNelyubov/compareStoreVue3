<script setup>
import { ref } from "vue";
import PiniaStore from "/src/components/PiniaStore.vue";

const currentStore = ref("");
</script>

<template>
  <header class="index-header">
    <button class="index-header__store" @click="currentStore = 'Pinia'">
      Pinia
    </button>
    <button class="index-header__store" @click="currentStore = 'Vuex'">
      Vuex
    </button>
    <button class="index-header__store" @click="currentStore = 'Composable'">
      Composable
    </button>
  </header>
  <main>
    <PiniaStore v-if="currentStore === 'Pinia'" />
  </main>
</template>

<style>
.index-header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
}

.index-header__store {
  margin-right: 24px;
  padding: 12px 24px;
  font: 20px cursive;
  background-color: #fff;
}
</style>
