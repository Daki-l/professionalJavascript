console.log('3.6.9 with语句');

(() => {
// 3.6.9 with语句

/**
 * with 语句的用途时将代码作用域设置为特定的对象，语法：
 * with (expression) statement;
 * 使用 with 语句的主要场景是针对一个对象的反复操作，这时候将代码作用域设置为该对象提供便利，例子：
 */

// let qs = location.search.substring(1);
// let hostName = location.hostname;
// let url = location.href;
// console.log('qs, hostName, url', qs, hostName, url);
// // qs, hostName, url  localhost http://localhost:9000/

// 上述代码中每一行都用到了localtion 对象，如果使用with语句，可以少些一些代码
with(location) {
    let qs = search.substring(1)
    let hostName = hostname;
    let url = href;
    console.log('qs, hostName, url', qs, hostName, url);
    // qs, hostName, url  localhost http://localhost:9000/
}

/**
 * 这里，with语句用于连接location 对象，这意味这在这个语句内部，每个对象首先会被认为是一个局部变量。
 * 如果没有找到该局部变量，则会搜索location对象，看它是否由一个同名的属性。如果有，则该变量会被求值为location对象的属性。
 * 
 * 注：严格模式不允许使用with语句，否则会抛出错误。
 * 注：由于with 语句影响性能且难于调试其中的代码，通常不推荐使在产品代码中使用with代码
 */
})();