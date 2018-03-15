<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PersonHome',
  data () {
    return {
      msg: 'Person Home'
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
