<template>
  <div class="hero search">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <h1 class="is-size-5 has-text-weight-bold has-text-centered">
              <translate>Search our Database</translate>
              <hr>
            </h1>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="control has-icons-right">
              <!-- To do: figure out how to translate placeholder text -->
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
            <p class="has-text-right is-italic is-size-7"><a
              v-translate
              href="#">Advanced Search</a></p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
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
