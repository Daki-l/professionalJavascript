(() => {
// Object 类型
/**
 * 定义：一组数据和功能的集合。
 * 对象可以通过new 操作符后跟对象类型的名称来创建。
 * 开发者可以通过创建Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法：
 */
let o1 = new Object();

// ECMAScript 值要求在给构造器函数提供参数时使用括号。如果没有参数，那么完全可以省略括号(不推荐)
let o2 = new Object;    //合法 但是不推荐

/**
 * Object的实例本身并不是很有用，但是理解与它相关的概念非常重要。
 * ECMAScript中的Object也是派生其他对象的基类。Object 类型的所有属性和方法在派生的对象上同样存在。
 * 每个Object 实例都有如下属性和方法：
 */

/**
 * constructor: 用于创建当前对象的函数。在前面的例子中，这个属性的值就是 Object()函数。
 */

/**
 * hasOwnProperty(propertyName): 用于判断当前对象实例（不是原型）上是否存在给定的属性。
 * 要检查的属性名必须时字符串（如 o.hasOwnproperty("name")或符号。）
 */
// ？？？ 如果属性名时Symbol呢?

/**
 * isPrototypeOf(object): 用于判断给定的属性是否可以使用for-in 语句枚举。
 * 与hasOwnProperty() 一样，属性名必须是字符串。
 */

/**
 * propertyIsEnumerable(propertyName): 用于判断给定的属性是否可以是使用for-in 语句枚举。与 hasOwnProperty() 一样，属性名必须是字符串。
 */

/**
 * toLocaleString(): 返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
 */

/**
 * toString(): 返回对象的字符串表示。
 */

/**
 * valueOf(): 返回对象对于的字符串、数值或布尔值表示。通常与toString() 的返回值相同。
 * 原因：在ECMAScript中object是所有对象的基类，所以任何对象都有这些属性和方法。
 */

/**
 * 注：严格来说，ECMA-262中对象的行为不一定适合Javascript中的其他对象。
 * 比如：浏览器环境中的BOM和DOM对象，都是由宿主环境定义和提供的宿主对象。而宿主对象不受ECMA-262约束，所有它们可能不会继承Object。
 */

// 清除对象中没值的数据
function clearEmptyPro(data) {
	let curVal;
	let toString = Object.prototype.toString;
    let dataType = toString.call(data);
    if (data || dataType === "[object Number]" || dataType === "[object Boolean]") {
        switch (dataType) {
            case "[object Object]":
                if (Object.keys(data).length > 0) {
                    let momObj = {};
                    for (let key in data) {
                        let value =  clearEmptyPro(data[key]);
                        let valueType = toString.call(value);
                        valueType === '[object Boolean]' || valueType === '[object Number]' || value ? momObj[key] = value : '';
                    }
                    curVal = momObj;
                } else {
                    return;
                }
                break;
            case "[object Array]":
                if (data.length > 0) {
                    let momValue = [];
                    data.forEach(e => {
                        let value = clearEmptyPro(e);
                        let valueType = toString.call(value);
                        valueType === '[object Boolean]' || valueType === '[object Number]' || value ? momValue.push(value) : '';
                    })
                    momValue.length > 0 ? curVal = momValue : '';
                } else {
                    return;
                }
                break;
            case "[object Boolean]":
            default:
                curVal = data;
                break;
        }
    } else {
        return;
    }
	return curVal;
}

// var aa = {
//     a: [1, 0, false, undefined, null, '', { a: 1, c: 3 }],
//     b: { a: true, b: false, c: '', d: undefined , e: {}},
//     c: 'ss', d: [], f: {}, g: (s) => { console.log('g') }
// }
var aa = '';
console.log('---', clearEmptyPro(aa));


})();