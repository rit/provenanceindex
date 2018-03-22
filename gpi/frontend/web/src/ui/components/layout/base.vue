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

    <footer class="footer">
      &copy; 2018 The J. Paul Getty Trust
    </footer>
  </section>
</template>

<script>
import HeaderLogo from '@ui/header-logo.vue'

export default {
  name: 'LayoutBase',
  components: {
    HeaderLogo,
  },
}
</script>

<style scoped>

</style>
