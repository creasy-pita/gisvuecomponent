const webpack = require('webpack');
module.exports = {
  'devServer': {
    open: false,
    // 'proxy': 'http://gateway.gisquest.com:19088',
    'proxy': 'http://192.168.11.78:19011',
    'port': 19013,
    // before: require('./mock-server'),
  },




};
