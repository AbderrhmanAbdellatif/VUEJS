Vue.createApp({
    data() {
        return {
          pageTitle:'Hello Vue',
          content:'Welcome to the wonderful worldd of vue'  
        };
    },
}).mount('#content');

Vue.createApp({
  data() {
      return {
       links:[
        {text:'Home',url:'index.html'},
        {text:'About',url:'about.html'},
        {text:'Contact',url:'Contact.html'}
      ]
      };
  },
}).mount('nav');
