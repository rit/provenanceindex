<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <h1 class="is-size-5 has-text-weight-bold has-text-centered">
          Resource Types in the Provenance Index
          <hr>
        </h1>
      </div>
    </div>
    <div class="columns">
      <div
        v-for="resource in resources"
        :key="resource.name"
        class="column">
        <resource-type
          :resource="resource"
          data-cy="resource-type"
          @show-description="showDescription(resource)"/>
      </div>
    </div>
    <div
      v-if="showCallout"
      :class="notchClass"
      data-cy="description-callout"
      class="notification resource-description first">
      <button
        data-cy="delete-button"
        class="delete"
        @click="showCallout = false"/>
      {{ descText }}
    </div>
  </div>
</template>

<script>
import fixtures from 'iso/fixtures'
import ResourceType from 'iso/models/resource-type'
import { map } from 'lodash'

export default {
  name: 'ResourceOverview',
  data () {
    return {
      resources: [],
      showCallout: false,
      descText: '',
      notchClass: '',
    }
  },
  created () {
    // TODO Replace fixtures.ResourceTypes with API response
    this.resources = map(fixtures.ResourceTypes, resource => new ResourceType(resource))
  },
  methods: {
    showDescription (resource) {
      this.showCallout = true
      this.descText = resource.description
      this.notchClass = resource.position
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
.resource-description {
  position: relative;
  background: #e6e6e6;
}
.resource-description:before {
  content: "";
  width: 0px;
  height: 0px;
  border: 0.8em solid transparent;
  position: absolute;
  left: 45%;
  top: -20px;
  border-bottom: 10px solid #e6e6e6;
}
.resource-description.first:before {
  left: 11%;
}
.resource-description.second:before {
  left: 37%;
}
.resource-description.third:before {
  left: 62%;
}
.resource-description.fourth:before {
  left: 87%;
}
</style>
