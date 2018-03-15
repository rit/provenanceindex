<template>
  <section class="section">
    <header>
      <div class="container">
        <div class="branding">
          <nav class="level-left">
            <div class="level-item">
              <img width="35px" src="@static/logo.png">
            </div>
            <div class="level-item">
              <h1>The Provenance Index</h1>
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

    <footer class="footer">
      &copy; 2018 The J. Paul Getty Trust
    </footer>
  </section>
</template>

<script>

export default {
  name: 'layout-base'
}
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  font-weight: bold;
}
</style>
