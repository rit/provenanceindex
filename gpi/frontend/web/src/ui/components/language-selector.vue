<template>
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
</template>

<script>
export default {
	name: 'LanguageSelector',
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
    changeLang (newLang) {
      this.$language.current = newLang
    },
  },
}
</script>

<style scoped>
.navbar-link::after {
  border: 1px solid #4a4a4a;
  border-top-width: 0px;
  border-right-width: 0px;
}
</style>