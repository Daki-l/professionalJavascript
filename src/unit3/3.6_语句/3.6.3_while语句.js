console.log('3.6.3 while语句');
(() => {
// 3.6.3 while语句
/**
 * while 语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码(循环体内的代码可能一次都不执行)。语法：
    while (expression) { statement }
 */

let i = 0;
while (i < 10) {
    i += 3;
    console.log(i);    // 3 6 9 12
}

// 变量 i 从 0 开始，每次循环递增 2 。只要 i 下小于 10，循环就会继续

});