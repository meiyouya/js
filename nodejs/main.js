/*
var fs = require("fs");

// 这是阻塞的方式
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 非阻塞的方式
fs.readFile('input.txt',function (err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});

console.log("执行结束");*/

/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器1
var listener1 = function listener1() {
    console.log("监听器1执行");
};

// 监听器2
var listener2 = function listener2() {
   console.log("监听器2执行");
};

// 监听器1绑定connection事件
eventEmitter.addListener('connection',listener1);

// 监听器2绑定connection事件
eventEmitter.on('connection',listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器监听connection事件");

// 触发connection事件
eventEmitter.emit('connection');

// 移除listener1
eventEmitter.removeListener('connection',listener1);
console.log("listener1不再监听");

// 触发connection事件
eventEmitter.emit('connection');

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个监听器监听connection事件");

console.log("done");*/

// buffer与字符编码
/*
const buf = Buffer.from('lawliet','ascii');
console.log(buf.toString('utf8'));
console.log(buf.toString('utf16le'));
console.log(buf.toString('ucs2'));
console.log(buf.toString('base64'));
console.log(buf.toString('latin1'));
console.log(buf.toString('binary'));
console.log(buf.toString('hex'));*/

/*buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii')); // 输出 abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)); // 输出 abcde*/

/*
// buffer 转json
let buf = Buffer.from('lawliet', 'utf-8');
console.log(buf.toJSON());  // 调用toJson方法即可
console.log(JSON.stringify(buf));   // stringify方法会隐式的调用toJson方法*/

/*// buffer 合并
let buf1 = Buffer.from('百度');
let buf2 = Buffer.from('www.baidu.com');
let buf = Buffer.concat([buf1, buf2]);
console.log(buf.toString());    // 输出  百度www.baidu.com*/

// buffer 比较
/*let buf1 = Buffer.from('adc');
let buf2 = Buffer.from('adcd');
console.log(buf1.compare(buf2));    // 输出 -1*/

// buffer拷贝
/* let buf1 = Buffer.from('abcdefg');
let buf2 = Buffer.from('1234567');
// buf1拷贝到buf2中
buf1.copy(buf2, 1, 0, 3)
console.log(buf1.toString())    // 输出abcdefg
console.log(buf2.toString())    // 输出1abc567*/

// 缓冲区裁剪
/* let buf1 = Buffer.from('abcdef');
let buf2 = buf1.slice(1, 2);
console.log(buf1.toString())    // 输出 abcdef
console.log(buf2.toString())    // 输出 b
console.log(buf1.length)    // 输出 b */

// 从流中读取数据
// var fs = require("fs");
/* var data = '';
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8')
readStream.on('data', function(chunk) {
    data += chunk;
});
readStream.on('end', function() {
    console.log(data);
});
readStream.on('error', function(err) {
    console.log(err.stack);
}); */
// 往流中写入数据
/* var d = '菜鸟教程官网地址：www.runoob.com'
var writeStream = fs.createWriteStream('output.txt')
writeStream.write(d, 'UTF8');
writeStream.end();
writeStream.on('finish', function() {
    console.log('写入完成');
});
writeStream.on('error', function(err) {
    console.log(err.stack);
}); */
// 管道流
/* var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt')
readStream.setEncoding('UTF8')
// 将readStream读取到的数据通过管道传输到writeStream中
readStream.pipe(writeStream) */
// 链式流
// var zlib = require('zlib');
// 压缩
// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
// 解压
// fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input-unzip.txt'))

// 模块
// 加载模块
// var say = require('./say')
// 调用模块内的方法
// say.hello('Node Module');
// 以对象的形式使用模块
/* var Person = require('./say')
person = new Person();
person.setName('张三');
person.sayHello(); */

// 路由
/* var server = require('./server');
var route = require('./route')
server.start(route.route) */

// 全局对象global
// __filename代表正在执行的文件名
console.log(__filename)
// __dirname代表正在执行的文件所在目录
console.log(__dirname)
function printHello() {
    console.log("Hello World");
}
// 在2000ms的延迟之后，将printHello函数执行一次
// var t = setTimeout(printHello, 2000);
// 清除定时器
// clearTimeout(t)
// 1000ms后执行printHello并且后续每间隔1000ms就会执行一次printHello
setInterval(printHello, 1000);
