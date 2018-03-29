<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
    </header>

    <section class="section">
      <getty-gallery/>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import GettyGallery from '@ui/getty-gallery.vue'
import GettyFooter from '@ui/getty-footer.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    GettyGallery,
    GettyFooter,
  },
}
</script>

<style scoped>

</style>
