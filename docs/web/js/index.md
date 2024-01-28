---
layout: doc
---

# js 指南

## 错误处理

- 你可以用 throw 语句抛出一个异常并且用 try...catch 语句捕获处理它。
- try...catch 语句

### 异常类型

JavaScript 可以抛出任意对象。然而，不是所有对象能产生相同的结果。尽管抛出数值或者字母串作为错误信息十分常见，但是通常用下列其中一种异常类型来创建目标更为高效：

- Error
  -- 所有错误的基本类型
- EvalError
  -- eval()函数没有被正确调用
- RangeError
  -- 数值变量或参数超出其有效范围
- ReferenceError
  -- 无效的引用
- SyntaxError
  -- 在脚本或函数中检测到语法错误
- TypeError
  -- 变量或参数不属于有效类型
- URIError
  -- URI 相关函数接收了非法参数
- InternalError
  -- JavaScript 引擎中存在错误

### 抛出异常

通常你会使用 throw 关键字来抛出你创建的 Error 对象。可以使用 try...catch 结构来处理异常：

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

### 处理一个特定错误

你可以通过判断异常的类型来特定处理某一类的异常，即判断 constructor 属性，当使用现代 JavaScript 引擎时，可使用 instanceof 关键字：

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.error(e.name + ": " + e.message);
  }
  // ... etc
  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
```

### 自定义错误类型

你可能希望自定义基于 Error 的异常类型，使得你能够 throw new MyError() 并可以使用 instanceof MyError 来检查某个异常的类型。这种需求的通用解决方法如下。

```js
// es5
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, CustomError.prototype);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

Object.setPrototypeOf(CustomError.prototype, Error.prototype);

Object.setPrototypeOf(CustomError, Error);

CustomError.prototype.name = "CustomError";

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
}

// es6

class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stacktrace
}
```

## 循环与迭代

> 你可以把循环想成一种计算机化的游戏，告诉某人在一个方向上走 X 步，然后在另一个方向上走 Y 步；例如，“向东走 5 步”可以用一个循环来这样表达.

```js
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为 0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其他的循环用起来更简单。

JavaScript 中提供了这些循环语句：

- for 语句
- do...while 语句
- while 语句
- label 语句
- break 语句
- continue 语句
- for...in 语句
- for...of 语句

### for 语句

一个 for 循环会一直重复执行，直到指定的循环条件为 false。JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

```js
for (initialize; test; increment) {
  // 循环体 (statements)
}
```

当一个 for 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 initialExpression，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. 计算 condition 表达式的值。如果 condition 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 condition 表达式整个都被省略掉了，condition 的值会被认为是 true。
3. 循环中的 statement 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。
4. 如果有更新表达式 incrementExpression，执行更新表达式。
5. 回到步骤 2。

```js
<form name="selectForm">
  <p>
    <label for="musicTypes"
      >Choose some music types, then click the button below:</label
    >
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>爵士</option>
      <option>布鲁斯</option>
      <option>新纪元</option>
      <option>古典</option>
      <option>歌剧</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="选择了多少个选项？" /></p>
</form>

<script>
  function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert("选择选项的数量是：" + howMany(document.selectForm.musicTypes));
  });
</script>
```

:::info
**注意**：document.selectForm: 是 JavaScript 中的一个方法，用于从 HTML 文档中选择一个表单。这个方法可以帮助您轻松地处理表单数据，而无需手动检查每个表单元素。
要使用它。 请遵循一下步骤：

1. 找到您要选择的表单元素。
2. 调用 document.selectForm 方法，并传入您要选择的表单元素的 id、name 或标签。
3. 获取到表单元素后，您可以使用该元素来访问和操作表单数据。

:::

### do...while 语句

do...while 语句一直重复直到指定的条件求值得到假值（false）。一个 do...while 语句看起来像这样

```js
do {
  // 代码块
} while (条件);
```

statement 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（{ ... }）包括起来。如果 condition 为真（true），statement 将再次执行。在每个执行的结尾会进行条件的检查。当 condition 为假（false），执行会停止并且把控制权交回给 do...while 后面的语句。

### while 语句

一个 while 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 while 语句看起来像这样：

如果这个条件变为假，循环里的 statement 将会停止执行并把控制权交回给 while 语句后面的代码。

条件检测会在每次 statement 执行之前发生。如果条件返回为真， statement 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 while 后面的语句。

要执行多条语句（语句块），要使用语句块 ({ ... }) 包括起来。

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

避免无穷循环（无限循环）。保证循环的条件结果最终会变成假；否则，循环永远不会停止。因为条件永远不会变成假值，下面这个 while 循环将会永远执行：

```js
while (true) {
  // 无限循环
}
```

### label 语句

> 一个 label 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环，然后使用 break 或者 continue 来指出程序是否该停止循环还是继续循环。

