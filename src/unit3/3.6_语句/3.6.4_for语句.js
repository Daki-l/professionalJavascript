
console.log('3.6.4 for语句');
(() => {
// 3.6.4 for语句
/**
 * for 语句是一种先测试循环语句，增加了进入循环之前的初始代码，以及循环执行后要执行的表达式，语法：
    for (initialization; expression; post-loop-expression) statment
 */
let count = 10;
for (let i = 0; i < count; i ++) {
    console.log(i);     // 0 1 2 3 4 5 6 7 8 9
}

})();