// 3.5.4 乘性操作符
/**
 * ECMAScript定义了3个乘性操作符：乘法、除法和取模。
 * 这些操作符和他们在JAVA、C语言中对应的操作符作用一样，但是在处理非数值时，它们也会包含一些自动的类型转换。
 * 如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用Number() 转换函数转换为数值。
 * 这意味着空字符串会被当成0，而布尔true 会被当为1。
 */
(() => {
// 1、乘法操作符
/**
 * 乘法操作符由一个星号(*)表示，可以用于计算两个数值的乘积。
 * 
 * 乘法操作符在处理特殊值时也会有一些特殊的行为。
 * 如果操作数都是数值，则执行常规的乘法运算，即 正正得正，负负得正，正负得负。如果超出则返回 Infinity、-Infinity。
 * 如果有任一操作数是NaN，则返回 NaN。
 * 如果是 Infinity 乘以 0，则返回 NaN。
 * 如果是 Infinity 乘以非0的有限数值，则根据第二个操作数的符号返回 Infinity或 -Infinity。
 * 如果是 Infinity 乘以 Infinity，则返回 Infinity。
 * 如果有不是数值的操作数，则先在后台用Number() 将其转换为数值，然后在应用以上规则。
 */
console.log( 33 * 44 ); // 1452
console.log( -33 * -44 );   // 1452
console.log( -33 * 44 );    // -1452
console.log( 33 * NaN );    // NaN
console.log( Infinity * 0 );    // NaN
console.log( Infinity * 33 );   // Infinity
console.log( Infinity * -33 );  // -Infinity
console.log( Infinity * Infinity ); // Infinity
console.log( '33' * '44' ); // 1452

});

(() => {
// 2、除法操作符
/**
 * 除法操作符由一个斜杠(/)表示，用于计算第一个操作数除以第二个操作数的商。
 * 
 * 除法操作符针对特殊值也有一些特殊的行为。
 * 如果操作数都是数值，则执行常规的除法运算，即 正正得正，负负得正，正负得负。如果不能表示商则返回 Infinity、-Infinity。
 * 如果有任一操作数是NaN，则返回 NaN。
 * 如果是 Infinity 除以 Infinity，则返回 NaN。
 * 如果是 0 除以 0，则返回 NaN。
 * 如果是非 0 的有限值除以 0，则根据第一个操作数的符号返回 Infinity或 -Infinity。
 * 如果是 Infinity除以任何数，则根据第二个操作数的符号返回 Infinity或 -Infinity。
 * 如果有不是数值的操作数，则先在后台用Number() 将其转换为数值，然后在应用以上规则。
 */

console.log( 10 / 2);  // 5
console.log( 10 / NaN );  //NaN
console.log( Infinity/ Infinity );  //NaN
console.log( 0 / 0 );  // NaN
console.log( 10 / 0 );  // Infinity
console.log( Infinity / 2 );  // Infinity
console.log( Infinity / -2 );  // -Infinity

})();