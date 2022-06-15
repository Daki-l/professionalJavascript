console.log('3.6.2 do-while语句');
(() => {
// 3.6.2 do-while语句
/**
 * do-while 语句是一种后测试循环语句，即循环体中的代码执行后才会对退出的条件进行求值(循环体内的代码至少会执行一次)。语法：
    do {
        statement
    } while (expression);
 */

let i = 0;
do {
    i += 3;
    console.log(i); // 3 6 9 12
} while(i < 10);

// 只要 i 小于 10，循环会重复执行，i 从 0 开始，每次循环递增 3。

});