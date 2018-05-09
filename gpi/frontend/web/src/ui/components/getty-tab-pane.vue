<template>
  <li>
    <a>
      <slot/>
    </a>
  </li>
</template>

<script>
export default {
  name: 'GettyTabPane',
  props: {
    label: String,
    labelContent: Function,
    name: String,
  },
  data () {
    return {
      index: null,
    }
  },
  computed: {
    active () {
      console.log (this.$parent.currentName)
      console.log (this.name)
      console.log(this.index)
      return this.$parent.currentName === (this.name || this.index)
    },
  },
  watch: {
    label () {
      this.$parent.$forceUpdate()
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
