console.log('4.1_原始值与引用值');

// 4.1 原始值与引用值
/**
 * ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。
 * 原始值(primitive value): 最简单的数据。（undefined, null, boolean, Number, String, Symbol）
 * 引用值(refrence value): 由多个值构成的对象。
 * 
 * 在把一个值赋给变量时，JavaScript引擎必须确定这个值时原始值还是引用值，
 * 保存原始值的变量是 按值 访问的，因为操作的就是存储在变量的实际值。
 * 保存引用值的变量是 按引用 访问的。
 * 引用值是保存在内存中的对象。与其他语言不通，JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。
 * 在操作对象时，实际上操作的是改对象的引用(reference)而非实际的对象本身。
 */

(() => {
console.log('4.1.1 动态属性');
// 4.1.1 动态属性

/**
 * 原始值和引用值的定义方式很类似，都是创建一个变量，然后给他赋一个值。
 * 不过，在变量保存了这个值后，可以对这个值做什么，则大有不同：
 */

// 对引用值而言，可以随时添加、修改、删除其属性和方法
let person = new Object();
person.name = 'Nissa';
console.log(person.name);   // Nissa
delete person.name;
console.log(person.name);   // undefined
/**
 * 创建了一个对象，并把它保存在变量 person 中，然后给这个对象添加了一个名为 name 的属性，并给这个属性赋值一个字符串 'Nissa',
 * 在此之后，就可以访问这个属性，直到对象被销毁或属性被显示的删除。
 */

// 原始值不能有属性，尽管给原始值添加属性不会报错。
let name = 'Bioss';
name.age = 20;
console.log(name.age);  // undefined
/**
 * 给字符串 name 定义一个 age 属性并给改值赋值 20。输出时并有输出改值
 * 注：只有引用值可以动态添加后面可以使用的属性。
 */

/**
 * 注：原始类型的初始化可以只使用原始字面量形式。如果使用 new 关键字，则 JavaScript 会创建一个 Object类型的实例，但其行为类似原始值。
 */
let name1 = 'Nissa';
let name2 = new String('Mary');

name1.age = 27;
name2.age = 26;

console.log(name1.age);     // undefined
console.log(name2.age);     // 26
console.log(typeof name1);  // string
console.log(typeof name2);  // object

});

(() => {
console.log('4.1.2 复制值');
// 4.1.2 复制值

/**
 * 除了存储方式不同，原始值和引用值在通过变量赋值时也有所不同。
 * 在通过变量把一个原始值赋值到另一个变量时，原始值会被复制到新变量的位置。
 */
let num1 = 5;
let num2 = num1;

/**
 * num1 包含数值5，当吧num2 初始化为 num1 时，num2 也会得到数值5。这个值跟存储在num1 中的5 完全是独立的，因为它是那个值得副本。
 * 这两个变量可以独立使用，互不干扰。
 * 
    复制前的变量对象
        --------------------------
                |           
                |
        num1    | 5 (Number类型)
        --------------------------
    复制后的变量对象
        --------------------------
                |           
        num2    | 5 (Number类型)
        num1    | 5 (Number类型)
        --------------------------
 */
/**
 * 在把引用值从一个变量赋值给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。
 * 区别在于：这里复制的值实际上是一个指针，它指向存储对内存中的对象。
 * 操作完成后，两个变量实际上指向同一个对象，因此一个对象上面的变化会在另一个变量上面反映出来。
 */
let obj1 = new Object();
let obj2 = obj1;
obj2.name = 'Nisso';
console.log(obj1.name); // Nisso

/**
复制前的变量对象
    --------------------------
            |           
            |
    obj1    | (Object类型)       00BBf9EC(内存地址)
    --------------------------
复制后的变量对象
    --------------------------
            |           
    obj2    | (Object类型)      00BBf9EC(内存地址)
    obj1    | (Object类型)      00BBf9EC(内存地址)
    --------------------------
 */
});
(() => {
console.log('4.1.3 传递参数');
// 4.1.3 传递参数
/**
 * ECMAScript 中所有函数的参数都是按值传递的。
 * 这意味着函数外的值会被复制到函数内部的参数中，就像从一个遍历复制到另一个变量。
 * 如果都是原始值，那么就跟原始值变量的复制一样，如果是引用值，那么就跟引用值变量的复制一样。
 * 变量有按值和按引用访问，而传参只有按值传递。
 * 在按照传递参数时，值会被复制到一个局部变量（即一个命名参数，或者用ECMAScript的话说，就是arguments对象中的一个槽位）。
 * 在按引用传递参数时，值在内存中的位置会被保存在一个局部变量，这意味着对本地变量的修改会反映到函数外部（这在ECMAScript中时不可能的）
 */
function addTen (num) {
    num += 10;
    return num;
}
let count = 20;
let result = addTen(20);
console.log(count);     // 20
console.log(result);     // 30

/**
 * 函数 addTen() 有一个参数num，它是一个局部变量。在调用时，变量count 作为参数传入。
 * count的值时20，这个值被复制到参数 num 以便在 addTen() 内部使用。
 * 在函数内部，参数的值被加上了10，但这不会影响到函数外部的原始值 count。
 * 参数 num 和变量 count 互不干扰，它们只是碰巧保存了一样的值。
 * 如果 num 是按引用传递的，那么 count 的值也会被修改为30。
 * 在使用数值这样的原始值是非常明显的。
 */

function setName (obj) {
    obj.name = 'Mary';
}
let person = new Object();
setName(person);
console.log(person.name);   // Mary

/**
 * 创建一个对象并把它保存在变量 person 中。然后，这个对象被传给 setName() 方法，并被复制到参数obj中。
 * 在函数内部，obj 和 person 都指向同一个对象。结果就是，即使对象是按值传进函数的，obj 也会通过引用访问对象。
 * 当函数内部给obj 设置了name 属性时，函数外部的对象也会反映这个变化，因为obj 指向的对象保存在全局作用域的堆内存上。
 * 很多开发错误的认为，当在局部作用域中修改对象而变化反映到全局时，这意味着参数时按引用传递的。
 * 为了证明对象时按值传递的，在看下面修改后的例子：
 */
function setName2(name) {
    name = 'Tom';
}
let person2 = new Object();
person2.name = 'Mary';
setName2(person2.name);
console.log(person2.name);   // Mary

/**
 * 这个例子前后唯一的变化就是 setName2() 中多了两行代码，将obj重新定义为一个有着不同name 的对象。
 * 当person2 传入 setName2() 时，其name 属性被设置为 "Mary"。
 * 然后变量obj 被设置为一个新对象且name 属性被设置为 "Tom"，。
 * 如果 person 时按引用传递的，那么 person 应该自动将指针指向为 name 为 "Tom" 的对象。
 * 可是 person2.name 的结果时 "Tom"，这表明函数中的参数的值改变之后，原始的引用任然没有变。
 * 当 obj 在函数内部被重写时，它变成可一个指向本地的指针。而那个本地对象在函数执行结束时被销毁了。
 */

/**
 * 注：ECMAScript 中函数的参数就是局部变量。
 */

// 按引用
let person3 = new Object();
person3.name = 'Mary';

let person4 = person3;
person4.name = 'Tom';
console.log(person3.name);  // Tom

});

