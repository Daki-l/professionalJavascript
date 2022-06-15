console.log('3.6 语句');

// 3.6 语句
/**
 * ECMA-262 描述了一些语句(也称为流控制语句)，而ECMAScript 中的大部分语法都体现在语句中。
 * 语句通常使用一或多个关键字完成既定的任务。
 */

console.log('3.6.1 if语句');

(() => {
// 3.6.1 if语句
/**
 * if 语句的语法是：
 * if (condition) statement1 else statement2
 * 条件(condition)可以是任何表达式，并且求值结果不一定是布尔值。因为ECMAcprit会自动调用 Boolean() 函数将这个表达式的值转换为布尔值。
 * 如果条件求值为 true，则执行语句 statement1，else 执行语句 statement2。
 * statement 可以是一行代码，也可以是一个代码块
 */
if (1 > 25) 
    console.log(true);
else {
    console.log(false);
}
// false

// 推荐：始终使用代码块，即使只有一行代码，这样可以避免对在什么条件下执行什么产生疑惑。也利于代码阅读。

/**
 * 也可以使用连续使用多个if语句：
    if (i < 10) {
        //... statement1
    } else if (i < 100) {
        //... statement2
    } else {
        //... statement3
    }
 */
});