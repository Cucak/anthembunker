import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import BackToTop from "vue-backtotop";


Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(Buefy);
Vue.use(BackToTop);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
