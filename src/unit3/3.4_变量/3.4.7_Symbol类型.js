// 3.4.7 Symbol类型

// 1、符号的基本使用
(() => {
    let sym = Symbol();
    console.log('sym---', sym, typeof sym);
    let firstSym = Symbol();
    let secondSym = Symbol();

    let thirdSym = Symbol('foo');
    let fourthSym = Symbol('foo');
    console.log('firstSym', firstSym);
    console.log('thirdSym', thirdSym);
    console.log('firstSym == secondSym', firstSym == secondSym);
    console.log('thirdSym == fourthSym', thirdSym == fourthSym);

    // 不能作为构造器函数与new 一起使用,为了避免创造符号包装对象
    let myBoolean = new Boolean();
    let myString = new String();
    let myNumber = new Number();
    console.log('typeof ----', typeof myBoolean, typeof myString, typeof myNumber);
    // let mySymbol = new Symbol();
    // console.log('symbl Typeof', typeof mySymbol);    // TypeError: Symbol is not a constructor
    // 要创建符号包装对象的方法
    let mySymbol = Symbol();
    let myWrapperSymbo = Object(mySymbol);
    console.log('typeof mySymbol', typeof myWrapperSymbo);
});

// 2、使用全局符号注册表
(() => {
    let globalSymbol = Symbol.for('foo');   // 创建新符号
    console.log('typeof globalSymbol', typeof globalSymbol, globalSymbol);
    let otherSymbol = Symbol.for('foo');    // 重用已有符号 foo
    console.log('golbalSymbl == otherSumbol', globalSymbol == otherSymbol);
    console.log('golbalSymbl === otherSumbol', globalSymbol === otherSymbol);
    // Symbol.for() 中传入的必须是字符串，不是字符串换转为字符串
    let emptySymbol = Symbol.for();
    console.log('emptySymbol', emptySymbol);    // Symbol(undefined)
    // 可以使用 Symbol.keyFor() 查找全局注册表  传入的必须是被声明的符号 
    let s = Symbol('foo');
    console.log('Symbol.keyFor()', Symbol.keyFor(otherSymbol), Symbol.keyFor(s));   // foo undefined
    // console.log('Symbol.keyFor(123)', Symbol.keyFor(123));   // TypeError: 123 is not a symbol
});

// 3、使用符号作为属性
(() => {
    let s1 = Symbol('foo'),
        s2 = Symbol('bar'),
        s3 = Symbol('bat'),
        s4 = Symbol('qwe');
    let o = {
        a: 'a val',
        [s1]: 'foo val'
    };
    // o[s1] = 'foo val'
    console.log('o--1--', o);
    // Object.defineProperty 和 Object.defineProperties
    Object.defineProperty(o, s2, {
        value: 'bar val'
    });
    console.log('o--2--', o);
    Object.defineProperties(o, {
        [s3]: { value: 'bat val' },
        [s4]: { value: 'qwe val' }
    })
    console.log('o--3--', o);
    // 通过 Object.getOwnPropertyNames() 和 Object.getOwnPropertySymbols() 获取属性
    console.log('Object.getOwnPropertyNames(o)', Object.getOwnPropertyNames(o));
    console.log('Object.getOwnPropertySymbols(o)', Object.getOwnPropertySymbols(o));
    // 两者互斥 前者只能获取常规数据数组，后者只能获取符号数组
    // 想要同时获取需要使用 Object.getOwnPropertyDescriptors(o) 获取详情
    console.log('Object.getOwnPropertyDescriptors(o)', Object.getOwnPropertyDescriptors(o));
    // Reflect.ownKeys() 会返回两种类型的键
    console.log('Reflect.ownKeys(o)', Reflect.ownKeys(o));

    // 符号可以不显示声明，直接创建被使用
    let m = {
        [Symbol('foo')]: 'foo val',
        [Symbol('bat')]: 'bat val'
    };
    console.log('m---', m);
    // 但是要找到使用直接创建的符号的属性key 必须遍历整个对象下面的符号键数组对应找到
    let batSymbol = Object.getOwnPropertySymbols(m).find(e => {
        return e.toString().match(/bat/);
    });
    console.log('batSymbol--', batSymbol);
});

