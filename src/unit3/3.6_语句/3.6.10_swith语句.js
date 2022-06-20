console.log('3.6.10 swith语句');

(() => {
// 3.6.10 swith语句

/**
 * switch 语句是与 if 语句紧密相关的一种流控制语句，从其他语句借鉴而来。ECMAScript 中 switch 语句跟 C 语句中 switch 语句的语法非常相似。
    switch(expression) {
        case value1:
            statement
            break;
        case value2:
            statement
            break;
        detault:
            statement
    }
 * 这里每个case（条件/分支）相当于：如果表达式等于后面的值，则执行下面的语句。"break"关键字会导致代码执行跳出switch语句。
 * 如果没有 break，则代码会继续匹配下一个条件。default 关键字用于在任何条件都没有满足时指定默认执行的语句（相当于else语句）。
 */
let i = 0;

if (i == 25) {
    console.log('23');
} else if (i == 35) {
    console.log('35');
} else if (i == 45) {
    console.log('45');
} else {
    console.log('Other');
}

// other

// 等同于下面写法
switch(i) {
    case 25:
        console.log('25')
        break;
    case 35:
        console.log('35')
        break;
    case 45:
        console.log('45')
        break;
    default:
        console.log('other')
}

// other

/**
 * 为了避免不必要的条件判断，最好给每个条件后面都加上break语句，如果确实需要连续匹配几个条件，
 * 推荐写个注释表面时故意忽略了break，
 */

switch(i) {
    case 25:
    // 跳过
    case 35:
        console.log('25 or 35');
        break;
    case 45:
        console.log('45');
        break;
    default:
        console.log('other');
}
/**
 * ECMAScript 为它赋予了一些独有的特性。
 * switch 语句可以用于所有数据类型（在很多语言中，它只能用于数值），因此可以使用字符串甚至对象。
 * 其次，条件的值不需要的常量，也可以是变量或表达式。
 */

switch ('hello word') {
    case 'hello' + ' word':
        console.log('Greet was fount');
        break;
    case 'goodbye':
        console.log('Closeing was fount.');
        break;
    default:
        console.log('Unexpected massage was fount');
}

// Greet was fount

/**
 * 这个例子在switch 语句中使用了字符串，第一个实际上使用的时条件表达式，求值为两个字符串拼接后的结果。
 * 因为拼接后的结果等于 switch 的参数。log 会输出 Greet was fount
 */

let num = 25;
switch (true) {
    case num < 0:
        console.log('Less than 0');
        break;
    case num >= 0 && num <= 10:
        console.log('Between 0 and 10');
        break;
    case num > 10 && num <= 20:
        console.log('Between 10 and 20');
        break;
    default:
        console.log('More than 20');
}
// More than 20

/**
 * 现在外部定义变量 num，而传给 switch 语句的参数为true，就是因为每个条件的表达式都会返回布尔值。
 * 条件的表达式分别被求值，直到由表达式返回 true，否则，就会一直跳到default语句
 */

// 注：switch语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型 ( 10 !== '10' )

});