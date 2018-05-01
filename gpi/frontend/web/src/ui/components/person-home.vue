<template>
  <div class="section">
    <person-title
      :name="person.name"
      :qualifier="person.qualifier"
      :icon="person.icon"/>
    <person-metadata :person="person"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Person from 'iso/models/person'

export default {
  name: 'PersonHome',
  computed: {
    ...mapGetters(['personById']),
    id () {
      return this.$route.params.id
    },
    person () {
      return new Person(this.personById(this.id))
    },
  },
  created () {
    this.fetchPerson({ id: this.id })
  },
  methods: {
    ...mapActions(['fetchPerson']),
  },
}
</script>

<style scoped>
.section {
  padding: 3rem 0rem;
}
</style>
