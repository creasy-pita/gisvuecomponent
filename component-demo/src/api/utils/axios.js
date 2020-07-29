import axios from 'axios'
// import util from '../../../mock-server/util';
//认证集成start
axios.interceptors.request.use(config => {
    //
    // console.log("------------------------------fgx----------------------------------");
    // console.log(config);
    // console.log("------------------------------fgx----------------------------------");

    // if(config.url.indexOf("/rulesengine/home/homeData")>-1){
    //     // var json = util.getJsonFile('./userInfo.json');
    //     var json = {a:"b"};
    //     console.log(json);
    //     // res.json(Mock.mock(json));
    // }
    return config;
  }, error => {
    return Promise.reject(error);
  });

//   axios.interceptors.response.use(res => {

//   });
export default axios;