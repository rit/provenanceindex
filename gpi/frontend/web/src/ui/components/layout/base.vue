<template>
  <section class="section">
    <header>
      <div class="container">
        <div class="branding">
          <nav class="level-left">
            <div class="level-item">
              <img
                width="35px"
                src="@static/logo.png">
            </div>
            <div class="level-item">
              <router-link :to="{name: 'home'}">
                <h1>The Provenance Index</h1>
              </router-link>
            </div>
          </nav>
        </div>
      </div>
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
export default {
  name: 'LayoutBase',
  components: {
    GettyFooter,
  },
}
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  font-weight: bold;
}

.branding a {
  color: #666;
}
</style>
