import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    }
  }
});

export default store;