<template>
  <a class="button">
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>{{ count }}</span>
  </a>
</template>

<script>
const icons = {
  'document': 'book',
  'event': 'calendar',
  'object': 'image',
  'person': 'person',
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
  },
  computed: {
    icon () {
      return icons[this.resource]
    },
  },
}
</script>

<style scoped>
</style>
