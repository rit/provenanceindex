<template>
  <div class="wrapper">
    <h2 class="is-size-5 has-text-centered has-text-weight-bold">{{ galleryLabel }}</h2>
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
  props: {
    galleryLabel: {
      type: String,
      default () {
        return ''
      },
    },
  },
}
</script>

<style scoped>
.wrapper {
  padding-top: 3rem;
}
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
