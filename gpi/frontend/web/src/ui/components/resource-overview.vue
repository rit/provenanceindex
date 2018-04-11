<template>
  <div
    data-cy="resource-overview"
    class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="is-size-5 has-text-weight-bold has-text-centered">
          Resource Types in the Provenance Index
          <hr>
        </h1>
      </div>
    </div>
    <div class="columns resource-types">
      <template v-for="resource in resources">
        <div
          :key="resource.name"
          class="column">
          <div class="resource-wrapper">
            <resource-type
              :resource="resource"
              :handler="_self"
              data-cy="resource-type"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="is-hidden-mobile">
      <getty-callout
        v-show="showCallout"
        :text="descText"
        :handler="_self"
        data-cy="getty-callout"
      />
    </div>
  </div>
</template>

<script>
import { noop } from 'iso/utils'

export default {
  name: 'ResourceOverview',
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      showCallout: false,
      descText: '',
    }
  },
  created () {
    this.activeResource = noop('deactivate')
  },
  methods: {
    showDescription (resource, resourceTypeVm) {
      if (this.activeResource === resourceTypeVm) return

      this.activeResource.deactivate()
      this.activeResource = resourceTypeVm
      this.descText = resource.description
      this.showCallout = true
    },
    deactivate () {
      this.showCallout = false
    },
  },
}
</script>

<style scoped>
.container {
  padding-top: 3rem
}
hr {
  height: 2px;
  margin: .5rem 0;
  background: #cccccc;
}
.resource-types {
  margin-bottom: 0.4rem;
}
.resource-wrapper {
  height: 100%;
}
</style>
