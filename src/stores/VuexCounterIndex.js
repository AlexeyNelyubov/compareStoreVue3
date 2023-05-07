import { createStore } from 'vuex';
import { VuexStore } from '/src/stores/vuexCounter/VuexCounter.js'

export const store = createStore({
  modules: {
    VuexStore
  }
  
  })