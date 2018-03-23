<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
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
import SearchBar from '@ui/search-bar.vue'
import GettyFooter from '@ui/getty-footer.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    SearchBar,
    GettyFooter,
  },
}
</script>

<style scoped>

</style>
