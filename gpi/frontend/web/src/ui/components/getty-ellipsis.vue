<template>
  <div>
    <div
      :class="{ 'pi-show-content': showContent }"
      class="pi-slot-wrapper is-size-7">
      <slot/>
    </div>
    <div>
      <!-- To do: figure out how to translate dynamic text -->
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">{{ moreOrLess() }}</a>
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
    moreOrLess () {
      return this.showContent ? this.$gettext('Show Less') : this.$gettext('Read More...')
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
