<template>
  <section class="section">
    <search-bar/>
    <homepage-visualization/>
    <resource-overview :resources="resources" />
  </section>
</template>

<script>
import ResourceType from 'iso/models/resource-type'
import fixtures from 'iso/fixtures'
import { map } from 'lodash'

export default {
  name: 'Welcome',
  data () {
    return {
      resources: [],
    }
  },
  created () {
    // TODO Replace fixtures.ResourceTypes with API response
    this.resources = map(fixtures.ResourceTypes, resource => new ResourceType(resource))
  },
}
</script>

<style scoped>

</style>
