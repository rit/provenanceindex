<template>
  <div
    v-show="active"
    class="pi-tab-pane">
    <slot/>
  </div>
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
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
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
}
</script>

<style scoped>
</style>
