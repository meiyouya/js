// 暴露接口
// exports.hello = function (word) {
    // console.log('Hello, ' + word);
// }

// 如果要把整个模块以对象的形式暴露，则使用这种方式
function Person() {
    var name;
    this.setName = function(n) {
        name = n ;
    };
    this.sayHello = function() {
        console.log('Hello, ' + name);
    };
};
module.exports = Person;