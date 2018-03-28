<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
    </header>

    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
import HeaderExplore from '@ui/header-explore.vue'
import HeaderLogo from '@ui/header-logo.vue'
import GettyFooter from '@ui/getty-footer.vue'
import Vspec from '@ui/vspec'

export default {
  name: 'LayoutBase',
  components: {
    HeaderExplore,
    HeaderLogo,
    GettyFooter,
    Vspec,
  },
}
</script>

<style scoped>

</style>
