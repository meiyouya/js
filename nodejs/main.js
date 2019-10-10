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

buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii')); // 输出 abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)); // 输出 abcde