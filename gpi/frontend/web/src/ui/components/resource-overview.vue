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
    <div class="columns resource-types">
      <template v-for="resource in resources">
        <div
          :key="resource.name"
          class="column">
          <div class="resource-wrapper">
            <resource-type
              :resource="resource"
              data-cy="resource-type"
              @show-description="showDescription(resource)"/>
          </div>
          <div
            v-show="showActive(resource)"
            :class="notchClass"
            class="notch"/>
          <div
            v-show="showActive(resource)"
            :class="'center'"
            data-cy="description-callout-mobile"
            class="notification resource-description is-hidden-tablet notch">
            <button
              data-cy="delete-button"
              class="delete mobile"
              @click="showCallout = false"/>
            {{ descText }}
          </div>
        </div>
      </template>
    </div>
    <div
      v-show="showCallout"
      :class="notchClass"
      data-cy="description-callout"
      class="notification resource-description is-hidden-mobile">
      <button
        data-cy="delete-button"
        class="delete large"
        @click="hideCallout"/>
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
    showActive (resource) {
      if (this.showCallout && this.notchClass === resource.position) {
        return true
      }
      return false
    },
    hideCallout () {
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
.resource-description {
  position: relative;
  background: #e6e6e6;
}
.notch {
  position: relative;
  margin-top: 1rem;
}
.notch:before {
  content: "";
  width: 0px;
  height: 0px;
  border: 0.8em solid transparent;
  position: absolute;
  left: 45%;
  top: -20px;
  border-bottom: 10px solid #e6e6e6;
}
</style>
