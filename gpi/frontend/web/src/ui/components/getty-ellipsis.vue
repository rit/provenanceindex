<template>
  <div>
    <slot/>
    <div
      v-if="hideContent"
      class="pi-read-more">
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">Read More...</a>
    </div>
    <div
      v-if="showContent"
      class="pi-read-less">
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">Show Less</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GettyEllipsis',
  props: {
    hideContent: {
      type: Boolean,
      required: true,
    },
    showContent: {
      type: Boolean,
      required: true,
    },
    handler: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleContent () {
      this.handler.toggleContent(this)
    },
  },
}
</script>

<style scoped>
</style>
