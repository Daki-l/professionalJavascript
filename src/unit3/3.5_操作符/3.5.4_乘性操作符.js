console.log('3.5.4 乘性操作符');
// 3.5.4 乘性操作符
/**
 * ECMAScript定义了3个乘性操作符：乘法、除法和取模。
 * 这些操作符和他们在JAVA、C语言中对应的操作符作用一样，但是在处理非数值时，它们也会包含一些自动的类型转换。
 * 如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用Number() 转换函数转换为数值。
 * 这意味着空字符串会被当成0，而布尔true 会被当为1。
 */
(() => {
// 1、乘法操作符
/**
 * 乘法操作符由一个星号(*)表示，可以用于计算两个数值的乘积。
 * 
 * 乘法操作符在处理特殊值时也会有一些特殊的行为。
 * 
 * 如果操作数都是数值，则执行常规的乘法运算，即 正正得正，负负得正，正负得负。如果超出则返回 Infinity、-Infinity。
 * 如果有任一操作数是NaN，则返回 NaN。
 * 如果是 Infinity 乘以 0，则返回 NaN。
 * 如果是 Infinity 乘以非0的有限数值，则根据第二个操作数的符号返回 Infinity或 -Infinity。
 * 如果是 Infinity 乘以 Infinity，则返回 Infinity。
 * 如果有不是数值的操作数，则先在后台用Number() 将其转换为数值，然后在应用以上规则。
 */
console.log( 33 * 44 ); // 1452
console.log( -33 * -44 );   // 1452
console.log( -33 * 44 );    // -1452
console.log( 33 * NaN );    // NaN
console.log( Infinity * 0 );    // NaN
console.log( Infinity * 33 );   // Infinity
console.log( Infinity * -33 );  // -Infinity
console.log( Infinity * Infinity ); // Infinity
console.log( '33' * '44' ); // 1452

});

(() => {
// 2、除法操作符
/**
 * 除法操作符由一个斜杠(/)表示，用于计算第一个操作数除以第二个操作数的商。
 * 
 * 除法操作符针对特殊值也有一些特殊的行为。
 * 
 * 如果操作数都是数值，则执行常规的除法运算，即 正正得正，负负得正，正负得负。如果不能表示商则返回 Infinity、-Infinity。
 * 如果有任一操作数是NaN，则返回 NaN。
 * 如果是 Infinity 除以 Infinity，则返回 NaN。
 * 如果是 0 除以 0，则返回 NaN。
 * 如果是非 0 的有限值除以 0，则根据第一个操作数的符号返回 Infinity或 -Infinity。
 * 如果是 Infinity除以任何数，则根据第二个操作数的符号返回 Infinity或 -Infinity。
 * 如果有不是数值的操作数，则先在后台用Number() 将其转换为数值，然后在应用以上规则。
 */

console.log( 10 / 2);  // 5
console.log( 10 / NaN );  //NaN
console.log( Infinity/ Infinity );  //NaN
console.log( 0 / 0 );  // NaN
console.log( 10 / 0 );  // Infinity
console.log( Infinity / 2 );  // Infinity
console.log( Infinity / -2 );  // -Infinity
});

(() => {
// 3、取模操作符
/**
 * 取模（余数）操作符由一个百分比符号(%)表示，用于获取余数
 * 
 * 取模操作符针对特殊值的一些特殊行为。
 * 
 * 如果操作数是数值，则执行常规除法运算，返回 余数。
 * 如果被除数是无限值，除数是有限值，，则返回 NaN
 * 如果被除数是有限值，除数是无限值，则返回 被除数
 * 如果被除数是有限值，除数是0，则返回 NaN
 * 如果被除数是0，除数不是0，则返回 0
 * 如果是Infinity除以Infinity，则返回 NaN
 * 如果有操作符是NaN，则返回NaN
 * 如果有不是数值的操作数，则先在后台用Number() 函数转换为数值，再应用上述规则
 */

console.log( 26 % 5 ); // 1
console.log( Infinity % 5 ); // NaN
console.log( 26 % Infinity ); // 26
console.log( 26 % 0 ); // NaN
console.log( 0 % 5 ); // 0
console.log( Infinity % Infinity ); // NaN
console.log( NaN % 5 ); // NaN
console.log( 26 % NaN ); // NaN

// 实际运用过的场景
/**
 * 场景：在小程序上实现一个日期组件
 * 实现思路：
 * 日期是一个由 星期一 ~ 星期天 组成的一个循环，计算每个月份的开始时间属于星期几，然后对这月的剩余天数依次排序，
 * 使用flex布局，justify-content: space-around; 
 * 一行7个天数，这个时候要保证每行的宽度保持一致，就需要保证每行的数量相等，
 * 最后一行的天数存在不是7的情况，就需要对最后一行进行补全为7
 */

// 获取参数日期月份所对应的当月所有天数对应的日期
function getAllMonthDay(date) {
    let dates = date.split('-');
    let days = new Date(dates[0], dates[1], 0).getDate();
    let list = new Array(days).fill().map((l, lndex) => {
        let time = date + '-' + (lndex + 1 > 9 ? lndex + 1 : `0${lndex + 1}`);
        let { dataIndex, index } = getNowDay(time);
        l = { dataIndex, index, time, fatherDate: date, day: lndex + 1 };
        return l;
    });
    list = monageList(list);
    return list;
}

// 获取参数日期对应的星期，并且获取当前日期对应星期的数值 index
function getNowDay(time) {
    var dayArr = [
        { dataIndex: 'sunday', title: '日' },
        { dataIndex: 'monday', title: '一' },
        { dataIndex: 'tuesday', title: '二' },
        { dataIndex: 'wednesday', title: '三' },
        { dataIndex: 'thursday', title: '四' },
        { dataIndex: 'friday', title: '五' },
        { dataIndex: 'saturday', title: '六'}
    ];
    time = time.replace(/-/g, '/');
    var index = new Date(time).getDay();
    return { dataIndex: dayArr[index].dataIndex, index };
}

// 对日期进行补全 留出前面和后面的空白
function monageList(list) {
    let { index } = list[0];
    for (let i = index - 1; i >= 0; i--) {
        list.unshift({ dataIndex: 'empty', index: i, day: '' });
    }

    let endIndex = list.length % 7 === 0 ? 0 : 7 - list.length % 7;
    for (let i = 1; i <= endIndex; i++) {
        list.push({ dataIndex: 'empty', index: list.length + i, day: '' });
    }
    return list;
}

console.log(getAllMonthDay('2022-06'))

});

