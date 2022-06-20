console.log('3.6.6 for-of语句');

(() => {
// 3.6.6 for-of语句
/**
 * for-of 语句是一种严格的迭代语句，用于遍历可迭代的对象元素，语法如下：
    for (property if expression) stataement
 */
for (const e of [2, 4, 6, 8]) {
    console.log(e);
}
// 2 4 6 8

/**
 * 使用for-of语句显示了一个包含4个元素的数组中的所有元素，循环会一直持续到将所有元素都迭代完。
 * 与for循环一样，这里的控制语句中的const也不是必须的，但是为了确保这个局部变量不会被修改，推荐使用const
 */

// for-of循环会按照可迭代对象的next() 方法产生的顺序迭代元素。（如果尝试迭代的变量不支持迭代，则for-of语句会报错）

// for-await-of 是ES2018对for-of的语句扩展，以支持生成 promise 的异步可迭代对象

});