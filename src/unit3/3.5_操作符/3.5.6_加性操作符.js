console.log('3.5.6 加性操作符');

// 3.5.6 加性操作符
/**
 * 加性操作符，即加法和减法操作符，一般都是编程语言中最简单的操作符，在ECMAScript中，这两个操作符由一些特殊行为。
 * 加性操作符会在后台发生不同的数据转换。
 */

(() => {
// 1、加法操作符
/**
 * 加法操作符由加号(+)表示， 用于求2个数的和。
 * 
 * 加法操作符在处理值时遵循以下规则
 * 
 * 如果两个操作数都是数值，加法操作符执行加法运算并根据以下规则返回结果：
 * 如果有任一数是NaN，则返回 NaN
 * 如果 Infinity + Infinity，则返回 Infinity
 * 如果 -Infinity + -Infinity，则返回 -Infinity
 * 如果 Infinity + -Infinity，则返回 NaN
 * 如果 +0 + +0，则返回 +0
 * 如果 +0 + -0，则返回 +0
 * 如果 -0 + -0，则返回 -0
 * 如果有一个操作数是字符串，则要应用以下规则：
 * 如果两个操作符都是字符串，则将第二个字符拼接到第一个字符串后面
 * 如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起。
 * 如果有任一操作数是对象、数值、布尔值，则调用他们的toString() 方法以获取字符串，然后再应用情面的关联字符串规则。
 * 对于undefined、null，则调用String() 函数，分别获取 "undefined"、 "null"
 */
let result1 = 5 + 5;
console.log(result1);   // 10
let result2 = 5 + '5';
console.log(result2);   // 55
// 多个连续的 +号连续使用时，每个+ 依次执行。
let num1 = 5;
let num2 = 10;
let message = 'The sum of 5 and 10 is ' + num1 + num2;
console.log(message);   // The sum of 5 and 10 is 510

let message2 = 'The sum of 5 and 10 is ' + (num1 + num2);
console.log(message2);   // The sum of 5 and 10 is 15

});

(() => {
// 2、减法操作符
/**
 * 减法操作符由减号(-)表示，用于减法操作。
 * 
 * 减法操作符在处理值时遵循以下规则
 * 
 * 如果两个操作数都是数值，减法操作符执行加法运算并根据以下规则返回结果：
 * 如果任一操作数是NaN，则返回 NaN
 * 如果 Infinity - Infinity，则返回 NaN
 * 如果 Infinity - -Infinity，则返回 NaN
 * 如果 Infinity - -Infinity，则返回 Infinity
 * 如果 -Infinity - Infinity，则返回 -Infinity
 * 如果 +0 - +0，则返回 +0
 * 如果 +0 - -0，则返回 -0
 * 如果 -0 - -0，则返回 -0
 * 如果有任一操作数是字符串、布尔值、null、undefined，则在后台使用 Number() 将其转换为数值，然后再根据前面的规则执行数学运算。
 * 如果有任一操作数是对象，则调用其valueOf() 方法取得表示它的数值。如果对象没有valueOf()方法，则调用其toString()方法，然后再将得到的字符串转换为数值。
 */
console.log( 5 - true );    // 4
console.log( NaN - 1 );    // NaN
console.log( 5 - 3 );    // 2
console.log( 5 - '' );    // 5
console.log( 5 - '2' );    // 3
console.log( 5 - null );    // 5
});