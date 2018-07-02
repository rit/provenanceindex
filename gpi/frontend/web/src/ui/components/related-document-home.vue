<template>
  <div>
    <h1>List of Related Documents</h1>
  </div>
</template>

<script>
export default {
  name: 'RelatedDocumentHome',
  mounted () {
    this.$emit('RelatedDocumentHome', this)
  },
}
</script>

<style scoped>
</style>
