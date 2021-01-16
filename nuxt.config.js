export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'findadoc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
],
firebase: {
  config :  {
      apiKey: "AIzaSyAjIhMU4Co5LvhhEoqiGqbF5R6zmsQfIZY",
      authDomain: "findadoc-bc230.firebaseapp.com",
      databaseURL: "https://findadoc-bc230-default-rtdb.firebaseio.com",
      projectId: "findadoc-bc230",
      storageBucket: "findadoc-bc230.appspot.com",
      messagingSenderId: "871643437476",
      appId: "1:871643437476:web:d7271d01ee125e9f7bc931",
      measurementId: "G-SN6SHYMJKY"
  }
},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
