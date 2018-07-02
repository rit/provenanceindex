<template>
  <div>
    <blurb-resource :resource="related"/>
  </div>
</template>

<script>
import { makeRembrandt } from 'iso/fixtures'
import Person from 'iso/models/person'

export default {
  name: 'RelatedPersonHome',
  data () {
    return {
      related: {},
    }
  },
  mounted () {
    makeRembrandt().then(props => {
      let artist = new Person(props)
      this.related = artist
    })
    this.$emit('RelatedPersonHome', this)
  },
}
</script>

<style scoped>
</style>
