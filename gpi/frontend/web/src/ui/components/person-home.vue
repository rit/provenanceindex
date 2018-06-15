<template>
  <section>
    <async-flipper :resolved-with="personProps">
      <person-title
        :name="person.name"
        :qualifier="person.qualifier"
        :icon="person.ui.icon"
      />
      <person-metadata :person="person" />
      <getty-tabs>
        <div
          slot="tabsLabel"
          class="level-item is-narrow">
          RELATED RESOURCES:
        </div>
        <getty-tab-pane
          label="Provenance Events"
          icon="calendar">
          Provenance Event List
        </getty-tab-pane>
        <getty-tab-pane
          label="Objects"
          icon="paint-brush">
          Objects List
        </getty-tab-pane>
      </getty-tabs>

      <!-- Trigger History Mode  -->
      <router-link
        data-cy="person-history-mode"
        to="/persons/hist-123">
        Related Artist
      </router-link>
    </async-flipper>
  </section>
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
      // TODO: Investigate crockjs Maybe object
      return new Person(this.personProps || {})
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
section {
  padding: 3rem 0rem;
}
</style>
