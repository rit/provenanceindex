<template>
  <div class="hero is-medium search">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <h1 class="is-size-5 has-text-weight-bold has-text-centered">
              Search our Database
              <hr>
            </h1>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="control has-icons-right">
              <input
                class="input is-medium"
                type="text"
                placeholder="Enter keyword">
              <span class="icon is-right search-icon">
                <font-awesome-icon
                  icon="search"
                  style="color: white;" />
              </span>
            </div>
            <p class="has-text-right is-italic is-size-7"><a href="#">Advanced Search</a></p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'SearchBar',
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style scoped>
.search {
  background: #cccccc;
}
hr {
  height: 2px;
  margin-top: .5rem;
  background: white;
}
.search-icon {
  background: black;
  color:white;
}
a {
  color: #4a4a4a;
}
</style>
