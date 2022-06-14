// 3.5.10 赋值操作符
/**
 * 简单赋值用等于号(=)表示，将右手边的值赋值给左边的变量。
 * let num = 10;
 * 符合赋值使用乘性、加性或者位操作符后跟等于号(=)表示，这些赋值操作符是类似如下操作的简写形式：
 * let num = 10;
 * num = num + 10;
 * 可以通过复合赋值完成：
 * let num = 10;
 * num += 10;
 * 每个数学操作符一级其他一些操作符都有对应的符合赋值操作符：
 *      乘后赋值 *=
 *      除后赋值 /=
 *      取模后赋值 %=
 *      加后赋值 +=
 *      减后赋值 -=
 *      左移后赋值 <<=
 *      右移后赋值 >>=
 *      无符号右移后赋值 >>>=
 * 操作仅仅是简写，并不会提升性能
 */