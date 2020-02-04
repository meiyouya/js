var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var util = require('util');

// 设置静态文件映射
app.use('/public', express.static('public'));
// 设置文件上传临时目录
app.use(multer({ dest: '/tmp/'}).array('file'));
// 设置cookie解析
app.use(cookieParser());

// 创建urlencode编码解析
let parser = bodyParser.urlencoded({ extended: false});
// 定义请求映射
/*app.get('/', function (request, response) {
    response.send('Hello Express');
});*/

app.get('/index', function (req, resp) {
    console.log(util.inspect(req.cookies));
   resp.sendFile(__dirname + "/html/index.html");
});

app.get('/loginGet', function (req, resp) {
   var data = {
       "username": req.query.username,
       "pwd": req.query.pwd
   };
   console.log("get data: " , data);
   resp.send(JSON.stringify(data))
});

app.post('/loginPost', parser, function (req, resp) {
   var data = {
       "username": req.body.username,
       "pwd": req.body.pwd
   };
   console.log("post data: " , data);
   resp.send(JSON.stringify(data))
});

app.get('/', function (req, resp) {
    console.log('get请求进首页');
    resp.send('This is index by get method');
});

app.post('/', function (req, resp) {
    console.log('post请求进首页');
    resp.send('This is index by post method');
});

app.get('/delUser', function (req, resp) {
   console.log('进入删除页面');
   resp.send('删除页面');
});

app.get('/listUser', function (req, resp) {
    console.log('进入列表页面');
    resp.send('列表页面');
});

app.get('/ab*c', function (req, resp) {
    console.log('正则匹配页面');
    resp.send('正则匹配页面');
});

app.post('/upload', parser, function (req, resp) {
    console.log(req.files[0]);
    console.log(__dirname);
    var dest_file = __dirname + "/upload/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(dest_file, data, function (err) {
            let result = {
                message: 'success',
                filename: req.files[0].originalname
            };
            if (err) {
                console.log(err);
                result.message = "fail";
            }
            resp.end(JSON.stringify(result));
        });
    })

});

// 开启服务
var server = app.listen(8081, function () {
    console.log("应用实例，访问地址为 http://127.0.0.1:8081");
});