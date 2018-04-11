<template>
  <div>
    <div class="has-text-centered">
      <img
        class="pi-notch"
        src="@static/up-arrow.png">
    </div>
    <div class="notification pi-description">
      <button
        data-cy="delete-button"
        class="delete mobile"
        @click="handler.deactivate()"/>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GettyCallout',
  props: {
    text: {
      type: String,
      default: '',
    },
    handler: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$border-width: 2px;
$img-width: 20px;

.pi-notch {
  width: $img-width;
  height: $img-width;
  margin-bottom: -($img-width/2 + $border-width);
}

.pi-description {
  border: $border-width solid #ccc;
  background: #e6e6e6;
  padding: 1em;
  p {
    margin-right: 1em;
  }
}
</style>