// 4、常用内置符号
(() => {
    // ECMA script 6 引入了一批常用内置符号(we-known symbol),用于暴露语言内部行为，开发者可以直接访问】充血或模拟这些行为。
    // 这些符号都是以 Symbol工厂函数字符串属性的形式存在。
    // for of 会循环对象上使用symbol.iterator属性，可以自定义对象上的Symbol.iterator的值来改变for of的迭代该对象的行为。
    // 内置符号属性都是不可写、不可枚举、不可配置的
    // ECMA script 6中应用符号在规范中的名称 @@iterator 指的就是 Symbol.iterator
    // 当使用for of 时， 调用Symbol.iterator返回对象
    class Obj {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        [Symbol.iterator]() { return this; }
        next() {
            var value = this.x;
            if (value < this.y) {
                this.x++;
                return { value: this.x, done: false };
            } else {
                return { value: undefined, done: true }
            }
        }
    }
    let obj = new Obj(1, 5);
    for (let i of obj) {    // TypeError: obj is not iterable
        console.log('i----', i);    
    }
});

// 5、Symbol.asyncIterator (表示实现异步迭代器API的函数)
/**
 * 根据ECMA script规范，这个符号作为一个属性表示： 
 * 一个方法，该方法返回对象默认的AsyncIterator。由for-wait-of语句使用
 *  */ 
(() => {
// for-wait-of循环会利用这个函数执行异步迭代操作，循环时他们会调用Symbol.asyncIterator为键的函数
// 并期望这个函数会返回一个实现迭代器API的对象，很多时候返回的对象是该API的AsyncGenertor:
class Foo {
    async *[Symbol.asyncIterator]() {}
}
let f = new Foo();
console.log('Symbol.syncIterator()', f[Symbol.asyncIterator]());    // AsyncGenerator {<suspended>}

// 技术上，这个是有Symbol.asyncIterator函数生成的对象 应该可以通过其next()方法陆续返回Promise实例。可以通过显示的调用next()方法返回，也可以隐式地通过一部生成函数返回：
// 注：Symbil.syncIterator是ES2018规范定义的，因此只有版本非常新的浏览器才能支持它
class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }
    async * [Symbol.asyncIterator]() {
        while(this.asyncIdx < this.max) {
            yield new Promise(resolve => resolve(this.asyncIdx++));
        }
    }
}
async function asyncCount() {
    let emitter = new Emitter(3);
    for await(const x of emitter) {
        console.log('emitter----x', x);
    }
}

asyncCount();  
// 0
// 1
// 2
});

(() => {
// 6、Symbol.hasInstance
/**
 * 根据ECMAScript规范，这个符号作为一个属性表示：一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例。由instanceof操作符使用。
 * instanceof操作符可以用来确定一个对象实例的原型链上是否有原型。instanceof的典型使用场景：
 */
function Foo1() {};

let f1 = new Foo1();
console.log('f1 instanceof Foo', f1 instanceof Foo1);
// true

class Bar1 {};
let b1 = new Bar1();
console.log('b1 instanceof Bar', b1 instanceof Bar1);
// true

/**
 * 在Es6中，instanceof造作符会使用Symbol.hasInstance来确定关系。
 * 以Symbol.hasInstance为键的函数会执行同样的操作，知识操作数对调了下：
 */
function Foo2() {}
let f2 = new Foo2();
console.log('f2 Symbol.hasInstance', Foo2[Symbol.hasInstance](f2));
// true

class Bar2 {};
let b2 = new Bar2();
console.log('b2 Symbol.hasINstance', Bar2[Symbol.hasInstance](b2));
// true

/**
 * 这个属性在Function的原型上，因此默认在所有函数和类上都可以使用。由于instanceof操作符会在原型链上寻找这个属性的定义，
 * 就跟在原型链行寻找其他属性一样，因此可以在继承的类上通过金泰方法冲洗定义这个函数
 */
class Bar3 {};

class Baz extends Bar3 {
    static [Symbol.hasInstance]() {
        return false;
    }
}

let b3 = new Baz();

console.log('b3 instanceof Bar3', b3 instanceof Bar3);  // true
console.log('Bar3 symbol.hasInstance b3', Bar3[Symbol.hasInstance](b3));    // true
console.log('b3 instanceof Baz', b3 instanceof Baz);    // false
console.log('Baz symbol.hasInstance b3', Baz[Symbol.hasInstance](b3));  // false
});

