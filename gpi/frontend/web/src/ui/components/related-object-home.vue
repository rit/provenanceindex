<template>
  <div>
    <h1>List of Related Objects</h1>
  </div>
</template>

<script>
export default {
  name: 'RelatedObjectHome',
  mounted () {
    this.$emit('RelatedObjectHome', this)
  },
}
</script>

<style scoped>
</style>
