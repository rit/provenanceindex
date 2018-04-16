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
            v-if="person.birth"
            class="is-size-7"><b>Born:</b> {{ person.birth }}</p>
          <p
            v-if="person.death"
            class="is-size-7"><b>Died:</b> {{ person.death }}</p>
          <p
            v-if="person.nationality"
            class="is-size-7"><b>Nationality:</b> {{ person.nationality }}</p>
        </div>
        <div class="column">
          <p
            v-if="person.role"
            class="is-size-7"><b>Role:</b> {{ person.role }}</p>
          <p
            v-if="person.active_info"
            class="is-size-7"><b>Active:</b> {{ person.active_info }}</p>
        </div>
      </div>
      <div
        v-if="person.description"
        :class="{ 'pi-hideContent': hideContent, 'pi-showContent': showContent }"
        class="pi-hideContent is-size-7"><b>Description:</b> {{ person.description }}
      </div>
      <getty-ellipsis
        :show-content="showContent"
        :hide-content="hideContent"
        :handler="_self"
      />
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
  data () {
    return {
      hideContent: true,
      showContent: false,
    }
  },
  methods: {
    getImageUrl () {
      var images = require.context('@static', false, /\.png$/)
      return images(this.person.imageUrl())
    },
    toggleContent () {
      this.hideContent = !this.hideContent
      this.showContent = !this.showContent
    },
  },
}
</script>

<style scoped>
.pi-hideContent {
  overflow: hidden;
  line-height: 1rem;
  height: 3rem;
}
.pi-showContent {
  line-height: 1rem;
  height: auto;
}

</style>
