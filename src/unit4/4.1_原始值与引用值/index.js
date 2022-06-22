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

})();