<template>
  <div class="hero is-medium">
    <div class="hero-body viz">
      <div class="columns section-title">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="is-size-5 has-text-weight-bold has-text-centered">
            What's in the Provenance Index?
            <hr>
          </h1>
        </div>
      </div>
      <div>
        <p class="is-size-6">The Provenance Index contains information sourced from our databases consisting of Archival Inventories, Sales Catalogs, Dealer Stock Books, and Payments to Artists, spanning over four centuries. Click here for more information about these databases.
        </p>
      </div>
      <div class="hero">
        <div class="hero-body inner-viz"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageVisualization',
}
</script>

<style scoped>
.hero .hero-body.viz {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #cccccc;
}
.section-title {
  margin: 0;
  color: black;
}
hr {
  height: 2px;
  margin: .5rem 0;
  background: white;
}
p {
  padding-bottom: 1rem;
}
.hero .hero-body.inner-viz {
  background: white;
  padding-bottom: 4rem;
}
</style>
