import Vue from 'vue'
import App from './App'
import Http from './plugins/httpRequest/http'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)

Vue.use(Http)

app.$mount()
