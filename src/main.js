import Vue from 'vue'
import App from './App.vue'


// Try to remove these three line:
/**/
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')
Vue.use(VueTour)
/**/
/***********************/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
