<template>
  <div class="card resource">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="getImageUrl()">
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <p
        data-cy="card-title"
        class="has-text-weight-bold is-size-6">{{ resource.name }}</p>
      <p class="is-size-6">{{ resource.localeCount() }} Records</p>
      <a
        href="#"
        class="is-size-7"
        @click.prevent="showDescription">{{ resource.question() }}</a>
    </div>
  </div>
</template>

<script>
import ResourceType from 'iso/models/resource-type'

export default {
  name: 'ResourceType',
  props: {
    resource: {
      type: ResourceType,
      required: true,
    },
  },
  methods: {
    getImageUrl () {
      var images = require.context('@static', false, /\.png$/)
      return images(this.resource.imageUrl())
    },
    showDescription () {
      this.$emit('show-description', this.type)
    },
  },
}
</script>

<style scoped>
.resource {
  height: 100%;
  background: #e6e6e6;
}
a {
  text-decoration: underline;
  color: black;
}
</style>
