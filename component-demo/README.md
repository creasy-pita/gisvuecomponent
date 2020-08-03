# component-demo


## axios + MockAdapter+mockjs 实现多环境切换获取mockjs数据或真实接口数据

see the local project: E:\work\myproject\vue2\TestMyThirdPackage
组件打包后，主项目如何使用

```javascript
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
//导入 gisqworkcenter的mock服务
const mockAdapter = new MockAdapter(axios);
import {workcentermock} from "gisqworkcenter";

//gisqworkcenter中调用接口部分使用了 this.$axios,所以需要注册到Vue原型中
workcentermock.bootstrap(mockAdapter)
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app');

```

## axios-mock-adapter
主要查看  handle_request.js handlerequest



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
