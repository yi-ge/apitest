// require it
var Client = require('aliyun-api-gateway').Client;

// create client instance with appkey and appsecret
var client = new Client('dj2kl1i2oujd', 'djkl21iuljksdaji');

var url = 'https://68821f158b514f3982232e92aaf08255-cn-qingdao.alicloudapi.com/api/Office2PDF';

var result = client.post(url, {
  data: {}
})

console.log(result);
