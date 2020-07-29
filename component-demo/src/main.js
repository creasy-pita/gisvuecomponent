import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from './api/utils/axios'
import axios from 'axios'
import mock from './mock'
mock.bootstrap();
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
// var axios = require("axios");
// var MockAdapter = require("axios-mock-adapter");

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios);

// // Mock GET request to /users when param `searchText` is 'John'
// // arguments for reply are (status, data, headers)
// mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
//   users: [{ id: 1, name: "John Smith" }],
// });

// axios
//   .get("/users", { params: { searchText: "John" } })
//   .then(function (response) {
//     console.log(response.data);
//   });