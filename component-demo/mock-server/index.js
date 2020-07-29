const Mock = require('mockjs');
const util = require('./util');

module.exports = function(app){
    //获取用户信息
    // app.get('/user/userinfo', function (rep, res) {
    app.get('/rulesengine/home/homeData', function (rep, res) {

        console.log("----------------------------------------------------------------");
        console.log(rep);
        var json = util.getJsonFile('./userInfo.json');
        res.json(Mock.mock(json));
    });
}