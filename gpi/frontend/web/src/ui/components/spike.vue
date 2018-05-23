<template>
  <section class="box container">
    <button
      class="button"
      @click="spike()"
    >
      Spike!
    </button>
  </section>
</template>

<script>
export default {
  name: 'Spike',
  methods: {
    spike () {
    },
  },
}
</script>

<style scoped>
section {
  margin-top: 1em;
}
</style>
