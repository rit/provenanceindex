<template>
  <li
    :class="{ 'is-active': active }"
    @click.prevent="updateActive">
    <a>{{ label }}
    </a>
    <slot v-if="active"/>
  </li>
</template>

<script>
export default {
  name: 'GettyTabPane',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    /* handler: {
      type: Object,
      required: true,
    }, */
  },
  computed: {
    active () {
      return this.$parent.currentName === this.name
    },
  },
  mounted () {
    this.$parent.addPanes(this)
  },
  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    updateActive () {
      this.$parent.handleTabClick(this, this.name)
    },
  },
}
</script>
