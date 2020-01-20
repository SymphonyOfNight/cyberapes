import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import  './plugins/index'
import './core/global.less'
import  './core/index'
import './components/Svgs'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
