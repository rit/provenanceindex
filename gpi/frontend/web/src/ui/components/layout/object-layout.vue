<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $route.params }}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ObjectLayout',
  data () {
    return {
      msg: 'ObjectLayout',
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: red;
}
</style>
