<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
      <header-nav/>
    </header>

    <section class="section">
      <search-bar/>
      <div class="columns">
        <div class="gallery-one column">
          <getty-gallery :gallery-label="featured"/>
        </div>
        <div class="gallery-two column">
          <getty-gallery :gallery-label="added"/>
        </div>
      </div>
    </section>

    <getty-footer/>
  </section>
</template>

<script>
export default {
  name: 'LayoutBase',
  data () {
    return {
      featured: 'Featured',
      added: 'Recently Added',
    }
  },
}
</script>

<style scoped>
.gallery-one {
  padding-right: 3rem;
}
.gallery-two {
  padding-left: 3rem;
}
</style>
