<template>
  <div class="card resource">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="getImgUrl(logo)">
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <p
        data-cy="card-title"
        class="has-text-weight-bold is-size-6">{{ type }}</p>
      <p class="is-size-6">{{ formatNumber(number) }} Records</p>
      <a
        href="#"
        class="is-size-7"
        @click="showDescription">{{ question }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceType',
  props: {
    type: {
      type: String,
      default () {
        return ''
      },
    },
    logo: {
      type: String,
      default () {
        return ''
      },
    },
    number: {
      type: Number,
      default () {
        return 0
      },
    },
  },
  computed: {
    question () {
      if (this.type === 'Object') {
        return "What's an " + this.type + '?'
      } else {
        return "What's a " + this.type + '?'
      }
    },
  },
  methods: {
    getImgUrl (pet) {
      var images = require.context('@static', false, /\.png$/)
      return images('./' + this.logo + '.png')
    },
    formatNumber (num) {
      return num.toLocaleString()
    },
    showDescription () {
      this.$emit('show-description', this.type)
    },
  },
}
</script>

<style scoped>
.resource {
  height: 100%;
  background: #e6e6e6;
}
a {
  text-decoration: underline;
  color: black;
}
</style>
