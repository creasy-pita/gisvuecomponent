import axios from 'axios'

//认证集成start
axios.interceptors.request.use(config => {
    
    return config;
  }, error => {
    return Promise.reject(error);
  });

//   axios.interceptors.response.use(res => {

//   });
export default axios;