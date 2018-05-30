<template>
  <div>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <span class="icon is-large">
            <font-awesome-icon
              :icon="icon"
              size="3x" />
          </span>
        </div>
        <div
          class="level-item"
          data-cy="person-name">
          <p class="is-size-6 has-text-weight-bold">{{ name }}</p>
        </div>
        <div class="level-item">
          <p class="is-size-6 is-italic">{{ qualifier }}</p>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'PersonTitle',
  props: {
    name: {
      type: String,
      required: true,
    },
    qualifier: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
hr {
  height: 4px;
  margin-bottom: .5rem;
  background: #808080;
}
</style>
