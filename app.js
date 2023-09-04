// Create a new Vue app
const app = Vue.createApp({
  // Define the data properties
  computed: {
    navbarClasses() {
      return {
        'navbar-dark bg-dark': this.useDarkNavbar,
        'navbar-light bg-light': !this.useDarkNavbar
      }
    }
  },
  data() {
    return {
      activePage: 0,
      useDarkNavbar: true,
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
});

// Mount the Vue app to a DOM element with id 'app'
app.component('page-viewer', {
  props: ['page'],
  template: `
    <div  class="container">
        <h1 >{{ page.pageTitle }}</h1>
        <p >{{ page.content }}</p>
    </div>
  `
});


app.mount('#app');
