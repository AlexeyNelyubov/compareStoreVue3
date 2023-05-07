<script setup>
import { ref } from "vue";
import { useCounterStore } from "/src/stores/PiniaCounter.js";

const counterStore = useCounterStore();
</script>

<template>
  <main class="pinia">
    <p class="pinia__item">Pinia</p>
    <div class="pinia__store-manipulate">
      <button class="pinia__store-function" @click="counterStore.decrement">
        -
      </button>
      <button class="pinia__store-function" @click="counterStore.increment">
        +
      </button>
    </div>
    <p class="pinia__item">count - {{ counterStore.count }}</p>
    <p class="pinia__item">count x2 - {{ counterStore.doubleCount }}</p>
  </main>
</template>

<style>
.pinia {
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pinia__item {
  font: 50px cursive;
}

.pinia__store-manipulate {
  margin: 76px 0 24px 0;
}

.pinia__store-function {
  margin-right: 24px;
  padding: 12px 24px;
  font: 40px cursive;
  background-color: #fff;
}
</style>