(() => {
// 7、Symbol.isConcatSpreadable
/**
 * ECMASscript规范，这个符号作为一个属性表示：一个布尔值，如果是true，则意味着对象应该用Array.prototype.concat()打平其数组元素。
 * ES6中的Array.prototype.concat()方法会根据接收到的对象类型选择如何讲一个数组对象拼接成数组实例，覆盖Symbol.isConcatSpreadable可以改变这个行为
 */
/**
 * 数组对象默认情况下会被打平到已有的数组，false或假值会导致整个对象被追加到数组末尾
 * 类数组对象默认情况下会被追加到数组末尾，true或真值会导致这个类数组对象被打平到数组实例
 * 不是类数组对象的对象在 Symbol.isConcatSpreadable被设置为true的情况下将被忽略
 */
let inital = ['foo'];

// 数组对象
let array = ['bar'];
console.log('array[Symbol.isConcatSpreadable]', array[Symbol.isConcatSpreadable]);
// undefined
console.log('inital.concat(array)', inital.concat(array));
// ['foo', 'bar']
array[Symbol.isConcatSpreadable] = false;
console.log('inital.concat(array)', inital.concat(array));
// ['foo', Array(1)]

// 类数组对象
let arrayLikeObject = { length: 1, 0: 'baz' };
console.log('arrayLikeObject[Symbol.isConcatSpreaded]', arrayLikeObject[Symbol.isConcatSpreadable]);
// undefined
console.log('inital.concat(arrayLikeObject)', inital.concat(arrayLikeObject));
// ['foo', {…}]
arrayLikeObject[Symbol.isConcatSpreadable] = true;
console.log('inital.concat(arrayLikeObject)', inital.concat(arrayLikeObject));
// ['foo', 'baz']

// 其他对象
let otherObject = new Set().add('qwe');
console.log('otherObject[Symbol.isConcatSpreadable]', otherObject[Symbol.isConcatSpreadable]);
// undefined
console.log('inital.concat(otherObject)', inital.concat(otherObject));
// ['foo', Set(1)]
otherObject[Symbol.isConcatSpreadable] = true;
console.log('inital.concat(otherObject)', inital.concat(otherObject));
// ['foo']
});

(() => {
// 8、Symbol.iterator
/**
 * 表示：一个方法，该方法返回对象默认的迭代器，由for-of语句使用。这个符号表示实现迭代器API的函数
 */
/**
 * for-of循环这样的语言结构会利用这个函数执行迭代操作。循环时，他们会调用Symbol.iterator为键的函数，并默认这个函数会返回一个实现迭代器API的对象。
 * 很多时候，返回的对象时实现该API的Generator：
 */
class Foo {
    *[Symbol.iterator]() {}
}

let f = new Foo();
console.log('f[Symbol.iteratol]()', f[Symbol.iterator]());
// Generator {<suspended>}

// 由Symbol.iterator 函数生成的对象应该通过其next() 方法陆续返回值。可以通过显示调用next()方法返回，也可以隐式地通过生成器函数返回：
class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }
    *[Symbol.iterator]() {
        while(this.asyncIdx < this.max) {
            yield this.asyncIdx++;
        }
    }
}

