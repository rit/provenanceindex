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
          <translate>RELATED RESOURCES:</translate>
        </div>
        <getty-tab-pane
          :label="localLabel('Persons')"
          icon="user-circle">
          <blurb-resource :resource="related"/>
        </getty-tab-pane>
        <getty-tab-pane
          :label="localLabel('Provenance Events')"
          icon="calendar">
          Provenance Event List
        </getty-tab-pane>
        <getty-tab-pane
          :label="localLabel('Objects')"
          icon="paint-brush">
          Objects List
        </getty-tab-pane>
        <getty-tab-pane
          :label="localLabel('Documents')"
          icon="book">
          Documents List
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
import { makeRembrandt } from 'iso/fixtures'

export default {
  name: 'PersonHome',
  data () {
    return {
      related: null,
    }
  },
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
  mounted () {
    makeRembrandt().then(props => {
      let artist = new Person(props)
      this.related = artist
    })
  },
  methods: {
    ...mapActions(['fetchPerson']),
    localLabel (label) {
      if (label === 'Persons') {
        return this.$gettext('Persons')
      } else if (label === 'Provenance Events') {
        return this.$gettext('Provenance Events')
      } else if (label === 'Objects') {
        return this.$gettext('Objects')
      } else if (label === 'Documents') {
        return this.$gettext('Documents')
      } else {
        return label
      }
    },
  },
}
</script>

<style scoped>
section {
  padding: 3rem 0rem;
}
</style>
