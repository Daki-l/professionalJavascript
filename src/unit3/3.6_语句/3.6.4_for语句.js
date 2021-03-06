
console.log('3.6.4 for语句');
(() => {
// 3.6.4 for语句
/**
 * for 语句是一种先测试循环语句，增加了进入循环之前的初始代码，以及循环执行后要执行的表达式，语法：
    for (initialization; expression; post-loop-expression) statment
 */
let count = 10;
for (let i = 0; i < count; i ++) {
    console.log(i);     // 0 1 2 3 4 5 6 7 8 9
}

/**
 * 已上代码在循环开始前定义了变量i的初始值为0。然后求值条件表达式，如果求值结果为true(i < count)，则执行循环体。
 * 如果循环体也可能不会被执行。如果循环体被执行了，则循环后表达式也会执行，以便递变量i。for循环和下面的循环是一样的
 */
let count2 = 10;
let i2 = 0;

while (i2 < count2) {
    console.log(i2);     // 0 1 2 3 4 5 6 7 8 9
    i2++;
}

/**
 * 无法通过while循环的逻辑，同样无用用for循环来实现。因此for循环只是将循环相关的代码封装在一起。
 * 在for循环的初始化代码中，其实是可以不使用关键词的。不过初始化定义的迭代器变量在循环执行完成后几乎不可能再用到了。
 * 因此，最清晰的写法是使用的let声明迭代器变量，这样就可以将这个变量的作用局限在循环中。
 */

/**
 * 初始化、条件表达式和循环后表达式都不是必须的，因此，这个写法可以创建一个无穷循环：
    for(;;) {   // 无穷循环
        doSomething();
    }
 */

// 如果只包括条件表达式，那么for循环实际上就变成while循环：
let count3 = 10;
let i3 = 0;
for (; i3 < count3;) {
    console.log(i3);     // 0 1 2 3 4 5 6 7 8 9
    i3++;
}

});