function count () {
    let emitter = new Emitter(5);

    for (const x of emitter) {
        console.log('x----', x);
    }
}

count();
// x---- 0
// x---- 1
// x---- 2
// x---- 3
// x---- 4
});

(() => {
// 9、Symbol.match
/**
 * 表示：一个正则表达式方法，该方法用正则表达式去匹配字符串。由String.prototype.match()方法使用。
 * String.prototype.match()方法会使用以Symbol.match 为键的函数来对正则表达式求值。
 * 正则表达式的原型上默认有这个函数的定义，因此所有正则表达式实例默认是这个String方法的有效参数。
 */
console.log('RegExp.protptype[Symbol.match]', RegExp.prototype[Symbol.match]);
// ƒ [Symbol.match]() { [native code] }
console.log('"foobar".match(/bar/)', "foobar".match(/bar/));
// ['bar', index: 3, input: 'foobar', groups: undefined]

/**
 * 给这个方法传入非正则表达式值会导致该值被转换为RegExp 对象。
 * 重新定义Symbol.match 函数可以改变这种行为，从而让match() 方法使用非正则表达式的实例。
 * Symbol.match 函数接收一个参数，就是调用match() 方法的字符串实例。返回的值没有限制：
 */
class FooMatcher {
    static [Symbol.match](target) {
        return target.includes('foo');
    }
}

console.log('"foobar".match(FooMatcher)', 'foobar'.match(FooMatcher));  // true
console.log('"barbaz".match(FooMatcher)', 'barbaz'.match(FooMatcher));  // false

class StringMatcher {
    constructor(str) {
        this.str = str;
    }
    [Symbol.match](target) {
        return target.includes(this.str);
    }
}

console.log('foobar StringMatcher ', 'foobar'.match(new StringMatcher('foo'))); // true
console.log('barbaz StringMatcher ', 'barbaz'.match(new StringMatcher('que'))); // false
});