举一个比较典型的例子，看完后即明白 Label 的应用：

```js
var num = 0;
for (var i = 0; i < 10; i++) {
  // i 循环
  for (var j = 0; j < 10; j++) {
    // j 循环
    if (i == 5 && j == 5) {
      break; // i = 5，j = 5 时，会跳出 j 循环
    } // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
    num++;
  }
}

alert(num); // 输出 95
```

添加 Label 后：

```js
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
      // 返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}

alert(num); // 输出 55
```

> 使用 continue 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：

```js
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint;
    }
    num++;
  }
}
alert(num); // 95
```

> 从 alert(num) 的值可以看出，continue outPoint; 语句的作用是跳出当前循环，并跳转到 outPoint（标签）下的 for 循环继续执行。

### break 语句

使用 break 语句来终止循环，switch，或者是链接到 label 语句。

> 当你使用不带 label 的 break 时，它会立即终止当前所在的 while，do-while，for，或者 switch 并把控制权交回这些结构后面的语句。当你使用带 label 的 break 时，它会终止指定的带标记（label）的语句。

```js
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

### continue 语句

continue 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 while、do-while、for，或者 label 语句。

> 当你使用不带 label 的 continue 时，它终止当前 while，do-while，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。当你使用带 label 的 continue 时，它会应用被 label 标识的循环语句。

```js
var i = 0;
var j = 10;
checkDj: while (i < 4) {
  console.log(i);
  i += 1;
  checkId: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkId;
    }
    console.log(j + " 是奇数。");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

### for...in 语句

> for...in 语句循环一个指定的变量来循环一个对象所有**可枚举**的属性。JavaScript 会为每一个不同的属性执行指定的语句。

下面的函数通过它的参数得到一个对象和这个对象的名字。然后循环这个对象的所有属性并且返回一个列出属性名和该属性值的字符串。

```js
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
```

::: info
`for...in`循环有一些缺点，如下：

1. 遍历顺序不确定：`for...in`循环的遍历顺序是不确定的，可能会受到多种因素的影响，例如对象属性的顺序、浏览器或 JavaScript 引擎的实现等。

2. 无法保证遍历结果的一致性：由于遍历顺序的不确定性，使用`for...in`循环可能会导致不同的遍历结果，从而影响代码的可读性和可维护性。

3. 无法遍历数组中的空元素：`for...in`循环会遍历数组的所有可枚举属性，包括空元素。如果需要跳过空元素，需要手动检查元素的值。

:::

总之，`for...in`循环在遍历数组时存在一些缺点，可能会影响代码的可读性和可维护性。如果需要按照数组元素的顺序遍历数组，建议使用`forEach`方法或`for...of`循环。

### for...of 语句

> for...of 语句在可迭代对象（包括 Array、Map、Set、arguments 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

下面的这个例子展示了 for...of 和 for...in 两种循环语句之间的区别。 for...in 循环遍历的结果是数组元素的下标，而 for...of 遍历的结果是元素的值：

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}

// 注意 for...of 的输出没有出现 "hello"
```

> for...of 与 for...in 的区别,无论是 for...in 还是 for...of 语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

- for...in 语句以任意顺序迭代对象的可枚举属性。

- for...of 语句遍历可迭代对象定义要迭代的数据。

以下示例显示了与 Array 一起使用时，for...of 循环和 for...in 循环之间的区别。

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

此循环仅以原始插入顺序记录 iterable 对象的可枚举属性。它不记录数组元素 3, 5, 7 或 hello，因为这些不是枚举属性。但是它记录了数组索引以及 arrCustom 和 objCustom。如果你不知道为什么这些属性被迭代，[array iteration and for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in) 中有更多解释。

```js
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}
```

这个循环类似于第一个，但是它使用 [hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 来检查，如果找到的枚举属性是对象自己的（不是继承的）。如果是，该属性被记录。记录的属性是 0, 1, 2 和 foo，因为它们是自身的属性**（不是继承的）**。属性 arrCustom 和 objCustom 不会被记录，因为它们是继承的

```js
for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

该循环迭代并记录 iterable 作为[可迭代对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1)定义的迭代值，这些是数组元素 3, 5, 7，而不是任何对象的属性。

## 函数

### 函数作用域

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的作用域内定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。

换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

```js
// 下面的变量定义在全局作用域中
const num1 = 20;
const num2 = 3;
const name = "Cham";

// 此函数定义在全局作用域中
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// 嵌套函数示例
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} 的得分为 ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Cham 的得分为 5"
```

### 作用域和函数栈

递归

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

