import {Users} from './data/user';
export default {
    bootstrap (mockAdapter) {
        console.log('process.env.NODE_ENV' + process.env.NODE_ENV);
        //带或不带 ip:port 
        mockAdapter.onPost(/(http:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}|)\/activiti\/process\/proinstlist/).reply(200, {
            Users
            });
        //不带ip:port
        // mock.onPost("/activiti/process/proinstlist").reply(200, {
        //     Users
        //     });                               
    },
}