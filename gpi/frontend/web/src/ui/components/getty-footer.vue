<template>
  <footer>
    <hr>
    <div class="columns">
      <div class="column level is-mobile is-one-quarter-desktop is-one-third-tablet has-text-centered-mobile">
        <a
          class="level-item is-narrow"
          href="http://www.getty.edu">
          <img
            class="level-item footer-logo"
            src="@static/getty_logo_og.png" >
          The J. Paul Getty Trust
        </a>
      </div>
      <div class="column is-half-desktop is-two-thirds-tablet has-text-centered has-text-right-tablet-only">
        <ul>
          <li>&copy; The J. Paul Getty Trust</li>
          <li><a href= "http://www.getty.edu/legal/privacy.html">Privacy Policy</a></li>
          <li><a href= "http://www.getty.edu/legal/copyright.html">Terms of Use</a></li>
          <li><a href= "http://www.getty.edu/about/contact_us.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GettyFooter',
}
</script>

<style scoped>
.footer-logo {
  max-height: 35px;
}
a {
  color: #4a4a4a;
}
ul{
  padding-top: 5px;
}
li {
  float: left;
}
li a{
  white-space: nowrap;
}
li:not(:last-child):after {
  content: "|";
  padding: 0 0.8em;
}
</style>
