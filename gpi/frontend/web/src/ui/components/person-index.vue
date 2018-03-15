<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $route.params }}</p>
  </div>
</template>

<script>
export default {
  name: 'PersonIndex',
  data () {
    return {
      msg: 'Person Index'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: red;
}
</style>
