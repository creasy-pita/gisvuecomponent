// let mock = require('./servicewrap');
// let mock = require('./service');
const env = process.env.NODE_ENV;
const mock = require('./service'+ ((env==='development')?'':'wrap')) ;
//caution：if else compile behaviar 
// if (env==='development') {
//     mock = require('./service');
// } else {
//     mock = require('./servicewrap');
// }
//采用require 导入会有default属性
export default mock.default    