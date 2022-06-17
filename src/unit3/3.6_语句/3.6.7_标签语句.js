console.log('3.6.7 标签语句');

(() => {
// 3.6.7 标签语句
/**
 * 标签语句用于给语句增加标签，语法如下：
    label: statement
 */
start: for (let i = 0; i < count; i++) {
    console.log(i);
}

/**
 * start是一个标签，可以在后面通过break或continue语句引用，标签语句的典型场景是嵌套循环。
 */

})();