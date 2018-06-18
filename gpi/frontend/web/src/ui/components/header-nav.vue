<template>
  <nav
    class="navbar main-nav"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <button
        :class="{ 'is-active': showNav }"
        data-cy="hamburger-button"
        class="button navbar-burger"
        @click="toggleBurger">
        <span/>
        <span/>
        <span/>
      </button>
    </div>
    <div
      :class="{ 'is-active': showNav }"
      data-cy="navbar-content"
      class="navbar-menu is-centered-nav"
    >
      <div class="navbar-start">
        <router-link
          v-translate
          :to="{name: 'home'}"
          class="navbar-item pi-main-nav">
          Home
        </router-link>
        <a
          v-translate
          href="#"
          class="navbar-item pi-main-nav">
          Search
        </a>
        <a
          v-translate
          href="#"
          class="navbar-item pi-main-nav">
          Saved Searches
        </a>
        <div
          class="navbar-item pi-main-nav has-dropdown is-hoverable"
          data-cy="navbar-about" >
          <a
            v-translate
            class="navbar-link">
            About
          </a>
          <div class="navbar-dropdown">
            <a
              v-translate
              class="navbar-item">
              History
            </a>
            <a
              v-translate
              class="navbar-item">
              Scope
            </a>
            <a
              v-translate
              class="navbar-item">
              Documentation
            </a>
            <a
              v-translate
              class="navbar-item">
              Contributors/Partners
            </a>
          </div>
        </div>
        <div
          data-cy="navbar-help"
          class="navbar-item pi-main-nav has-dropdown is-hoverable">
          <a
            v-translate
            class="navbar-link">
            Help
          </a>
          <div class="navbar-dropdown">
            <a
              v-translate
              class="navbar-item">
              Search Help
            </a>
            <a
              v-translate
              class="navbar-item">
              FAQs
            </a>
            <a
              v-translate
              class="navbar-item">
              Contact
            </a>
          </div>
        </div>
        <language-selector/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      showNav: false,
    }
  },
  methods: {
    toggleBurger () {
      this.showNav = !this.showNav
    },
  },
}
</script>

<style scoped>
.main-nav {
  background: #D3D3D3;
}
.is-centered-nav {
  justify-content: center;
}
.navbar-start {
  margin-right: inherit;
}
.pi-main-nav:not(:last-child) {
  border-right: 1px solid #555555;
}
.navbar-link::after {
  border: 1px solid #4a4a4a;
  border-top-width: 0px;
  border-right-width: 0px;
}
</style>
