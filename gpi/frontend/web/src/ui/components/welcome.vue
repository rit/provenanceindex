<template>
  <section class="section">
    <search-bar/>
    <homepage-visualization/>
    <resource-overview :resources="resources" />
  </section>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped>

</style>
