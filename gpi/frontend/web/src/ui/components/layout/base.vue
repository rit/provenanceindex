<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
      <header-nav/>
    </header>

    <section class="section">
      <div class="columns">
        <div class="column">
          <getty-gallery/>
        </div>
        <div class="column">
          <getty-gallery/>
        </div>
      </div>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import HeaderNav from '@ui/header-nav'
import GettyGallery from '@ui/getty-gallery.vue'
import GettyFooter from '@ui/getty-footer.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    HeaderNav,
    GettyGallery,
    GettyFooter,
  },
}
</script>

<style scoped>

</style>
