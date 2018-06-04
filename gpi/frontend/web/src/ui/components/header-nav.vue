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
          class="navbar-item">
          Home
        </router-link>
        <a
          v-translate
          href="#"
          class="navbar-item">
          Search
        </a>
        <a
          v-translate
          href="#"
          class="navbar-item">
          Saved Searches
        </a>
        <div
          class="navbar-item has-dropdown is-hoverable"
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
          class="navbar-item has-dropdown is-hoverable">
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
        <div class="navbar-item has-dropdown is-hoverable">
          <a
            v-translate
            class="navbar-link">
            Language: %{ currentDisplay }
          </a>
          <div
            class="navbar-dropdown">
            <a
              v-translate="{language: language}"
              v-for="(language, key) in inactiveLanguages"
              :key="key"
              class="navbar-item"
              @click="changeLang(key)">Language: %{ language }
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'HeaderNav',
  data () {
    return {
      showNav: false,
    }
  },
  computed: {
    currentDisplay () {
      return this.$language.available[this.$language.current]
    },
    inactiveLanguages () {
      let inactive = _.omit(this.$language.available, this.$language.current)
      return inactive
    },
  },
  methods: {
    toggleBurger () {
      this.showNav = !this.showNav
    },
    changeLang (newLang) {
      this.$language.current = newLang
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
.navbar-item:not(:last-child) {
  border-right: 1px solid #555555;
}
.navbar-link::after {
  border: 1px solid #4a4a4a;
  border-top-width: 0px;
  border-right-width: 0px;
}
</style>
