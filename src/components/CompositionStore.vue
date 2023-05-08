<script setup>
import { ref } from "vue";
import { useCounterStore } from "/src/stores/ComposableStore.js";

const counterStore = useCounterStore();
</script>

<template>
  <main class="composable">
    <p class="composable__item">Composable</p>
    <div class="composable__store-manipulate">
      <button
        class="composable__store-function"
        @click="counterStore.decrement"
      >
        -
      </button>
      <button
        class="composable__store-function"
        @click="counterStore.increment"
      >
        +
      </button>
    </div>
    <p class="composable__item">count - {{ counterStore.count }}</p>
    <p class="composable__item">
      count<sup>2</sup> = {{ counterStore.doubleCount }}
    </p>
  </main>
</template>

<style>
.composable {
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.composable__item {
  font: 50px cursive;
}

.composable__store-manipulate {
  margin: 76px 0 24px 0;
}

.composable__store-function {
  margin: 0 24px;
  padding: 12px 24px;
  font: 40px cursive;
  background-color: #fff;
}
</style>
