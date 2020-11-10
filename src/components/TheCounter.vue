<template>
  <h3>{{ counterValue }}</h3>
</template>

<script>
export default {
  name: "TheCounter",
  computed: {
    counterValue() {
      return this.$store.getters.finalCounter;
    },
  },
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>