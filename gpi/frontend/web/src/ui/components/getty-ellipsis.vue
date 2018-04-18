<template>
  <div>
    <div
      :class="{ 'pi_hide_content': hideContent, 'pi_show_content': showContent }"
      class="slotWrapper pi_hide_content is-size-7">
      <slot/>
    </div>
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
  data () {
    return {
      hideContent: true,
      showContent: false,
    }
  },
  methods: {
    toggleContent () {
      this.hideContent = !this.hideContent
      this.showContent = !this.showContent
    },
  },
}
</script>

<style scoped>
.pi_hide_content {
  overflow: hidden;
  line-height: 1rem;
  height: 3rem;
}
.pi_show_content {
  line-height: 1rem;
  height: auto;
}
</style>
