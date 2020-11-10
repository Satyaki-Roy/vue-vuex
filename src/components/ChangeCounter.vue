<template>
  <button @click="incrementCounter">Add 1</button>
</template>

<script>
export default {
  name: 'ChangeCounter',
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style scoped>

</style>