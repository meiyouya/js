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
exports.start = start;