(() => {
// 4.1.4 确定类型
/**
 * typeof 操作符最适合用来判断一个变量是否为原始类型。
 * 准确的的说，它是判断一个变量是否为字符串、数值、布尔值或undefined的最好方式。
 * 如果对象是对象或null，返回的全是object
 */
 console.log('4.1.4 确定类型');
let s = 'Numssai';
let b = true;
let i = 11;
let u;
let n = null;
let o = new Object();
let f = () => {};
console.log('s', typeof s);    // string
console.log('b', typeof b);    // boolean
console.log('i', typeof i);    // number
console.log('u', typeof u);    // undefined
console.log('n', typeof n);    // objcet
console.log('o', typeof o);    // objcet

console.log('f', typeof f);    // function

/**
 * typeof 虽然对原始值很有用，但他对引用值得用处不大。我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。
 * ECMAScript 提供了instanceof 操作符。
 * result = variable instanceof constructor
 * 如果变量是给定引用类型（由其原型链决定）的实例，则instanceof 返回true。
 */
class person {}
console.log(person instanceof Object);  // true
let colors = ['#FFFFF'];
console.log(colors instanceof Array);   // true
let pattern = /[1-9]/ig;
console.log(pattern instanceof RegExp); // true

/**
 * 注：
 * typeof 操作符在用于检测函数是也会返回 'function'。
 * 当在Safari（直到Safari5）和Chrome（chrome7）中用于检测正则表达式时，
 * 由于实现细节的原因，typeof 也会返回 'functuin'。
 *   ECMAScript-262 规定
 *   任何实现内部 [[Call]] 方法的对象都应该在 typeof 检测时返回 'function'。
 *   因为上述浏览器中的正则表达式实现了这个方法，所以typeof 对正则表达式也返回了 'function'。
 * 在IE和Frifox中，typeof 对正则表达式返回 'object'
 */

/**
 * 在实际使用场景中，需要对一个对象进行类型判断有个通过Object.prototype.toString.call() 方法来进行判定
 */
function _toString (value) {
    return Object.prototype.toString.call(value);
}

console.log(_toString(u));  // [object Undefined]
console.log(_toString(n));  // [object Null]
console.log(_toString(f));  // [object Function]
console.log(_toString(person));  // [object Function]
console.log(_toString(colors));  // [object Array]
console.log(_toString(pattern));  // [object RegExp]

/**
 * 原理是 Object 的toString() 方法会返回”[object ObjectName]”，其中 ObjectName 是对象类型的名称。
 * 而各个不同的对象会内置各自的toString() 方法，所以需要调用Object原型中的toString() 方法。
 * call 是用来改变this的指向，apply也可以，如果不改变this指向我们目标变量，this将永远指向调用的Objcet.prototype
 */
 console.log(Object.prototype.toString(u));     // [object Object]
 console.log(Object.prototype.toString.call(u));  // [object Undefined]
})();