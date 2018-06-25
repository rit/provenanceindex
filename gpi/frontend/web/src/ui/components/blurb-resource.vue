<template>
  <div class="box columns getty-blurb-resource">
    <div class="column">
      <div class="media">
        <div class="media-left">
          <font-awesome-icon
            :icon="resource.ui.icon"
            size="3x"
          />
        </div>
        <div class="media-content">
          <h2>
            {{ resource.heading() }}
            |
            <span>
              {{ resource.qualifier }}
            </span>
          </h2>
          <ul>
            <li
              v-for="[label, value] in resource.blurbFields()"
              :key="label" >
              <span>{{ localLabel(label) }}</span>
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="column getty-related is-3">
      <h2 v-translate>Related Resources</h2>
      <section>
        <div
          v-for="badge in resource.relatedCountBadges()"
          :key="badge.type"
        >
          <count-badge
            :count="badge.count"
            :resource="badge.type"
            :id="id"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlurbResource',
  props: {
    resource: {
      required: true,
      type: Object,
    },
  },
  // Remove after real API is implemented
  computed: {
    id () {
      return this.resource.id.replace('stubbed id ', '')
    },
  },
  methods: {
    localLabel (label) {
      if (label === 'Born') {
        return this.$gettext('Born')
      } else if (label === 'Died') {
        return this.$gettext('Died')
      } else if (label === 'Nationality') {
        return this.$gettext('Nationality')
      } else {
        return label
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@import 'node_modules/bulma/sass/utilities/mixins.sass'

.getty-blurb-resource
  margin-bottom: 1.5em

h2
  font-weight: bold
  margin-bottom: 0.5em
  span
    font-weight: normal
    font-style: italic

li
  span
    font-weight: bold
    &:after
      content: ":"

.getty-related
  > section
    > div
      padding-bottom: 0.5em
    +desktop
      display: flex
      flex-wrap: wrap
      justify-content: flex-end
      > div
        padding-left: 0.5em
  h2
    +desktop
      text-align: right
    &:after
      content: ":"
</style>
