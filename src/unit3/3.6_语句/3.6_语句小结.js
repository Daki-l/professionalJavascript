// 3.6_语句小结

(() => {
// 3.6_语句小结

/**
 * 3.6.1
 * if 语句 流程控制语句
    if(condition) {
        statement
    } else {
        statement
    }
 * 
 * 简单的使用可以使用 三元表达式 使用 condition ? statement : statement
 */

/**
 * 3.6.2
 * do-while 语句, 后测试循环语句,至少会执行一次:
    do {
        statement
    } while (expression);
 */

/**
 * 3.6.3
 * while 语句, 先测试循环语句, 可能一次都不执行
    while (expression) {
        statement
    }
 */

/**
 * 3.6.4
 * for 语句, 循环语句, 可以认为 将和while循环相关的代码 封装在一起
    for (initialization; expression; post-loop-expression) {
        statment
    }
 */

/**
 * 3.6.5
 * for-in 语句, 遍历 对象（Object）中的非符号键属性,
    for (property in expression) {
        statment
    }
 */

/**
 * 3.6.6
 * for-of 语句, 遍历 可迭代的对象元素，语法如下：
    for (property if expression) {
        stataement
    }
 */

/**
 * 3.6.7
 * 标签语句, 用于给语句增加标签
    label: statement
 */
    

/**
 * 3.6.8
 * break 和 continue 语句，用于打破循环 和跳过此次循环
 *  break. continyue
 */

/**
 * 3.6.9 with 将代码作用域设置为特定的对象 语句：
    with(expression) {
        statement
    }
 * 注： 语句影响性能且难于调试其中的代码，通常不推荐使在产品代码中使用with代码，并且再严格模式报错
 */


/**
 * 3.6.10 switch if 语句紧密相关的一种流控制语句, 可以替换多个if() {} else if () {} 的情况 语句：
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
 * expression、value 可以是数值也可以时表达式
 * 注：break不加的话 会造成 case穿透
 */
})();