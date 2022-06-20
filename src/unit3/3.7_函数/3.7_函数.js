console.log('3.7_函数');

(() => {
// 3.7 函数
/**
 * 函数对任意语言来说都是核心组件，因为它们可以封装语句，然后再任何地方、任何时候执行。
 * ECMASciprt 中的函数使用 function 关键词声明，后面跟一组参数，然后时函数体。 语法：
    function functionName (arg0, arg1, ..., argn) {
        statements
    }
 */

function sayHi (name, message) {
    console.log('Hello ' + name + ',' + message);
}

sayHi('Mary', 'how are you today?');
// Hello Mary,how are you today?

/**
 * ECMAScript 中的函数不需要指定是否返回值。任何函数在任何时间都可以使用 return 语句来返回函数的值
 */

function sum (num1, num2) {
    return num1 + num2;
    console.log('hello');   // 不执行
}

let result = sum(5, 10);

console.log(result);    // 15

function diff(num1, num2) {
    if (num1 < num2) {
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

// diff() 函数用于计算两个数值的差，每个分支都有自己的return语句

// return 语句也可以不带返回值，这时候函数会立即停止执行并返回 undefined。这种用法最常用与提前终止函数执行，并不是为了返回值，

// 注: 最佳实践时函数要么返回值,要么不返回值(保持一致性) 只在某个条件下返回值的函数会带来麻烦
// 函数不能以 eval 或 arguments 作为名称
// 函数的参数不能叫 eval 或 arguments;
// 两个命名不能同时拥有同一个名称
});