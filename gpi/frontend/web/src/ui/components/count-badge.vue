<template>
  <router-link
    :to="{ name: namedRoute, params: { id: id }}"
    class="button">
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>{{ count }}</span>
  </router-link>
</template>

<script>
const icons = {
  'document': 'book',
  'event': 'calendar',
  'object': 'paint-brush',
  'person': 'person',
}

const typeToNamedRoute = {
  'person': 'person-related-persons',
  'event': 'person-related-events',
  'object': 'person-related-objects',
  'document': 'person-related-documents',
}
export default {
  name: 'CountBadge',
  props: {
    resource: {
      required: true,
      type: String,
      validator (val) {
        // val must be one of the keys
        return icons[val]
      },
    },
    count: {
      required: true,
      type: Number,
    },
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    icon () {
      return icons[this.resource]
    },
    namedRoute () {
      return typeToNamedRoute[this.resource]
    },
  },
}
</script>

<style scoped>
</style>
