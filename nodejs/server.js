/*
var http = require('http');
var url = require('url');

// 将路由函数作为参数传递
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("pathname: " + pathname);

        // 调用路由
        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("start success!! listen on port 8888");
}
exports.start = start;*/

// web
const http = require('http');
const url = require('url');
const fs = require('fs');

// 创建服务器
http.createServer(function (request, response) {
    // 解析请求
    let pathname = url.parse(request.url).pathname;
    console.log('request url is：' + pathname);
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);
console.log('server run at http://127.0.0.1:8080');