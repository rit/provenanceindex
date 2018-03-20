<template>
  <footer>
    <hr>
    <div class="container">
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
        <div class="footer-links column is-half-desktop is-two-thirds-tablet has-text-centered has-text-right-tablet-only">
          <p>
            &copy; The J. Paul Getty Trust |
            <a href= "http://www.getty.edu/legal/privacy.html">Privacy Policy</a> |
            <a href= "http://www.getty.edu/legal/copyright.html">Terms of Use</a> |
            <a href= "http://www.getty.edu/about/contact_us.html">Contact Us</a>
          </p>
        </div>
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
.footer-links p{
  padding-top: 5px;
}
.footer-links a{
  white-space: nowrap;
}
a {
  color: #4a4a4a;
}
</style>
