<template>
  <h3>{{ counterValue }}</h3>
</template>

<script>
export default {
  name: "TheCounter",
  computed: {
    counterValue() {
      return this.$store.state.counter;
    },
  },
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>