- 函数名
- [arguments.callee(已被弃用)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
- 作用域内一个指向该函数的变量名

调用自身的函数我们称之为递归函数。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环，或者在这种情况下更确切地说是无限递归）。
例如，考虑以下的循环：

```js
let x = 0;
// “x < 10”是循环条件
while (x < 10) {
  // 做些什么
  x++;
}
```

可以被转化成一个递归函数声明，然后调用该函数：

```js
let x = 0;
function loop(x) {
  if (x >= 10) {
    return;
  }
  loop(x + 1); // 递归调用自身，直到x >= 10时停止递归调用。
}
loop(0);
```

不过，有些算法并不能简单的用迭代来实现。例如，获取树结构（例如 DOM）中所有的节点时，使用递归实现要容易得多：

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // 对节点做些什么
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

跟 loop 函数相比，这里每个递归调用都产生了更多的递归调用。

将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。

事实上，递归本身就使用了栈：函数栈。类似栈的行为可以在以下示例中看到：

```js
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`开始：${i}`);
  foo(i - 1);
  console.log(`结束：${i}`);
}
foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3
```

### 闭包

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数具有定义在外部函数中的所有变量和函数（以及外部函数能访问的所有变量和函数）的完全访问权限。

但是，外部函数却不能访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一种封装。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行的持续时间要长。当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。

```js
// 外部函数定义了一个名为“name”的变量
const pet = function (name) {
  const getName = function () {
    // 内部函数可以访问外部函数的“name”变量
    return name;
  };
  return getName; // 返回内部函数，从而将其暴露给外部作用域
};
const myPet = pet("Live");

console.log(myPet()); // "Live"
```

实际上可能会比上面的代码复杂的多。它可以返回一个包含用于操作外部函数的内部变量的方法的对象。

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // 在这个上下文中：setName(newName) 等价于 setName: function (newName)
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Live");
console.log(pet.getName()); // Live

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
```

在上面的代码中，外部函数的 name 变量对内部函数来说是可访问的，而除了通过内部函数本身，没有其他任何方法可以取得内部的变量。内部函数的内部变量就像对外部参数和变量的保险柜。它们会为内部函数保留“稳定”而又“被封装”的数据参与运行。而这些内部函数甚至不会被分配给一个变量，或者有个名称

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // 我们不希望外部能够修改的代码......

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

:::info
**备注：** 使用闭包时需要注意许多陷阱！

如果一个闭包的函数定义了一个和外部的某个变量名称相同的变量，那么这个闭包将无法引用外部作用域中的这个变量。（内部作用域的变量“覆盖”外部作用域，直至程序退出内部作用域。可以将其视作命名冲突。）

```js
const createPet = function (name) {
  // 外部函数定义了一个名为“name”的变量。
  return {
    setName(name) {
      // 闭包函数还定义了一个名为“name”的变量。
      name = name; // 我们如何访问外部函数定义的“name”？
    },
  };
};
```

:::

### 箭头函数

[箭头函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)（也称胖箭头，以区分未来 JavaScript 中假设的 -> 语法）相比函数表达式具有较短的语法且没有它自己的 this、arguments、super 和 new.target。箭头函数总是匿名的。

有两个因素会影响对箭头函数的引入：更简洁的函数和 this 的无绑定性。

#### 更简洁的函数

在一些函数模式中，更简洁的函数很受欢迎。对比一下：

```js
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```

#### 无单独的 this

在箭头函数出现之前，每一个新函数都定义了自己的 this 值（在构造函数中是一个新的对象；在严格模式下是 undefined；在作为“对象方法”调用的函数中指向这个对象；等等）。事实证明，这对于面向对象的编程风格来说并不理想。

```js
function Person() {
  // 构造函数 Person() 将 `this` 定义为自身。
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数将 `this` 定义为“全局对象”，
    // 这与 Person() 定义的 `this` 不同。
    this.age++;
  }, 1000);
}

const p = new Person();
```

箭头函数没有自己的 this，而是使用封闭执行上下文的 this 值。因此，在以下代码中，传递到 setInterval 中的函数内的 this 与闭包函数中的 this 相同

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 这里的 `this` 正确地指向 person 对象
  }, 1000);
}

const p = new Person();
```

### 预定义函数

- [eval()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 方法执行方法计算以字符串表示的 JavaScript 代码
- [isFinite()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite) 全局函数判断传入的值是否是有限的数值。如果需要的话，其参数首先被转换为一个数值
- [isNaN()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 全局函数判断传入的值是否是“非数字值”（NaN）
- [parseFloat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) 函数解析字符串参数，并返回一个浮点数
- [parseInt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。
- [decodeURI()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) 函数对先前经过 [encodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 函数或者其他类似方法编码过的统一资源标志符（URI）进行解码。
- [decodeURIComponent()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) 方法对先前经过 [encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 函数或者其他类似方法编码的统一资源标志符（URI）进行解码。
- [encodeURI()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理（surrogate）”字符组成的字符，只会编码为四个转义序列）。
- [encodeURIComponent()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理”字符组成的字符，只会编码为四个转义序列）。
