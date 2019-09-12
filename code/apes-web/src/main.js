import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import * as ApesUtils from './utils/index'
import * as ApesConstants from './store/index'
import './styles/global.less'

Vue.config.productionTip = false


Vue.prototype.ApesUtils = ApesUtils
Vue.prototype.ApesConstants = ApesConstants
Vue.prototype.$goRouter = function (path) {
    this.$router.push(path)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
