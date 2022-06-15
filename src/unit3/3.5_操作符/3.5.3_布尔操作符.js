// 3.5.3 布尔操作符
/**
 * 对于编程语言来说，布尔操作符跟相等操作符几乎同样重要。如果没有能力测试两个数值的关系，那么像 if-else 和循环这样的语句也没什么用了。
 */
console.log('3.5.3 布尔操作符');

(() => {
// 1、逻辑非
/**
 * 逻辑非，操作符由一个叹号(!)表示，可应用给ESMAScript中的任何值。这个操作符始终返回布尔值，无论应用到的是什么样的数据类型。
 * 逻辑非操作符首先将操作数转换为布尔值，然后对其取反。会遵循以下规则：
 * 对象，          返回 false
 * 数组，          返回 false
 * 空字符串，       返回 true
 * 非空字符串，     返回 false
 * 数值0，         返回 true
 * 非0数值(包括Infinity)，返回 false
 * null           返回 true
 * NaN            返回 true
 * undefined      返回 true
 * Symbol()       返回 false
 */
console.log(!{});   // false
console.log(![]);   // false
console.log(!'');   // true
console.log(!'a');  // false
console.log(!0);    // true
console.log(!1);    // false
console.log(!Infinity); // false
console.log(!null); // true
console.log(!NaN);  // true
console.log(!undefined);    // true
console.log(!Symbol()); // false

/**
 * 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个感叹号(!!)，相当于调用了转换函数 Boolean()。
 * 不论操作数是什么类型，第一个感叹号总会返回布尔值。第二个感叹号对该布尔值取反，从而给出变量真正对于的布尔值。
 * 结果与对同一个值使用 Boolean() 函数是一样的。
 */
 console.log(!!'x');    // true
 console.log(!!0);      // false
 console.log(!!NaN);    // false
 console.log(!!'');     // false
 console.log(!!123);    // true
});

(() => {
// 2、逻辑与
/**
 * 逻辑与，操作符由两个和号(&&)表示，应用到两个值。遵循如下真值表：
----------------------------------------
    第一位数值的位  第二位数值的位  结果
        true        true       true
        true        false      false
        false       true       false
        false       false      false
----------------------------------------
 */
/**
 * 逻辑与操作符可用于任何类型的操作数，不限于布尔值。如果有操作数不是布尔值，则逻辑并不一定会返回布尔值，而是遵循以下规制：
    如果第一个操作数是对象，则返回第二个操作数。
    如果第二个操作数是对象，则只有第一个操作数求值为true时才会返回该对象
    如果两个操作数都是对象，则返回第二个操作数
    如果第一个操作数是null，则返回null
    如果第一个操作数是NaN，则返回NaN
    如果第一个操作数是undefined，则返回undefined
 */
/**
 * 逻辑与是一种短路操作符，意思就是如果第一个操作时决定了结果，那么永远不会对第二个操作数求值。
 * 对于逻辑与操作符来说，如果第一个操作数是false，那么无论第二个操作数是什么值，结果也不可能等于true。
 */
// let found = true;
// let result = (found && someUndeclareVariable);  // someUndeclareVariable is not defined
// console.log(result);

let found = false;
let result = (found && someUndeclareVariable);
console.log(result);    // false
/**
 * 在found为false时，即使 someUndeclareVariable 没有定义也不会报错。
 * 由于第一个操作数时false，逻辑与操作不会对第二个操作数求值，因此此时定义在 && 符号右侧的的操作数是没有意义的。
 */
});

(() => {
// 3、逻辑或
/**
 * 逻辑或，操作符由两个管道符(||)表示，应用到两个值。遵循如下真值表：
----------------------------------------
    第一位数值的位  第二位数值的位  结果
        true        true       true
        true        false      true
        false       true       true
        false       false      false
----------------------------------------
 */
console.log(true || false);
/**
 * 逻辑或操作符可用于任何类型的操作数，不限于布尔值。如果有操作数不是布尔值，则逻辑并不一定会返回布尔值，而是遵循以下规制：
    如果第一个操作数是对象，则返回第一个操作数
    如果第一个操作数求值为false，则返回第二个操作数
    如果两个操作数都是对象，则返回第一个操作数
    如果两个操作数都是null，则返回null
    如果两个操作数都是NaN，则返回NaN
    如果两个操作数都是undefined，则返回undefined
 */
/**
 * 逻辑或也即有短路特性。只不过对逻辑或而言，第一个操作数求值为true，第二个操作数就不会再被求值了。
 */
let found = true;
let result = found || someThingFn;
console.log(result);    // true

// let found2 = false;
// let result2 = found2 || someThingFn;    // ReferenceError: someThingFn is not defined
// console.log(result2);

/**
 * 利用这样的行为，可以避免给变量值赋值 null 或 undefined。
 */
let myObject = undefined || {};
console.log(myObject);      // {}
});