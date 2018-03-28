<script>
import HeaderExplore from '@ui/header-explore'
import Vue from 'vue'

Vue.component('HeaderExplore', HeaderExplore)

// const comp = 'HeaderExplore'

export default {
  name: 'Vspec',
  render (h, context) {
    console.log('hello', this.$route.query['q'])
    let q = JSON.parse(decodeURIComponent(this.$route.query['q']))
    console.log('hello', q)
    return h('div',
      {
        class: {
          wrapper: true,
        },
      },
      [
        h('div', q.component),
        h(q.component, {}),
      ]
    )
  },
}
</script>

<style scoped>
.wrapper {
  margin: 1em;
  padding: 1em;
  /* border: 1px solid #1abc9c; */
  border: 1px solid #f1c40f;
}
</style>
