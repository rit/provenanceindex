<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to the Getty',
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: green;
}
</style>
