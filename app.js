// Create a new Vue app
const app = Vue.createApp({
  // Define the data properties
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
app.component('navbar', {
  props: ['pages', 'activePage', 'nav-link-click'], // Renamed to match
  template: `
  <nav :class="[\`navbar-\${them}\`, \`bg-\${them}\`, 'navbar', 'navbar-expand-lg']">
    <a class="navbar-brand" href="#">My Vue Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li v-for="(page, index) in pages" class="nav-item" :key="index">
                <a 
                class="nav-link"
                :class="{active: activePage==index}"
                :href="page.nav.url" 
                @click="nav-link-click(index)">
                {{ page.nav.text }}</a>
            </li>
        </ul>
        <button class="btn btn-primary ms-auto" @click="toggleTheme">
          Toggle Mode
        </button>
    </div>
    </nav>
  `,
  data() {
    return {
      them: 'dark',
    }
  },
  // Methods are here, outside of the data function
  methods: {
    toggleTheme() {
      this.them = (this.them === 'Light') ? 'dark' : 'Light';
    }
  }
});


app.mount('#app');
