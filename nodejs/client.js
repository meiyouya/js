var http = require('http');

// 请求选项
var options = {
    host: 'localhost',
    port: '8080',
    path: '/html/index.html'
};

// 处理响应的回调
var callback = function (resp) {
    // 更新数据
    var body = '';
    resp.on('data', function (data) {
        body += data;
    });

    // 接收数据完成
    resp.on('end', function () {
        console.log(body);
    });
};

// 发送请求
let req = http.request(options,callback);
req.end();
