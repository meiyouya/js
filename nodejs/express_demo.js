var express = require('express');
var app = express();

// 定义骑牛映射
app.get('/', function (request, response) {
    response.send('Hello Express');
});

// 开启服务
var server = app.listen(8081, function () {
    console.log("应用实例，访问地址为 http://127.0.0.1:8081");
});