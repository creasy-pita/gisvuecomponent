import {Users} from './data/user';
export default ({
    bootstrap (mockAdapter) {
        mockAdapter.onGet("/activiti/process/proinstlist").reply(200, {
            Users
        });        
    },
})