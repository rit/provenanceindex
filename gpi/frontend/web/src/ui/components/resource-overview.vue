<template>
  <div class="container">
    <div class="columns">
      <div
        v-for="resource in resources"
        :key="resource.name"
        class="column">
        <resource-type
          :type="resource.name"
          :logo="resource.logo"
          :number="resource.number"
          @show-description="showDescription"/>
      </div>
    </div>
    <div
      v-if="showCallout"
      class="notification">
      <button
        class="delete"
        @click="showCallout = false"/>
      {{ descText }}
    </div>
  </div>
</template>

<script>
import ResourceType from '@ui/resource-type.vue'

export default {
  name: 'ResourceOverview',
  components: {
    ResourceType,
  },
  data () {
    return {
      resources: [
        {name: 'Object', logo: 'object_logo', number: 80012, description: 'An Object is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit'},
        {name: 'Person / Institution', logo: 'person_logo', number: 75042, description: 'A Person / Institution is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit'},
        {name: 'Provenance Event', logo: 'event_logo', number: 100019, description: 'A Provenance Event is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit'},
        {name: 'Document', logo: 'document_logo', number: 50077, description: 'A Document is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit'},
      ],
      showCallout: false,
      descText: '',
    }
  },
  methods: {
    showDescription (name) {
      this.showCallout = true
      console.log(name)
      const desc = this.resources.find(resource => resource.name === name).description
      console.log(desc)
      this.descText = desc
    },
  },
}
</script>
