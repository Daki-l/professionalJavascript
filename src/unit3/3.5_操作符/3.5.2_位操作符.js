console.log('3.5.2 位操作符');
(() => {
// 3.5.2 位操作符
/**
 * 作用：用于数值的底层操作，也就是操作内存中表示数据的 比特(位)。
 * ECMAScript中的所有数值都以 IEEE 754 64位格式存储，但是位操作不会直接应用到64位表示，而是先把值转换为32位整数，再进行操作，之后再把结果转位64位。
 * 对于开发者而言，好想只有32位整数一样，因为64位整数存储格式是不可见的，只需考虑32位整数即可。
 */
/**
 * 有符号整数用32位前31位表示整数值，第32位表示数值的符号，如：0 表示正，1 表示负。
 * 第32位被称为 符号位(sign bit),它的值决定了数值其余部分的格式。
 */

/**
 * 正值，以真正的二进制格式存储，即31位中的每一位都代表2的幂。
 * 第一位(称为第0位)表示2^0，第二位表示2^1，以此类推。如果一个位是空的，则以0填充，相当于忽略不计。
 * 如：数值18的二进制 0000 0000 0000 0000 0000 0000 0001 0010，或更加、精简的 10010。后者是用到的5个有效位，决定了实际的值。
 */
/**
    1           0           0           1           0
(2^4 * 1) + (2^3 * 0) + (2^2 * 0) + (2^1 * 1) + (2^0 * 0)
    16    +     0     +     0     +     2     +     0
                            18
 */
/**
 * 手动，计算十进制转换位二进制 (倒基取余法)
    2 | 18
    2 |  9 | 0
    2 |  4 | 1
    2 |  2 | 0
    2 |  1 | 0
    2 |  0 | 1
 */
/**
 * 负值，以一种称为二补数的二进制编码存储。一个数值的二补数通过如下3个步骤可以计算得到：
 * (1)、确定绝对值的二进制表示（如：对于 -18 来说，先确定 18 的二进制表示）；
 * (2)、找到数值的-补数，换句话说就是每个 0 都变成 1，每个 1 变成 0；
 * (3)、给结果加 1.
 */

/**
 * 基于以上步骤确定 -18 的二进制表示
 * 0000 0000 0000 0000 0000 0000 0001 0010
 * 然后，计算一补数，
 * 1111 1111 1111 1111 1111 1111 1110 1101
 * 最后，给补数加 1
 * 1111 1111 1111 1111 1111 1111 1110 1110
 * 那么，-18的二进制表示的就是 1111 1111 1111 1111 1111 1111 1110 1110。
 * 要注意的是，在处理8有符号的整数是，我们无法访问到第31位。
 */
/**
 * ECMAScript会帮我们处理这些信息。把负值输出位一个二进制字符串是，我们会得到一个签名加了减号的绝对值。
 */
let num = -18;
console.log(num.toString(2));   // -10010

/**
 * 在将 -18 转换为二进制字符串时，结果得到 -10010。转换过程会求得二补数，然后再以更符合逻辑的形式表达出来。
 */
// 注：默认情况下，ECMAScript中的所有整数都表示为有符号数。不过，确实存在无符号数。对于无符号数第32位不表示符号，只有正值，因此整数范围更大。

/**
 * 在对ECMAScript中的数值应用位操作符时，后台会发生转换：64位数值会转化为32位数值，然后执行位操作，最后再把结果从32位转化为64位存储起来。
 * 整个过程就像处理32位数值一样，这让二进制操作变得与其他语言类似。但是这个转换也导致了一个奇特的副作用，
 * 即特数值 NaN 和 Infinity 在位操作中都会被当作 0 处理。
 * 如果将位操作应用到非数值，那么首先会使用 Number()函数将改值转换为数值(这个过程时自动的)，然后在应用位操作。最终结果是数值。
 */
});

(() => {
// 1、按位非
/**
 * 按位非 操作符用波浪符(~)表示。
 * 作用：返回数值的一补数。
 * 最终效果：是对数值取反并减 1
 */
let num1 = 25;
let num2 = ~num1;
console.log(num2);  // -26

let num3 = -num1 - 1;
console.log(num3);  // -26

// 上面2个操作的返回结果一样，但是位操作的速度快很多。这是因为操作的是在数值底层上完成的。
});

