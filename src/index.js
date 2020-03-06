import './js/script'



window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  el: '#app'
})