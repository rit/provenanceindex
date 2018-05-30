<template>
  <section>
    <h1>{{ resource.name }} | resource type </h1>
    <ul>
      <li
        v-for="[label, value] in resource.blurbFields()"
        :key="label" >
        <span>{{ label }}</span>
        {{ value }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'BlurbResource',
  props: {
    resource: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
</style>
