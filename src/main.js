// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// axios (api call)
import axios from 'axios'

// bootstrap
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// axios
Vue.use(axios)
Vue.prototype.$axios = axios  // axios 전역변수로 사용하기 위해 설정

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
