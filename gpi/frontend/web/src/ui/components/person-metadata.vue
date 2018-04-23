<template>
  <div class="metadata columns">
    <div class="column is-narrow">
      <figure
        v-if="personData.image"
        class="image is-128x128">
        <img :src="getImageUrl()">
      </figure>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column is-narrow">
          <p
            v-if="personData.birth"
            class="is-size-7"><b>Born:</b> {{ personData.birth }}</p>
          <p
            v-if="personData.death"
            class="is-size-7"><b>Died:</b> {{ personData.death }}</p>
          <p
            v-if="personData.nationality"
            class="is-size-7"><b>Nationality:</b> {{ personData.nationality }}</p>
        </div>
        <div class="column">
          <p
            v-if="personData.role"
            class="is-size-7"><b>Role:</b> {{ personData.role }}</p>
          <p
            v-if="personData.active_info"
            class="is-size-7"><b>Active:</b> {{ personData.active_info }}</p>
        </div>
      </div>
      <getty-ellipsis
        v-if="personData.description"
      >
        <div>
          <b>Description:</b> {{ personData.description }}
        </div>
      </getty-ellipsis>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonMetadata',
  props: {
    personData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl () {
      var images = require.context('@static', false, /\.png$/)
      return images(this.personData.imageUrl())
    },
  },
}
</script>

<style scoped>

</style>
