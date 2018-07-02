<template>
  <section>
    <async-flipper :resolved-with="personProps">
      <person-title
        :name="person.name"
        :qualifier="person.qualifier"
        :icon="person.ui.icon"
      />
      <person-metadata :person="person" />
      <getty-tabs
        ref="tabs"
        @GettyTabPaneSelected="showRelatedResource">
        <div
          slot="tabsLabel"
          class="level-item is-narrow">
          <translate>RELATED RESOURCES:</translate>
        </div>
        <getty-tab-pane
          ref="persons-pane"
          label="Persons"
          icon="user-circle">
          <router-view
            name="related-persons"
            @RelatedPersonHome="selectPersonTabPane"/>
        </getty-tab-pane>
        <getty-tab-pane
          ref="events-pane"
          label="Provenance Events"
          icon="calendar">
          <router-view
            name="related-events"
            @RelatedEventHome="selectEventTabPane"/>
        </getty-tab-pane>
        <getty-tab-pane
          ref="objects-pane"
          label="Objects"
          icon="paint-brush">
          <router-view
            name="related-objects"
            @RelatedObjectHome="selectObjectTabPane"/>
        </getty-tab-pane>
        <getty-tab-pane
          ref="documents-pane"
          label="Documents"
          icon="book">
          <router-view
            name="related-documents"
            @RelatedDocumentHome="selectDocumentTabPane"/>
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

const labelToNamedRoute = {
  'Persons': 'person-related-persons',
  'Provenance Events': 'person-related-events',
  'Objects': 'person-related-objects',
  'Documents': 'person-related-documents',
}

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
    showRelatedResource (tabPane) {
      let name = labelToNamedRoute[tabPane.label]
      this.$router.push({ name })
    },
    selectPersonTabPane () {
      this.$refs.tabs.activatePane(this.$refs['persons-pane'])
    },
    selectEventTabPane () {
      this.$refs.tabs.activatePane(this.$refs['events-pane'])
    },
    selectObjectTabPane () {
      this.$refs.tabs.activatePane(this.$refs['objects-pane'])
    },
    selectDocumentTabPane () {
      this.$refs.tabs.activatePane(this.$refs['documents-pane'])
    },
  },
}
</script>

<style scoped>
section {
  padding: 3rem 0rem;
}
</style>
