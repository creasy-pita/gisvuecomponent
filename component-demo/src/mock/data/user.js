import Mock from 'mockjs'
 
const Users = []
 
// guid cname date integer 都是 mock 中生成对应类型数据的函数
 
for (let i = 0; i < 20; i++) {
    Users.push(Mock.mock({
        url: Mock.mock('@url'),
        id:Mock.mock('@id'),  
        procInstId: Mock.mock('@id'),
        procDefId: Mock.mock('@id'),
        businessKey:Mock.mock('@date()'),
        procDefKey: Mock.mock('@id'),
        category: Mock.mock('@csentence(4, 7)'),
        startUserId:Mock.mock('@word(3, 5)'),
        startTime: Mock.mock('@datetime'),
        task_id: Mock.mock('@id'),
        task_procInstId:Mock.mock('@id'),
        task_procDefId: Mock.mock('@id'),
        "task_name|1-10": 5,
        task_taskDefKey: Mock.mock('@id'),
        task_assignee: Mock.mock('@first'),
        "task_priority|10-100": 50,
        task_createTimeOn:  Mock.mock('@datetime'),
        "task_suspended|1": true,
        "task_taskState|1-10": 2,
        "task_hastenState|1-10": 2,
        "task_supervisionState|1-10": 2,
    }))
}
export { Users }