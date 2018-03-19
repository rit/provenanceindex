<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data () {
    return {
      msg: 'Person',
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
