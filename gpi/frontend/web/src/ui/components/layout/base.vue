<template>
  <section class="section">
    <header>
      <header-explore/>
      <header-logo/>
      <header-nav/>
    </header>

    <router-view/>

    <getty-footer/>
  </section>
</template>

<script>
import ResourceType from 'iso/models/resource-type'
import fixtures from 'iso/fixtures'
import { map } from 'lodash'

export default {
  name: 'LayoutBase',
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
