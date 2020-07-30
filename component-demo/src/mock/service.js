import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {Users} from './data/user';
export default {
    bootstrap () {

        console.log('process.env.NODE_ENV' + process.env.NODE_ENV);
        var mock = new MockAdapter(axios)
        mock.onGet("/rulesengine/home/homeData?xmxxBsm=78").reply(200, {
            // users: [{ id: 2, name: "macona" }],
            Users
            });        
    },

  
}