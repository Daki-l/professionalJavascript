/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unit4_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit4/index */ \"./src/unit4/index.js\");\n// import './appendix/A1';\r\n// import './unit1/index';\r\n// import './unit3/index';\r\n\n\n//# sourceURL=webpack://professionalJavascript/./src/index.js?");

/***/ }),

/***/ "./src/unit4/4.1_原始值与引用值/index.js":
/*!****************************************!*\
  !*** ./src/unit4/4.1_原始值与引用值/index.js ***!
  \****************************************/
/***/ (() => {

eval("console.log('4.1_原始值与引用值');\r\n\r\n// 4.1 原始值与引用值\r\n/**\r\n * ECMAScript 变量可以包含两种不同类型的数据：原始值和引用值。\r\n * 原始值(primitive value): 最简单的数据。（undefined, null, boolean, Number, String, Symbol）\r\n * 引用值(refrence value): 由多个值构成的对象。\r\n * \r\n * 在把一个值赋给变量时，JavaScript引擎必须确定这个值时原始值还是引用值，\r\n * 保存原始值的变量是 按值 访问的，因为操作的就是存储在变量的实际值。\r\n * 保存引用值的变量是 按引用 访问的。\r\n * 引用值是保存在内存中的对象。与其他语言不通，JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。\r\n * 在操作对象时，实际上操作的是改对象的引用(reference)而非实际的对象本身。\r\n */\r\n\r\n(() => {\r\nconsole.log('4.1.1 动态属性');\r\n// 4.1.1 动态属性\r\n\r\n/**\r\n * 原始值和引用值的定义方式很类似，都是创建一个变量，然后给他赋一个值。\r\n * 不过，在变量保存了这个值后，可以对这个值做什么，则大有不同：\r\n */\r\n\r\n// 对引用值而言，可以随时添加、修改、删除其属性和方法\r\nlet person = new Object();\r\nperson.name = 'Nissa';\r\nconsole.log(person.name);   // Nissa\r\ndelete person.name;\r\nconsole.log(person.name);   // undefined\r\n/**\r\n * 创建了一个对象，并把它保存在变量 person 中，然后给这个对象添加了一个名为 name 的属性，并给这个属性赋值一个字符串 'Nissa',\r\n * 在此之后，就可以访问这个属性，直到对象被销毁或属性被显示的删除。\r\n */\r\n\r\n// 原始值不能有属性，尽管给原始值添加属性不会报错。\r\nlet name = 'Bioss';\r\nname.age = 20;\r\nconsole.log(name.age);  // undefined\r\n/**\r\n * 给字符串 name 定义一个 age 属性并给改值赋值 20。输出时并有输出改值\r\n * 注：只有引用值可以动态添加后面可以使用的属性。\r\n */\r\n\r\n/**\r\n * 注：原始类型的初始化可以只使用原始字面量形式。如果使用 new 关键字，则 JavaScript 会创建一个 Object类型的实例，但其行为类似原始值。\r\n */\r\nlet name1 = 'Nissa';\r\nlet name2 = new String('Mary');\r\n\r\nname1.age = 27;\r\nname2.age = 26;\r\n\r\nconsole.log(name1.age);     // undefined\r\nconsole.log(name2.age);     // 26\r\nconsole.log(typeof name1);  // string\r\nconsole.log(typeof name2);  // object\r\n\r\n});\r\n\r\n(() => {\r\nconsole.log('4.1.2 复制值');\r\n// 4.1.2 复制值\r\n\r\n/**\r\n * 除了存储方式不同，原始值和引用值在通过变量赋值时也有所不同。\r\n * 在通过变量把一个原始值赋值到另一个变量时，原始值会被复制到新变量的位置。\r\n */\r\nlet num1 = 5;\r\nlet num2 = num1;\r\n\r\n/**\r\n * num1 包含数值5，当吧num2 初始化为 num1 时，num2 也会得到数值5。这个值跟存储在num1 中的5 完全是独立的，因为它是那个值得副本。\r\n * 这两个变量可以独立使用，互不干扰。\r\n * \r\n    复制前的变量对象\r\n        --------------------------\r\n                |           \r\n                |\r\n        num1    | 5 (Number类型)\r\n        --------------------------\r\n    复制后的变量对象\r\n        --------------------------\r\n                |           \r\n        num2    | 5 (Number类型)\r\n        num1    | 5 (Number类型)\r\n        --------------------------\r\n */\r\n/**\r\n * 在把引用值从一个变量赋值给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。\r\n * 区别在于：这里复制的值实际上是一个指针，它指向存储对内存中的对象。\r\n * 操作完成后，两个变量实际上指向同一个对象，因此一个对象上面的变化会在另一个变量上面反映出来。\r\n */\r\nlet obj1 = new Object();\r\nlet obj2 = obj1;\r\nobj2.name = 'Nisso';\r\nconsole.log(obj1.name); // Nisso\r\n\r\n/**\r\n复制前的变量对象\r\n    --------------------------\r\n            |           \r\n            |\r\n    obj1    | (Object类型)       00BBf9EC(内存地址)\r\n    --------------------------\r\n复制后的变量对象\r\n    --------------------------\r\n            |           \r\n    obj2    | (Object类型)      00BBf9EC(内存地址)\r\n    obj1    | (Object类型)      00BBf9EC(内存地址)\r\n    --------------------------\r\n */\r\n});\r\n(() => {\r\nconsole.log('4.1.3 传递参数');\r\n// 4.1.3 传递参数\r\n/**\r\n * ECMAScript 中所有函数的参数都是按值传递的。\r\n * 这意味着函数外的值会被复制到函数内部的参数中，就像从一个遍历复制到另一个变量。\r\n * 如果都是原始值，那么就跟原始值变量的复制一样，如果是引用值，那么就跟引用值变量的复制一样。\r\n * 变量有按值和按引用访问，而传参只有按值传递。\r\n * 在按照传递参数时，值会被复制到一个局部变量（即一个命名参数，或者用ECMAScript的话说，就是arguments对象中的一个槽位）。\r\n * 在按引用传递参数时，值在内存中的位置会被保存在一个局部变量，这意味着对本地变量的修改会反映到函数外部（这在ECMAScript中时不可能的）\r\n */\r\nfunction addTen (num) {\r\n    num += 10;\r\n    return num;\r\n}\r\nlet count = 20;\r\nlet result = addTen(20);\r\nconsole.log(count);     // 20\r\nconsole.log(result);     // 30\r\n\r\n/**\r\n * 函数 addTen() 有一个参数num，它是一个局部变量。在调用时，变量count 作为参数传入。\r\n * count的值时20，这个值被复制到参数 num 以便在 addTen() 内部使用。\r\n * 在函数内部，参数的值被加上了10，但这不会影响到函数外部的原始值 count。\r\n * 参数 num 和变量 count 互不干扰，它们只是碰巧保存了一样的值。\r\n * 如果 num 是按引用传递的，那么 count 的值也会被修改为30。\r\n * 在使用数值这样的原始值是非常明显的。\r\n */\r\n\r\nfunction setName (obj) {\r\n    obj.name = 'Mary';\r\n}\r\nlet person = new Object();\r\nsetName(person);\r\nconsole.log(person.name);   // Mary\r\n\r\n/**\r\n * 创建一个对象并把它保存在变量 person 中。然后，这个对象被传给 setName() 方法，并被复制到参数obj中。\r\n * 在函数内部，obj 和 person 都指向同一个对象。结果就是，即使对象是按值传进函数的，obj 也会通过引用访问对象。\r\n * 当函数内部给obj 设置了name 属性时，函数外部的对象也会反映这个变化，因为obj 指向的对象保存在全局作用域的堆内存上。\r\n * 很多开发错误的认为，当在局部作用域中修改对象而变化反映到全局时，这意味着参数时按引用传递的。\r\n * 为了证明对象时按值传递的，在看下面修改后的例子：\r\n */\r\nfunction setName2(name) {\r\n    name = 'Tom';\r\n}\r\nlet person2 = new Object();\r\nperson2.name = 'Mary';\r\nsetName2(person2.name);\r\nconsole.log(person2.name);   // Mary\r\n\r\n/**\r\n * 这个例子前后唯一的变化就是 setName2() 中多了两行代码，将obj重新定义为一个有着不同name 的对象。\r\n * 当person2 传入 setName2() 时，其name 属性被设置为 \"Mary\"。\r\n * 然后变量obj 被设置为一个新对象且name 属性被设置为 \"Tom\"，。\r\n * 如果 person 时按引用传递的，那么 person 应该自动将指针指向为 name 为 \"Tom\" 的对象。\r\n * 可是 person2.name 的结果时 \"Tom\"，这表明函数中的参数的值改变之后，原始的引用任然没有变。\r\n * 当 obj 在函数内部被重写时，它变成可一个指向本地的指针。而那个本地对象在函数执行结束时被销毁了。\r\n */\r\n\r\n/**\r\n * 注：ECMAScript 中函数的参数就是局部变量。\r\n */\r\n\r\n// 按引用\r\nlet person3 = new Object();\r\nperson3.name = 'Mary';\r\n\r\nlet person4 = person3;\r\nperson4.name = 'Tom';\r\nconsole.log(person3.name);  // Tom\r\n\r\n})();\n\n//# sourceURL=webpack://professionalJavascript/./src/unit4/4.1_%E5%8E%9F%E5%A7%8B%E5%80%BC%E4%B8%8E%E5%BC%95%E7%94%A8%E5%80%BC/index.js?");

/***/ }),

/***/ "./src/unit4/index.js":
/*!****************************!*\
  !*** ./src/unit4/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _4_1_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./4.1_原始值与引用值/index.js */ \"./src/unit4/4.1_原始值与引用值/index.js\");\n/* harmony import */ var _4_1_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_4_1_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://professionalJavascript/./src/unit4/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;