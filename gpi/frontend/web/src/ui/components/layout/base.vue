<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
      <header-nav/>
    </header>

    <router-view/>

    <getty-footer/>
  </section>
</template>

<script>
export default {
  name: 'LayoutBase',
}
</script>

<style scoped>
</style>
