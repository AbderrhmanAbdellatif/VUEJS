<template>
  <div id="app">
    <!-- Navbar -->
    <navbar :pages="pages" :active-page="activePage" :navLinkClick="(index) => activePage = index">
    </navbar>



    <page-viewer :page="pages[activePage]">
    </page-viewer>

  </div>
</template>
<script>
import PageViewer from './PageViewer.vue'
import Navbar from './Navbar.vue'

export default {
  components: {
    PageViewer,
    Navbar
  },
  data() {
    return {
      activePage: 0,

      // Array of page objects
      pages: [
        {
          // Nav information
          nav: { text: 'Home', url: 'index.html' },
          // Page-specific information
          pageTitle: 'Hello Vue',
          content: 'Welcome to the wonderful world of Vue'
        },
        {
          // Nav information
          nav: { text: 'About', url: 'about.html' },
          // Page-specific information
          pageTitle: 'About Vue',
          content: 'This is the About page'
        },
        {
          // Nav information
          nav: { text: 'Contact', url: 'contact.html' },
          // Page-specific information
          pageTitle: 'Contact Vue',
          content: 'This is the Contact page'
        }
      ]
    };
  }

}
</script>
