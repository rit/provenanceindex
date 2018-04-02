<template>
  <div>
    <h2 class="is-size-5 has-text-centered has-text-weight-bold">Featured</h2>
    <div class="columns">
      <div class="column">
        <figure class="image is-4by3">
          <img>
        </figure>
        <div class="label has-text-centered has-text-weight-light">
          <a href="#">Lorem Ipsum</a>
        </div>
      </div>
      <div class="column">
        <figure class="image is-4by3">
          <img>
        </figure>
        <div class="label has-text-centered has-text-weight-light">
          <a href="#">Lorem Ipsum</a>
        </div>
      </div>
      <div class="column">
        <figure class="image is-4by3">
          <img>
        </figure>
        <div class="label has-text-centered has-text-weight-light">
          <a href="#">Lorem Ipsum</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GettyGallery',
}
</script>

<style scoped>
h2 {
  padding-bottom: 1rem
}
.image {
  background: #e6e6e6;
}
a {
  color: black;
  text-decoration: underline;
}
.label {
  padding-top: 1rem;
}
</style>