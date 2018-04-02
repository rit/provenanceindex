<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
      <header-nav/>
    </header>

    <section class="section">
      <search-bar/>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import HeaderNav from '@ui/header-nav'
import GettyFooter from '@ui/getty-footer.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    HeaderNav,
    GettyFooter,
  },
}
</script>

<style scoped>

</style>
