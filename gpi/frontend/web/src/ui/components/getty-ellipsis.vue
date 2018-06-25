<template>
  <div>
    <div
      :class="{ 'pi-show-content': showContent }"
      class="pi-slot-wrapper is-size-7">
      <slot/>
    </div>
    <div>
      <a
        class="is-uppercase is-size-7"
        href="#"
        @click.prevent="toggleContent()">
        <translate>
          %{ moreOrLess }
        </translate>
      </a>
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
  computed: {
    moreOrLess () {
      return this.showContent ? this.$gettext('Show Less') : this.$gettext('Read More...')
    },
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
