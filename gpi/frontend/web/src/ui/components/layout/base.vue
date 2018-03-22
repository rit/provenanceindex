<template>
  <section class="section">
    <header>
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
import GettyFooter from '@ui/getty-footer.vue'
import HeaderLogo from '@ui/header-logo.vue'

export default {
  name: 'LayoutBase',
  components: {
    GettyFooter,
    HeaderLogo,
  },
}
</script>

<style scoped>

</style>
