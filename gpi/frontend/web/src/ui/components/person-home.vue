<template>
  <div
    v-if="personProps"
    class="section" >
    <person-title
      :name="person.name"
      :qualifier="person.qualifier"
      :icon="person.ui.icon"
    />
    <person-metadata :person="person" />

    <!-- Trigger History Mode  -->
    <router-link
      data-cy="person-history-mode"
      to="/persons/hist-123">Related Artist</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Person from 'iso/models/person'

export default {
  name: 'PersonHome',
  computed: {
    ...mapGetters(['personById']),
    id () {
      return this.$route.params.id
    },
    person () {
      return new Person(this.personProps)
    },
    personProps () {
      return this.personById(this.id)
    },
  },
  watch: {
    id: {
      handler (val, oldVal) {
        this.fetchPerson({ id: val })
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['fetchPerson']),
  },
}
</script>

<style scoped>
.section {
  padding: 3rem 0rem;
}
</style>
