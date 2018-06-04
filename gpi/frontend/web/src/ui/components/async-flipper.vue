<template>
  <transition
    appear
    name="fade"
    mode="out-in">
    <div
      v-if="resolvedWith"
      key="content" >
      <slot />
    </div>
    <div
      v-else
      key="loading">
      <span class="loader" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AsyncFlipper',
  props: {
    resolvedWith: {
      default: null,
      type: Object,
    },
  },
}
</script>

<style scoped lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