(() => {
// 10、Symbol.replace
/**
 * 表示：一个正则表达式方法，该方法替换一个字符串中的匹配的字串。由String.protoptype.replace()方法使用。
 * String.protoptype.replace()方法会使用以Symbol.replace为键的函数来对正则表达式求值。
 * 正则表达式的原型上默认有这个函数的定义，因此所有正则表达式实例默认是这个String方法的有效参数。
 */
console.log('RegExp.prototype[Symbol.replace]', RegExp.prototype[Symbol.replace]);
// ƒ [Symbol.replace]() { [native code] }

console.log('foobarxxx.replace(/bar/, iii)', 'foobarxxx'.replace('bar', 'iii'));
// fooiiixxx

/**
 * 传入非正则表达式值会导致该值被转化为RegExp 对象。
 * 重新定义Symbol.replace 函数可以改变这种行为，从而让replace()方法使用非正则表达式实例。
 * Symbol.replace 函数接收2个参数，即调用replace()方法的字符串实例和替换字符串。返回值没有限制
 */
class FooReplacer {
    static [Symbol.replace](target, replacement) {
        return target.split('foo').join(replacement);
    }
}
console.log('barfoobaz.replace(FooReplacer, xxx)----', 'barfoobaz'.replace(FooReplacer, 'xxx'));
// barxxxbaz

class StringReplacer {
    constructor(str) {
        this.str = str;
    }
    [Symbol.replace](target, replacement) {
        return target.split(this.str).join(replacement);
    }
}

console.log('barfoobaz.replace(StringReplacer, xxx)-----', 'barfoobaz'.replace(new StringReplacer('foo'), 'xxx'));
// barxxxbaz
});
(() => {
// 11、Symbol.search
/**
 * 表示：一个正则表达式，该方法返回字符串中匹配正则表达式的索引。由String.prototype.search()方法使用。
 * String.prototype.search()方法会使用以Symbol.search 为键的函数来对正则表达式求值。
 * 正则表达式的原型上默认有这个函数的定义，因此所有正则表达式实例默认是这个String方法的有效参数：
 */
console.log('---', RegExp.prototype[Symbol.search]);
// --- ƒ [Symbol.search]() { [native code] }
console.log('+++', 'foobar'.search(/bar/));
// +++ 3

/**
 * 给这个方法传入非正则表达式值会导致该值被转换为RegExp对象。
 * 重新定义Symbol.search 函数可以改变这种行为，从而让search() 方法使用非正则表达式实例。
 * Symbol.search 函数接收一个参数，就是调用match()方法的字符串实例。返回值没有限制：
 */
class FooSearcher {
    static [Symbol.search](target) {
        return target.indexOf('foo');
    }
}

console.log('---', 'foobar'.search(FooSearcher));
// --- 0
console.log('---', 'barfoo'.search(FooSearcher));
// --- 3
console.log('---', 'barbaz'.search(FooSearcher));
// --- -1

class StringSearcher {
    constructor(str) {
        this.str = str;
    }
    [Symbol.search](target) {
        return target.indexOf(this.str);
    }
}

console.log('---', 'foobar'.search(new StringSearcher('foo')));
// --- 0
console.log('---', 'barfoo'.search(new StringSearcher('foo')));
// --- 3
console.log('---', 'barbaz'.search(new StringSearcher('qwe')));
// --- -1
});
(() => {
// 12、Symbol.species
/**
 * 表示：一个函数值，该函数作为创建派生对象的构造函数。
 * 这属性在内置类型中最常用，用于对内置类型实例方法的返回值暴露实例化派生对象的方法。
 * 用Symbol.species 定义静态的获取器(getter)方法，可以覆盖新创建实例的原型定义：
 */
class Bar extends Array {}
class Baz extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
let bar = new Bar();
console.log('----', bar, bar instanceof Array);  // ---- Bar [] true
console.log('----', bar, bar instanceof Bar);    // ---- Bar [] true
bar = bar.concat('bar');
console.log('----', bar, bar instanceof Array);  // ---- Bar ['bar'] true
console.log('----', bar, bar instanceof Bar);    // ---- Bar ['bar'] true

let baz = new Baz();
console.log('++++', baz, baz instanceof Array);  // ++++ Baz [] true
console.log('++++', baz, baz instanceof Baz);    // ++++ Baz [] true
baz = baz.concat('baz');
console.log('++++', baz, baz instanceof Array);  // ++++ ['baz'] true
console.log('++++', baz, baz instanceof Baz);    // ++++ ['baz'] false
baz = baz.concat('bas');
console.log('++++', baz, baz instanceof Baz);    // ++++ ['baz'] false
});

(() => {
// 13、Symbol.split
/**
 * 表示：一个正则表达式方法，该方法在匹配正则表达式的索引位置拆分字符串。由String.prototype.split()方法使用。
 * String.prototype.split()方法会使用以Symbol.split 为键的函数来对表示求值。
 * 正则表达式的原型上默认有这个函数的定义，因此所有正则表达式实例默认是这个String方法的有效参数：
 */
 console.log('---', RegExp.prototype[Symbol.split]);
//  --- ƒ [Symbol.split]() { [native code] }
 console.log('+++', 'foobar'.split(/bar/));
//  +++ (2) ['foo', '']

/**
 * 给这个方法传入非正则表达式值会导致该值被转换为RegExp对象。
 * 重新定义Symbol.split 函数可以改变这种行为，从而让split() 方法使用非正则表达式实例。
 * Symbol.split 函数接收一个参数，就是调用match()方法的字符串实例。返回值没有限制：
 */
class FooSpliter {
    static [Symbol.split](target) {
        return target.split('foo')
    }
}
console.log('---', 'barfoobaz'.split(FooSpliter));
// --- (2) ['bar', 'baz']

class StringSpliter {
    constructor(str) {
        this.str = str;
    }
    [Symbol.split](target) {
        return target.split(this.str);
    }
}
console.log('+++', 'barfoobaz'.split(new StringSpliter('foo')));
// +++ (2) ['bar', 'baz']
});

