
const env = process.env.NODE_ENV;
const mock = require('./service'+ ((env==='development')?'':'wrap')) ;
//采用require 导入会有default属性
export default mock.default    
