<template>
  <div data-cy="resource-type">
    <div class="card resource">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="getImageUrl()">
        </figure>
      </div>
      <div class="card-content has-text-centered">
        <!-- To do: figure out how to translate fixtures -->
        <p
          data-cy="card-title"
          class="has-text-weight-bold is-size-6">{{ resource.name }}</p>
        <p
          v-translate="{count: resource.localeCount()}"
          :translate-n="resource.localeCount()"
          translate-plural="%{ count } Records"
          class="is-size-6">%{ count } Record</p>
        <a
          href="#"
          class="is-size-7"
          @click.prevent="showDescription(resource)">{{ resource.question() }}</a>
      </div>
    </div>

    <div
      v-show="isActive"
      data-cy="description-callout-mobile"
      class="is-hidden-desktop">
      <getty-callout
        :handler="_self"
        :text="resource.description"
        data-cy="getty-callout" />
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
    handler: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    getImageUrl () {
      var images = require.context('@static', false, /\.png$/)
      return images(this.resource.imageUrl())
    },
    showDescription (resource) {
      this.activate()
      this.handler.showDescription(this.resource, this)
    },
    activate () {
      this.isActive = true
    },
    deactivate () {
      this.isActive = false
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
