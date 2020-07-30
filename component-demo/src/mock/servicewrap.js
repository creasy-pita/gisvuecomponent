import {Users} from './data/user';
export default ({
    bootstrap (mockAdapter) {
        mockAdapter.onGet("/rulesengine/home/homeData?xmxxBsm=78").reply(200, {
        // users: [{ id: 2, name: "macona" }],
            Users
        });        
    },

  
})