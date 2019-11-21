var numbers = [1, 3, 5, 7, 9]
console.log(numbers)
let b = numbers.every(function (value, index, array) {  // every函数根据传入函数的返回值确定是否继续操作下一个元素
    // return value > 3     // 如果是对元素进行检测，可以用类似方式
    numbers[index] = value + 1  // 如果需要修改元素，那么使用这种方式，并且在操作正常的情况下返回true才能继续操作下一个元素
    return true
});
console.log(b)
console.log(numbers)
let c = numbers.some(function (value, index, array) {   // some更多的情况是用来做检测
    // return value > 3     // 这种就是标准的检测
    if (value > 5) {    // 使用some，如果要修改元素不需要返回true，some会把所有元素都走一遍函数
        numbers[index] = value + 1
    }
});
console.log(c)
console.log(numbers)
let d = numbers.filter(function (value, index, array) {     // filter不会影响原数组，返回一个新数组
    if (value > 5) {    // 新数组包含的元素是return true的元素
        return true
    }
});
console.log(d)
console.log(numbers)
numbers.forEach((value, index, array) => {  // foreach就相当于for循环，没有返回值
    console.log(value)
})