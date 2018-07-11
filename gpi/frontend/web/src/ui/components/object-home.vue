<template>
  <section>
    <async-flipper :resolved-with="artObjectProps">
      <resource-title
        :name="artObject.label"
        :qualifier="artObject.qualifier"
        :icon="artObject.ui.icon"
      />
      <object-metadata :art-object="artObject" />
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
          icon="user-circle"
          data-cy="persons-pane">
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
          icon="book"
          data-cy="documents-pane">
          <router-view
            name="related-documents"
            @RelatedDocumentHome="selectDocumentTabPane"/>
        </getty-tab-pane>
      </getty-tabs>
    </async-flipper>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArtObject from 'iso/models/art-object'

const labelToNamedRoute = {
  'Persons': 'object-related-persons',
  'Provenance Events': 'object-related-events',
  'Objects': 'object-related-objects',
  'Documents': 'object-related-documents',
}

export default {
  name: 'ObjectHome',
  computed: {
    ...mapGetters(['objectById']),
    id () {
      return this.$route.params.id
    },
    artObject () {
      // TODO: Investigate crockjs Maybe object
      return new ArtObject(this.artObjectProps || {})
    },
    artObjectProps () {
      return this.objectById(this.id)
    },
  },
  watch: {
    id: {
      handler (val, oldVal) {
        this.fetchObject({ id: val })
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['fetchObject']),
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
