<template>
  <section>
    <h1>
      <span>
        {{ resource.heading() }}
      </span>
      | {{ resource.qualifier }} </h1>
    <ul>
      <li
        v-for="[label, value] in resource.blurbFields()"
        :key="label" >
        <span>{{ label }}</span>
        {{ value }}
      </li>
    </ul>

    <div>
      <h2>Related Resources</h2>
      <section>
        <div
          v-for="badge in resource.relatedCountBadges()"
          :key="badge.type">
          <count-badge
            :count="badge.count"
            :resource="badge.type"
          />
        </div>
      </section>
    </div>
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
