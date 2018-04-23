<template>
  <div class="section">
    <person-title
      :name="personData.name"
      :qualifier="personData.qualifier"
      :icon="personData.icon"/>
    <person-metadata :person-data="personData"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Person from 'iso/models/person'

export default {
  name: 'PersonHome',
  data () {
    return {
      personData: {},
    }
  },
  computed: {
    ...mapState(['person']),
  },
  created () {
    // TODO Replace fixtures.Person with API response
    this.personData = new Person(this.person)
  },
}
</script>

<style scoped>
.section {
  padding: 3rem 0rem;
}
</style>
