<template>
  <section>
    <async-flipper :resolved-with="artObjectProps">
      <resource-title
        :name="artObject.label"
        :qualifier="artObject.qualifier"
        :icon="artObject.ui.icon"
      />
      <object-metadata :art-object="artObject" />
      <!--<getty-tabs>
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
      </getty-tabs>-->

    <!-- Trigger History Mode  -->
    <!--<router-link
        data-cy="person-history-mode"
        to="/persons/hist-123">
        Related Artist
      </router-link>-->
    </async-flipper>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ArtObject from 'iso/models/art-object'

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
  },
}
</script>

<style scoped>
section {
  padding: 3rem 0rem;
}
</style>
