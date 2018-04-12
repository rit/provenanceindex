<template>
  <div class="section">
    <person-title
      :name="person.name"
      :qualifier="person.qualifier"
      :icon="person.icon"/>
  </div>
</template>

<script>
import fixtures from 'iso/fixtures'
import Person from 'iso/models/person'

export default {
  name: 'PersonHome',
  data () {
    return {
      person: {},
    }
  },
  created () {
    // TODO Replace fixtures.Person with API response
    this.person = new Person(fixtures.Person)
  },
}
</script>

<style scoped>
.section {
  padding: 3rem 0rem;
}
</style>
