console.log('3.5.9 条件操作符');

// 3.5.9 条件操作符
/**
 * 条件操作符是ECMAScript中最广泛的操作符之一，语法和Java中一样：
 * val = boolean_expression ? true_value : false_value;
 */

(() => {
    function compareVal(num1, num2) {
        return num1 > num2 ? num1 : num2;
    }
    console.log(compareVal(2, 3));  // 3
    console.log(compareVal(3, 2));  // 3
});