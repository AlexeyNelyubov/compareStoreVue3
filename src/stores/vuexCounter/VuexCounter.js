export const VuexStore = {
  namespaced: true,
    state () {
      return {
        count: 0
      }
    },
    getters: {
      doubleCount(state) {
        return state.count*2;
      }
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    }
  }
