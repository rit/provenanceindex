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
          :type="resource.name"
          :logo="resource.logo"
          :number="resource.number"
          data-cy="resource-type"
          @show-description="showDescription"/>
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
export default {
  name: 'ResourceOverview',
  data () {
    return {
      resources: [
        {name: 'Object', logo: 'object_logo', number: 80012, description: 'An Object is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'first'},
        {name: 'Person / Institution', logo: 'person_logo', number: 75042, description: 'A Person / Institution is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'second'},
        {name: 'Provenance Event', logo: 'event_logo', number: 100019, description: 'A Provenance Event is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'third'},
        {name: 'Document', logo: 'document_logo', number: 50077, description: 'A Document is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'fourth'},
      ],
      showCallout: false,
      descText: '',
      notchClass: '',
    }
  },
  methods: {
    showDescription (name) {
      this.showCallout = true
      const activeIndex = this.resources.findIndex(resource => resource.name === name)
      this.descText = this.resources[activeIndex].description
      this.notchClass = this.resources[activeIndex].position
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
