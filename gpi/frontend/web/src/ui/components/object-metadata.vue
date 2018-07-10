<template>
  <div class="metadata columns">
    <div class="column is-narrow">
      <figure
        v-if="artObject.imageUrl"
        class="image is-128x128">
        <img :src="artObject.imageUrl">
      </figure>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column is-narrow">
          <div>
            <p
              v-if="artObject.artist"
              class="is-size-7"><b class="pi-label"><translate>Artist</translate></b>{{ artObject.artist }}</p>
            <p
              v-if="artObject.dateOfCreation"
              class="is-size-7"><b class="pi-label"><translate>Creation Date</translate></b>{{ artObject.dateOfCreation }}</p>
            <p
              v-if="artObject.placeOfCreation"
              class="is-size-7"><b class="pi-label"><translate>Created at</translate></b>{{ artObject.placeOfCreation }}</p>
          </div>
          <br>
          <div>
            <p
              v-if="artObject.attributions"
              class="is-size-7"><b class="pi-label"><translate>Attributions</translate></b>{{ artObject.attributions }}</p>
            <p
              v-if="artObject.stockbookLabel"
              class="is-size-7"><b class="pi-label"><translate>Stockbook #</translate></b>{{ artObject.stockbookLabel }}</p>
          </div>
        </div>
        <div class="column">
          <div>
            <p
              v-if="artObject.medium"
              class="is-size-7"><b class="pi-label"><translate>Medium</translate></b>{{ artObject.medium }}</p>
            <p
              v-if="artObject.material"
              class="is-size-7"><b class="pi-label"><translate>Material</translate></b>{{ artObject.material }}</p>
            <p
              v-if="artObject.dimensions"
              class="is-size-7"><b class="pi-label"><translate>Dimensions</translate></b>{{ artObject.dimensions }}</p>
          </div>
          <br>
          <div>
            <p
              v-if="artObject.technique"
              class="is-size-7"><b class="pi-label"><translate>Technique</translate></b>{{ artObject.technique }}</p>
            <p
              v-if="artObject.subject"
              class="is-size-7"><b class="pi-label"><translate>Subject</translate></b>{{ artObject.subject }}</p>
            <p
              v-if="artObject.style"
              class="is-size-7"><b class="pi-label"><translate>Style</translate></b>{{ artObject.style }}</p>
          </div>
        </div>
      </div>
      <getty-ellipsis
        v-if="artObject.description"
      >
        <div>
          <b class="pi-label"><translate>Description</translate></b>{{ artObject.description }}
        </div>
      </getty-ellipsis>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectMetadata',
  props: {
    artObject: {
      type: Object,
      required: true,
    },
  },
  methods: {
  },
}
</script>

<style scoped>
.pi-label:after {
  content: ": "
}
</style>
