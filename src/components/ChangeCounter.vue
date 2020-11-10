<template>
  <button @click="incrementCounter">Add 2</button>
</template>

<script>
export default {
  name: 'ChangeCounter',
  methods: {
    incrementCounter() {
      this.$store.dispatch('increment');
    }
  }
};
</script>

<style scoped>

</style>