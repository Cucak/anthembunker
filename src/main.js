import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'


Vue.config.productionTip = false
Vue.use(VueCarousel)
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
