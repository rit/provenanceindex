<template>
  <div class="top-bar">
    <div
      :class="{'is-active': isDropdownActive}"
      class="dropdown">
      <div
        class="dropdown-trigger"
        @click="toggleDropdown">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu">
          <span v-translate>Explore The Getty</span>
          <span class="icon is-small">
            <font-awesome-icon icon="caret-down" />
          </span>
        </button>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu"
        role="menu">
        <div
          data-cy="explore-the-getty"
          class="dropdown-content">
          <div
            v-for="(url, text) in dropdownLinks"
            :key="url">
            <!-- To do: figure out how to get keys into po file -->
            <a
              :href="url"
              class="dropdown-item">
              {{ text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderExplore',
  data () {
    return {
      isDropdownActive: false,
      dropdownLinks: {
        'Visit': 'http://www.getty.edu/visit/',
        'Museum': 'http://www.getty.edu/museum/',
        'Research Institute': 'http://www.getty.edu/research/',
        'Conservation Institute': 'http://www.getty.edu/conservation/',
        'Foundation': 'http://www.getty.edu/foundation/',
        'Publications': 'http://www.getty.edu/publications/',
        'About the Getty': 'http://www.getty.edu/about/',
      },
    }
  },
  methods: {
    toggleDropdown () {
      this.isDropdownActive = !this.isDropdownActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./node_modules/bulma/sass/utilities/all";

.top-bar {
  border-bottom: 2px solid $light;
  margin-bottom: 0.5em;
}

.dropdown-menu {
  padding-top: 2px;
}

.dropdown-item {
  padding: 0.5rem 1rem;
}

.dropdown-trigger .button {
  padding-left: 0;
  border: none;
  font-weight: 700;
  font-size: 0.875rem;
}
</style>