(() => {
// 2、按位与
/**
 * 按位与 操作符勇和符号(&)表示，有两个操作数。
 * 作用：将两个数的每一位对齐，然后基于真值中的规则，对每一位执行相应的与操作。
----------------------------------------
    第一位数值的位  第二位数值的位  结果
        1             1         1
        1             0         0
        0             1         0
        0             0         0
----------------------------------------
 */
let result1 = 25 & 3;
console.log(result1);    // 1
/**
 * 结果为什么位1呢？如下二进制计算过程：
    25 = 0000 0000 0000 0000 0000 0000 0001 1001
    3  = 0000 0000 0000 0000 0000 0000 0000 0011
  -----------------------------------------------
   ADN = 0000 0000 0000 0000 0000 0000 0000 0001
 * 如上所示，25和3的二进制表示中，只有第0位上的两个数都是1。因此结果是 1。   
 */
});

(() => {
// 3、按位或
/**
 * 按位或，操作符用管道符(|)表示，有两个操作数。遵循如下真值表：
----------------------------------------
    第一位数值的位  第二位数值的位  结果
        1             1         1
        1             0         1
        0             1         1
        0             0         0
----------------------------------------
 */
let result2 = 25 | 3;
console.log(result2);   // 27
/**
 * 结果位27，查看二进制计算过程
    25 = 0000 0000 0000 0000 0000 0000 0001 1001
    3  = 0000 0000 0000 0000 0000 0000 0000 0011
  -----------------------------------------------
   ADN = 0000 0000 0000 0000 0000 0000 0001 1011

   1*16 + 1*8 + 1*2 + 1*1 = 27
 */
});

(() => {
// 4、按位异或
/**
 * 按位异或，使用脱字符(^)表示，有2个操作数。下面是按位异或的真值表：
----------------------------------------
    第一位数值的位  第二位数值的位  结果
        1             1         0
        1             0         1
        0             1         1
        0             0         0
----------------------------------------
 */

let result3 = 25 ^ 3;
console.log(result3);   // 26

/**
 * 结果位26，查看二进制计算过程
    25 = 0000 0000 0000 0000 0000 0000 0001 1001
    3  = 0000 0000 0000 0000 0000 0000 0000 0011
  -----------------------------------------------
   ADN = 0000 0000 0000 0000 0000 0000 0001 1010

   1*16 + 1*8 + 1*2 = 26
 */
});

(() => {
// 5、左移
/**
 * 左移，操作符用两个小于号(<<)表示
 * 作用：会按照指定的位数将数值的所有位向左移动。
 */
let oldValue = 2;               // 等于二进制 10
let newValue = oldValue << 5;   // 等于二进制 100 0000，即十进制 64
console.log(newValue)   // 64
/**
 * 注意：在移位后，数值右端会空出5位。左移会以0填充这些空位，让结果是完整的是32位数值
  符号位
    0 000 0000 0000 0000 0000 0000 0000 0010
    0 000 0000 0000 0000 0000 0000 010 00000
 * 注意： 左移会保留它所操作数值的符号，如：-2 左移5位，将得到 -64
 */
});

(() => {
// 6、有符号右移
/**
 * 有符号右移，操作符用两个大于号(>>)表示。
 * 作用：会将数值的所有32都向右移，同时保留符号(正或负)。有符号右移实际上是左移的逆运算。比如 64 右移5位，就是2.
 */
let oldValue = 64;                 // 等于二进制 100 0000
let newValue = oldValue >> 5;     // 等于二进制 10，即十进制 2
console.log(newValue);     // 2
/**
 * 在移位后就会出现空位。不过右移空位会出现在左侧，且在符号位之后。ECMAScript会用符号位的值来填充这些空位，以得倒完整的数值。
  符号位
    0 000 0000 0000 0000 0000 0000 0010 0000
    0 000 0000 0000 0000 0000 0000 0000 0010 
 */
});

(() => {
// 7、无符号右移
/**
 * 无符号右移，操作符用三个大于号(>>>)表示。
 * 作用：会将数值的所有32位都向右移。无符号右移会给空位补0，
 */
// 对于正数，无符号右移和有符号右移结果是相同的。
let oldValue = 64;
let newValue = oldValue >>> 5;
console.log(newValue);  // 2

// 对于负数，无符号右移操作符将负数的二进制表示当成正数的二进制表示来处理。因为附属是其绝对值的二补数，所以右移之后的结果变得非常之大。
let oldValue2 = -64;                // 等于二进制 1111 1111 1111 1111 1111 1111 1100 0000
let newValue2 = oldValue2 >>> 5;    // 等于十进制 134217726
console.log(newValue2); // 134217726
/**
  符号位
    1 111 1111 1111 1111 1111 1111 1100 0000
    0 000 0111 1111 1111 1111 1111 1111 1110
 */
})();
