<template>
  <div>
    <h1>List of Related Events</h1>
  </div>
</template>

<script>
export default {
  name: 'RelatedEventHome',
  mounted () {
    this.$emit('RelatedEventHome', this)
  },
}
</script>

<style scoped>
</style>
