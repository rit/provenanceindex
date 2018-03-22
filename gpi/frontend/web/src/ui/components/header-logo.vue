<template>
  <div class="container">

    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <a
            class= "logo pull-left"
            href="http://www.getty.edu">
            <img
              class="header-logo"
              width="60px"
              src="@static/getty_logo_og.png" >
          </a>
        </div>
      </div>
      <div class="level-item">

        <router-link :to="{name: 'home'}">
          <img
            width="60px"
            src="@static/logo.png">
          <h1 class="has-text-centered">The Provenance Index</h1>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  name: 'HeaderLogo',
}
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  font-weight: bold;
  float: right;
  padding-top: 10px
}
a {
  color: #4a4a4a;
}
</style>
