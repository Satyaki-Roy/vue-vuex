<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="incrementCounter">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from '@/components/ChangeCounter';
import TheCounter from '@/components/TheCounter';

export default {
  components: {
    ChangeCounter,
    BaseContainer,
    TheCounter
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch({
        type: 'increase',
        value: 10
      });
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>