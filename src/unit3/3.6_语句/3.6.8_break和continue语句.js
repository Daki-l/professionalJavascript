console.log('3.6.8 break和continue语句');

(() => {
// 3.6.8 break和continue语句
/**
 * break和continue语句为执行循环提供了更严格的控制手段。
 * break 语句用于立即退出循环，强制执行下一条语句。
 * continue 语句用于立即退出循环，但会再次从循环顶部执行
 */

let num1 = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        break;
    }
    num1++;
}

console.log(num1);   // 4

/**
 * 由于执行了break语句，退出循环，执行下一行代码，输出 4
 */

let num2 = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 === 0) {
        continue;
    }
    num2++;
}

console.log(num2);  // 8

/**
 * 由于 i = 5 时，执行了continue，退出了当前循环导致 num2++ 少执行一次。
 */

// break和continue都可以与标签语句一起使用，返回代码中特定的位置。这通常是嵌套在循环中。
let num3 = 0;

outermost:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermost;
        }
        num3++;
    }
}

console.log('num3--', num3);    // 55
/**
 * 这个例子中，outermost标签标识的是第一个for语句，正常情况下，每个循环执行10次，意味着num++会被执行100次。
 * 但是，break 语句带来了一个变量，即要退出到的标签。添加标签不仅让break退出（使用变量j的）内部函数。也会退出（使用变量i的）的外部循环。
 * 当执行到 i 和 j 都等于5时，循环停止执行，此时 num 的值是 55。
 */

let num4 = 0;
outermost:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost;
        }
        num4++;
    }
}
console.log('num4--', num4);    // 95

/**
 * 上面的例子中，continue语句会强制循环继续执行，但不是继续执行内部循环，而是继续执行外部循环。
 * 当 i 和 j 都等于 5时，会执行 continue，跳到外部循环继续执行，从而导致内部循环少执行5次
 */

// 注：组合使用标签语句和 bireak、continue 能够实现复杂的逻辑，但是容易出错。注意要使用描述性强的文本，嵌套不要太深

});