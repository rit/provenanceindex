<template>
  <div class="metadata columns">
    <div class="column is-narrow">
      <figure
        v-if="person.image"
        class="image is-128x128">
        <img :src="getImageUrl()">
      </figure>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column is-narrow">
          <p
            v-if="person.born"
            class="is-size-7"><b>Born:</b> {{ person.born }}</p>
          <p
            v-if="person.died"
            class="is-size-7"><b>Died:</b> {{ person.died }}</p>
          <p
            v-if="person.nationality"
            class="is-size-7"><b>Nationality:</b> {{ person.nationality }}</p>
        </div>
        <div class="column">
          <p
            v-if="person.role"
            class="is-size-7"><b>Role:</b> {{ person.role }}</p>
          <p
            v-if="person.active"
            class="is-size-7"><b>Active:</b> {{ person.active }}</p>
        </div>
      </div>
      <p
        v-if="person.description"
        class="is-size-7"><b>Description:</b> {{ person.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonMetadata',
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl () {
      var images = require.context('@static', false, /\.png$/)
      return images(this.person.imageUrl())
    },
  },
}
</script>

<style scoped>

</style>
