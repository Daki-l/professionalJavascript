// 3.5 操作符
/**
 * 定于：用于操作数据值的操作符，包括数学操作（如：加、减）、位操作符、关系操作符、相等操作符等。
 * ECMAScript的操作符石独特的，因为他们可以用于各种值，包括字符串、数值、布尔值，甚至还有对象。
 * 在应用给对象时，操作符通常会调用valueOf()和/或 toString() 方法来去的可以计算的值。
 */
console.log('3.5.1 操作符');

// 3.5.1 一元操作符
/**
 * 定义：只操作一个值的操作符叫做 一元操作符 (unary operator)。
 */
(() => {
// 1、 递增/递减操作符
/**
 * 递增和递减操作符直接照搬自C语言，但是有两个版本：前缀版(++i;)和后缀版(i++;)。
 */
// 前缀版
let age1 = 29;
console.log(++age1);    // 30   相当于 age1 = age1 + 1;
console.log(--age1);    // 29   相当于 age1 = age1 - 1;
/**
 * 使用前缀版递增和递减操作符，变量的值都会在语句被求值前改变。(在计算机科学中，这通常被称为具有副作用)
 */

let anotherAge = --age1 + 2;
console.log({ age1, anotherAge });
// {age1: 28, anotherAge: 30}

let numq1 = 2;
let numq2 = 20;
let numq3 = --numq1 + numq2;
let numq4 = numq1 + numq2;
console.log({ numq3, numq4});
// {numq3: 21, numq4: 21}

// 后缀版
let age2 = 29
console.log(age2++);    // 29   相当于 age2 = age2 + 1;
console.log(age2--);    // 30   相当于 age2 = age2 - 1;
/**
 * 后缀版与前缀版的区别：后缀版递增和递减在语句求值后才会发生改变。
 */
let numh1 = 2;
let numh2 = 20;
let numh3 = numh1-- + numh2;
let numh4 = numh1 + numh2;
console.log('numh3', numh3);    // numh3 22     numh1的原始值2 + numh2   2 + 20
console.log('numh4', numh4);    // numh4 21     numh1 - 1后的值1 + numg2 1 + 20

/**
 * 递增和递减可以被用于任何值，转化后的变量类型为数值。 遵循规则：
 * 
 * 对于 字符串，如果是有效数值形式，则转化成数值在应用改变。
 * 对于 字符串，如果不是有效数值形式，则转化为 NaN。
 * 对于 布尔值，如果是 false 转为 0 后再进行改变。
 * 对于 布尔值，如果是 true 转化为 1 后再进行改变。
 * 对于 浮点值，+1 或 -1。
 * 对于 对象，调用 valueOf() 方法取得可与操作的值。对于得到的值应用以上规则。如果是 NaN则调用toStirng() 并再次应用其他规则。
 */

let s1 = '2';
let s2 = 'z';
let b = false;
let f = 1.1;
let o = {
    valueOf() {
        return -1;
    }
}

console.log(s1++);  // 2
console.log(s2++);  // NaN
console.log(++b);   // 1
console.log(f--);   // 1.1
console.log(o--);   // -1
console.log(--o);   // -3
});

(() => {
// 2、一元 加 和 减
/**
 * 定义：加号(+)和减号(-).
 */
/**
 * 一元加 + 放在变量前面，对数字没有任何影响。
 */
let num = 25;
num = +num;
console.log(25);    // 25

/**
 * 一元减 + 放在非数值，则会执行与使用 Number() 转化函数一样的类型转换：
 * 布尔值：false => 0; true => 1;
 * 字符串：根据特殊规则进行解析
 * 对象：调用valueOf() 和/或 toString() 方法以得到可以转换的值。
 * 一元减 - 放在数值前面，则把数值变为负值。其余的的是进进行转换再变为负值
 */
let s1 = '01';
let s2 = '1.1';
let s3 = 'z';
let b = false;
let f = 1.1;
let o = {
    valueOf() {
        return -1;
    }
}
let n = 25;

console.log(+s1);  // 1
console.log(-s1);  // -1
console.log(+s2);  // 1.1
console.log(-s2);  // -1.1
console.log(+s3);  // NaN
console.log(-s3);  // NaN
console.log(+b);   // 0
console.log(-b);   // -0
console.log(+f);   // 1.1
console.log(-f);   // -1.1
console.log(+o);   // -1
console.log(-o);   // 1
console.log(+n);   // 25
console.log(-n);   // -25

console.log(+new Date());   // 1647068793078 是得到当前时间戳
console.log(+new RegExp('reg', "i"));   // NaN
console.log(+[]);  // 0
console.log(+{});   // NaN
console.log(+new Map());    // NaN
console.log(+new Set());    // NaN
// console.log(+Symbol());    //  Cannot convert a Symbol value to a number
console.log(+function () {});    // NaN
});