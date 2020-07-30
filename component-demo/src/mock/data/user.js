import Mock from 'mockjs'
 
const Users = []
 
// guid cname date integer 都是 mock 中生成对应类型数据的函数
 
for (let i = 0; i < 10; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }))
}
export { Users }