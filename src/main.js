import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
// import router from './router'

import './common/stylus/variable.styl'
// Vue.config.productionTip = false

fastclick.attch(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
