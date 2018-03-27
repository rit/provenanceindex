<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
    </header>

    <section class="section">
      <homepage-visualization/>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import HomepageVisualization from '@ui/homepage-visualization'
import GettyFooter from '@ui/getty-footer.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    HomepageVisualization,
    GettyFooter,
  },
}
</script>

<style scoped>

</style>
