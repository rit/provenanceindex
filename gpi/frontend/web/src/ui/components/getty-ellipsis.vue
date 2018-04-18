<template>
  <div>
    <div
      :class="{ 'pi-show-content': showContent }"
      class="pi-slot-wrapper is-size-7">
      <slot/>
    </div>
    <div
      v-if="showContent">
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">Show Less</a>
    </div>
    <div
      v-else>
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">Read More...</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GettyEllipsis',
  data () {
    return {
      showContent: false,
    }
  },
  methods: {
    toggleContent () {
      this.showContent = !this.showContent
    },
  },
}
</script>

<style scoped>
.pi-slot-wrapper {
  overflow: hidden;
  line-height: 1rem;
  height: 3rem;
}
.pi-show-content {
  line-height: 1rem;
  height: auto;
}
</style>
