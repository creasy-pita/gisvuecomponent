import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
 
export default {
 
    bootstrap () {
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'development') {
            
            var mock = new MockAdapter(axios)
        
            // mock.onGet('/users').reply(200, { // 200 为状态码，后面对象为返回data
            
            //     users: [
            //         {id: 1, name: 'axios'}
            //     ]
            // })
            mock.onGet("/rulesengine/home/homeData?xmxxBsm=78").reply(200, {
                users: [{ id: 2, name: "macona" }],
              });        
        }
    }
 
}