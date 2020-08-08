import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import "./assets/button.scss"
// import "./assets/bluesea.css"
// import  "./assets/peachprincess.css"
import axios from 'axios'
import mock from './mock'
import MockAdapter from 'axios-mock-adapter'

const mockAdapter = new MockAdapter(axios);
mock.bootstrap(mockAdapter);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
