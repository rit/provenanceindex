<template>
  <div class="metadata columns">
    <div class="column is-narrow">
      <figure
        v-if="person.imageUrl"
        class="image is-128x128">
        <img :src="person.imageUrl">
      </figure>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column is-narrow">
          <p
            v-if="person.dateOfBirth"
            class="is-size-7"><b><translate>Born:</translate></b> {{ person.born() }}</p>
          <p
            v-if="person.dateOfDeath"
            class="is-size-7"><b><translate>Died:</translate></b> {{ person.died() }}</p>
          <p
            v-if="person.nationality"
            class="is-size-7"><b><translate>Nationality:</translate></b> {{ person.nationality }}</p>
        </div>
        <div class="column">
          <p
            v-if="person.role"
            class="is-size-7"><b><translate>Role:</translate></b> {{ person.role }}</p>
          <p
            v-if="person.activeTimespan"
            class="is-size-7"><b><translate>Active:</translate></b> {{ person.activeTimespan }}</p>
        </div>
      </div>
      <getty-ellipsis
        v-if="person.description"
      >
        <div>
          <b><translate>Description:</translate></b> {{ person.description }}
        </div>
      </getty-ellipsis>
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
  },
}
</script>

<style scoped>

</style>
