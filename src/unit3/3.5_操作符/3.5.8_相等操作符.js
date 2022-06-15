console.log('3.5.8 相等操作符');

// 3.5.8 相等操作符
/**
 * 判断两个变量是否相等是编程中最重要的操作之一。在比较字符串、数值、布尔值是否相等时，过程很直观。但是在比较两个对象是否相等时，场景比较复杂。
 * ECMAScript中的相等和不相等操作符，原本在标记之前会执行类型转换，但很快就有人质疑这种转换是否应该发生。最终，ECMAScript提供了两组操作符。
 * 第一字是等于和不等于，他们在比较之前执行转换。第二组是全等和不全等，它们在比较之前不执行转换。
 */

(() => {
// 1、等于和不等于
/**
 * ECMAScript中等于操作符用于两个等于号(==)表示，如果操作数相等，则会返回true。不等于操作符用于叹号和等于号(!=)表示，如果两个操作数不相等，则会返回true。
 * 这两个操作符都会进行类型转换(通常称为强制类型转换)再确定操作数是否相等。
 * 
 * 在转换操作数的类型时，相等和不相等操作符遵循如下规则。
 * 如果任一操作数是布尔值，则将转换为数值再比较是否相等。false转换为0，true转换为1。
 * 如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。
 * 如果有个操作室是对象，另一个操作数不是，则调用对象的valueOf() 方法取得其原始值，再根据前面的规则进行比较。依据下面的规则进行比较：
 * null 和 undefined 不能转换为其他类型的值在进行比较。
 * 如果有任一操作数是NaN，则相等则相等操作符会返回false，不相等操作符返回true。 （NaN 不等于 NaN ）
 * 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则返回true，否则返回false
 * 一些特殊值的结果
------------------------------------------------
        表达式                   结果
    null == undefined           true
    "NaN" == NaN                false
    5 == NaN                    false
    NaN == NaN                  false
    NaN != NaN                  true
    false == 0                  true
    true == 1                   true
    true == 2                   false
    undefined == 0              false
    null == 0                   false
    "5" == 5                    true
------------------------------------------------
 */
class Father {
    valueOf() {
        return 'A';
    }
};
let child1 = new Father();
let child2 = new Father();
console.log('child1 == A', child1 == 'A');  // true
console.log('child2 == A', child2 == 'A');  // true
console.log('child1 == child2', child1 == child2);  // false

let arr = { a: 1, b: 2 };
let arr1 = arr;
let arr2 = arr;
console.log('arr1 == arr2', arr1 == arr2);  // true
});

(() => {
// 2、全等和不全等
/**
 * 全等和不全等操作符与相等和不相等操作符类似，只不过他们在比较相等时不转换操作数。
 * 全等操作符由3个等于号(===)表示，只有两个操作数在不转换的前提下相等才返回true
 * 不全等操作符由一个感叹号和两个等于号(!==)表示，只有两个操作数在不转换的前提下
 */
console.log( '55' == 55 );  // true
console.log( '55' === 55 );  // false

console.log( '55' != 55 );  // false
console.log( '55' !== 55 );  // true

console.log(null == undefined);     // true
console.log(null === undefined);    // false
});