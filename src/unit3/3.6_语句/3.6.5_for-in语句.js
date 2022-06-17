
console.log('3.6.5 for-in语句');
(() => {
// 3.6.5 for-in语句
/**
 * for-in 语句是一种严格的迭代语句，用于枚举对象（Object）中的非符号键属性，语法如下：
 * for (property in expression) statment
 */
let obj = { a: 1, b: 2 };
for (const propName in obj) {
    console.log(propName);
}
// a
// b

/**
 * ECMAScript中对象的属性是无序的，因此for-in语句不能保证返回对象属性的顺序，
 * 所有可枚举的属性都会返回一次，但返回的顺序可能因为浏览器而已。
 * 如果for-in循环要迭代的变量是null或undefined，则不执行循环体。
 */
});