import Vue from 'vue'
import App from './App.vue'
//微信ui框架
import 'weui'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
