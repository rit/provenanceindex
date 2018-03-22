<template>
  <div class="top-bar">
    <div class="container">
      <div
        :class="{'is-active': isDropdownActive}"
        class="dropdown is-hoverable">
        <div
          class="dropdown-trigger"
          @click="toggleDropdown">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu">
            <span>Explore The Getty</span>
            <span class="icon is-small">
              <font-awesome-icon icon="caret-down" />
            </span>
          </button>
        </div>
        <div
          id="dropdown-menu"
          class="dropdown-menu"
          role="menu">
          <div class="dropdown-content">
            <div
              v-for="(url, text) in dropdownLinks"
              :key="url">
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
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'HeaderExplore',
  components: {
    FontAwesomeIcon,
  },
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

<style scoped>
.top-bar {
  border-bottom: 2px solid $light;
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
