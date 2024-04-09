---
layout: doc
---

# 前端 js 面试

## js 思维导图

[js 思维导图](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/831963d7ed524c3796b1889037da72f9~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1260&h=4032&s=669131&e=jpg&b=313131)

## AMD 和 CommonJS 的区别

它们都是实现模块体系的方式，直到 ES2015 出现之前，JavaScript 一直没有模块体系。CommonJS 是同步的，而 AMD（Asynchronous Module Definition） 从全称中可以明显看出是异步的。CommonJS 的设计是为服务器端开发考虑的，而 AMD 支持异步加载模块，更适合浏览器。
我发现 AMD 的语法非常冗长，CommonJS 更接近其他语言 import 声明语句的用法习惯。大多数情况下，我认为 AMD 没有使用的必要，因为如果把所有 JavaScript 都捆绑进一个文件中，将无法得到异步加载的好处。此外，CommonJS 语法上更接近 Node 编写模块的风格，在前后端都使用 JavaScript 开发之间进行切换时，语境的切换开销较小。
我很高兴看到 ES2015 的模块加载方案同时支持同步和异步，我们终于可以只使用一种方案了。虽然它尚未在浏览器和 Node 中完全推出，但是我们可以使用代码转换工具进行转换。

## ES6 模块与 CommonJS 模块有什么异同？

ES6 Module 和 CommonJS 模块的区别：

- CommonJS 是对模块的浅拷⻉，ES6 Module 是对模块的引⽤，即 ES6 Module 只存只读，不能改变其值，也就是指针指向不能变，类似 const；
- import 的接⼝是 read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对 commonJS 对重新赋值（改变指针指向），但是对 ES6 Module 赋值会编译报错。

ES6 Module 和 CommonJS 模块的共同点：

- CommonJS 和 ES6 Module 都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。

## new 操作符的实现原理

1. 首先创建了一个新的空对象
2. 设置原型，将对象的原型设置为函数的 prototype 对象。
3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

## 实现一个 new 操作符

```js
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null; // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  } // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype); // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments); // 判断返回对象
  let flag =
    result && (typeof result === "object" || typeof result === "function"); // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);
```

## 数组有哪些原生方法

数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。
数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。
数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。
数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。
数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。
数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法
数组归并方法 reduce() 和 reduceRight() 方法

## for in 和 for of 的区别

- for...in 循环用来遍历对象的所有可枚举属性名，常用于处理对象的属性集合。
- for...of 循环用来遍历可迭代对象的每个值，常用于处理数组、Set、Map 等集合中的元素。在处理数组时，它比传统的 for 循环更加简洁易读，因为它直接访问数组的值而不是索引。

```js
let obj = { a: 1, b: 2, c: 3 };
let arr = [4, 5, 6];

// for...in
for (let prop in obj) {
  console.log(prop); // 输出: "a", "b", "c"
}

// for...of
for (let val of arr) {
  console.log(val); // 输出: 4, 5, 6
}
```

## 数组的遍历的方法有哪些

- forEach()：对数组的每个元素执行一次提供的函数。
- map()：创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
- filter()：创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
- some()：测试数组中是否至少有一个元素通过了被提供的函数实现的测试。
- every()：测试数组中的所有元素是否都通过了被提供的函数实现的测试。
- reduce()：将数组中的元素计算为一个值（从左到右）。
- reduceRight()：将数组中的元素计算为一个值（从右到左）。
- for...of：遍历可迭代对象的每个元素。

## 原型和原型链

在 JavaScript 中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 proto 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就是新建的对象为什么能够使用 toString() 等方法的原因。

特点： JavaScript 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。当修改原型时，与之相关的对象也会继承这一改变。
