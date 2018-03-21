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
            <a
              href="http://www.getty.edu/visit/"
              class="dropdown-item">
              Visit
            </a>
            <a
              href="http://www.getty.edu/museum/"
              class="dropdown-item">
              Museum
            </a>
            <a
              href="http://www.getty.edu/research/"
              class="dropdown-item">
              Research Institute
            </a>
            <a
              href="http://www.getty.edu/conservation/"
              class="dropdown-item">
              Conservation Institute
            </a>
            <a
              href="http://www.getty.edu/foundation/"
              class="dropdown-item">
              Foundation
            </a>
            <a
              href="http://www.getty.edu/publications/"
              class="dropdown-item">
              Publications
            </a>
            <a
              href="http://www.getty.edu/about/"
              class="dropdown-item">
              About the Getty
            </a>
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
