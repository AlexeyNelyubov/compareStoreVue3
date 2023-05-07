<script setup>
import { ref, computed } from "vue";
import { useCounterStore } from "/src/stores/PiniaCounter.js";
import { useStore } from "vuex";
// import { mapGetters } from "vuex";

const counterStore = useStore();
</script>

<template>
  <main class="vuex">
    <p class="vuex__item">Vuex</p>
    <div class="vuex__store-manipulate">
      <button
        class="vuex__store-function"
        @click="counterStore.commit('VuexStore/decrement')"
      >
        -
      </button>
      <button
        class="vuex__store-function"
        @click="counterStore.commit('VuexStore/increment')"
      >
        +
      </button>
    </div>
    <p class="vuex__item">count - {{ counterStore.state.VuexStore.count }}</p>
    <p class="vuex__item">
      count x2 - {{ counterStore.getters["VuexStore/doubleCount"] }}
    </p>
  </main>
</template>

<style>
.vuex {
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.vuex__item {
  font: 50px cursive;
}

.vuex__store-manipulate {
  margin: 76px 0 24px 0;
}

.vuex__store-function {
  margin-right: 24px;
  padding: 12px 24px;
  font: 40px cursive;
  background-color: #fff;
}
</style>
