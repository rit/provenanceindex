<template>
  <fieldset class="wrapper">
    <legend>vspec: {{ componentName }}</legend>
    <vspec/>
  </fieldset>
</template>

<script>
import Vue from 'vue'
import { decode, register } from 'iso/vspec'

const Vspec = {
  name: 'Vspec',
  render (h) {
    let q = decode(this.$route.query['q'])
    register(Vue, q.components)
    this.$parent.setComponentName(q.component)
    return h('div',
      [
        h(q.component, {}),
      ]
    )
  },
}

Vue.component('Vspec', Vspec)

export default {
  name: 'VspecRoot',
  data () {
    return {
      componentName: 'Component',
    }
  },
  methods: {
    setComponentName (name) {
      this.componentName = name
    },
  },
}
</script>

<style scoped>
.wrapper {
  margin: 1em;
  padding: 1em;
  border: 1px solid #f1c40f;
}

legend {
  padding: 0 0.5em;
  font-size: 1.2em;
  font-family: monospace;
}
</style>
