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
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    active () {
      return this.$parent.currentPane === this
    },
  },
  mounted () {
    if ( typeof this.$parent.addPanes === 'function' ) {
      this.$parent.addPanes(this)
    } else {
      throw new Error('GettyTabs must be parent');
    }
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
