// 3.5.5 指数操作符
/**
 * 使用 Math.pow(x, y) 对x数值进行指数y求值，在ECMAScript7 中新增了指数操作符(**)
 */

(() => {
console.log(Math.pow(3, 2));    // 9
console.log(3 ** 2);    // 9

console.log(Math.pow(16, 0.5));    // 4
console.log(16 ** 0.5);    // 4

// 指数操作符也有知己的指数赋值操作符 **= ，改操作符执行指数运算和结果的赋值操作：
let squared = 3;
squared **= 2;
console.log(squared);   // 9

let squar = 16;
squar **= 0.5;
console.log(squar);   // 4
})();