(() => {
// 14、Symbol.toPrimitive
/**
 * 表示：一个方法，该方法将对象转换为相应的原始值。由ToPrimitive抽象操作使用。
 * 很多内置操作都会尝试强制将对象转换为原始值，包括字符串、数值和未指定的原始类型。
 * 对于一个自定义对象实例，通过在这个实例的Symbol.toPrimitive 属性上定义一个函数可以改变默认行为。
 * 根据提供给这个函数的参数(string、number或default)，也可以控制返回的原始值：
 */
class Foo {};
let foo = new Foo();

console.log('---', 3 + foo);
// --- 3[object Object]
console.log('---', 3 - foo);
// --- NaN
console.log('---', String(foo));
// --- [object Object]

class Bar {
    constructor() {
        this[Symbol.toPrimitive] = function(hint) {
            switch (hint) {
                case 'number':
                    return 3;
                case 'string':
                    return 'string bar';
                case 'default':
                default:
                    return 'default bar';
            }
        }
    }
}

let bar = new Bar();

console.log('+++', 3 + bar);
// +++ 3default bar
console.log('+++', 3 - bar);
// +++ 0
console.log('+++', String(bar));
// +++ string bar

/**
 * ？？？ 如果定义一个类继承 Array 然后重新定义这个类的 toPrimitive 
class Carr extends Array {
    constructor() {
        // 子类中没有constructor构造方法时，并且父类中的方法没有涉及到父类的constructor 子类时可以直接通过extends来继承父类身上的方法的
        super();    // super() 方法必须写到子类中构造方法中的最前面，高于自身的this
        this[Symbol.toPrimitive] = function(hint) {
            return 3;
        }
    }
}
 */
});

(() => {
// 15、Symbol.toStringTag
/**
 * 表示：一个字符串，该字符串用于创建对象的默认字符串描述。由Object.prototype.toString() 使用。
 * 通过toString()方法获取对象标识时，会检索Symbol.toStringTag 指定的实例标识符，默认"Object".
 * 内置类型已经指定了这个值，单自定义实例还需要明确定义：
 */
let s = new Set();

console.log('---', s);
// --- Set(0) {size: 0}
console.log('---', s.toString());
// --- [object Set]
console.log('---', s[Symbol.toStringTag]);
// --- Set

class Foo {}
let foo = new Foo();

console.log('+++', foo);
// +++ Foo {}
console.log('+++', foo.toString());
// +++ [object Object]
console.log('+++', foo[Symbol.toStringTag]);
// +++ undefined

class Bar {
    constructor() {
        this[Symbol.toStringTag] = 'Bar';
    }
}
let bar = new Bar();
console.log('---', bar);
// --- Bar {Symbol(Symbol.toStringTag): 'Bar'}
console.log('---', bar.toString());
// --- [object Bar]
console.log('---', bar[Symbol.toStringTag]);
// --- Bar

let sfn = Object.prototype.toString;
console.log('bar type', sfn.call(bar));
// bar type [object Bar]
});

(() => {
// 16、Symbol.unscopables
/**
 * 表示：一个对象，该对象所有的以及继承的属性，都会从关联对象的with环境绑定中排除。
 * 设置这个符号并让其映射对应属性的键值为true，就可以阻止该属性出现在with环境绑定中，如下例所示：
 * 注：不推荐使用with，因此也不推荐使用Symbol.enscopables
 */
let o = { foo: 'foo' };
with(o) {
    console.log('---', foo);
    // --- foo
}

// o[Symbol.unscopables] = {
//     foo: true
// }
// with(o) {
//     console.log('---', foo);
//     // Uncaught ReferenceError: foo is not defined
// }
});