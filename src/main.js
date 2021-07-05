import Vue from 'vue'
import Buefy from 'buefy'
import VueNop from '@nop-app/vue-nop'

import 'buefy/dist/buefy.css'

import App from './App.vue'
import router from './router'
import config from './config'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueNop, {
  router,
  enabledRoutes: [
    '/posts/[0-9]+',
  ],
  settings: {
    token: config.nopToken,
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
