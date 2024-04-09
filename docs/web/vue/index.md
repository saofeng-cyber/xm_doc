---
layout: doc
---

# Vue3

随机总结，可能不完整 😁

## 谈谈 Object.defineProperty 和 Proxy 的优劣对比，以及 Vue3 为什么选择 Proxy 作为数据响应式系统的基础？

### Object.defineProperty

Object.defineProperty 是 ES5 中一个核心方法，用于在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

```js
Object.defineProperty(obj, prop, descriptor);
```

- obj：要定义属性的对象。
- prop：要定义或修改的属性的名称或 Symbol 。
- descriptor：要定义或修改的属性描述符。

属性描述符是一个对象，包含该属性的元信息。

### Proxy

Proxy 是 ES6 中新增的一个功能，它允许你创建一个代理对象，该对象包装了另一个对象，并可以在对被包装对象进行操作时添加额外的操作。

```js
let proxy = new Proxy(target, handler);
```

- target：要包装的目标对象。
- handler：一个定义代理对象行为的对象。

### 优劣对比

Object.defineProperty 的优点是兼容性好，可以支持到 IE8。但是它只能对属性进行数据劫持，所以无法对整个对象进行劫持。

Proxy 的优点是兼容性不好，但是它可以劫持整个对象，并支持数组。

### Vue3 为什么选择 Proxy 作为数据响应式系统的底层实现？

Vue3 选择 Proxy 的原因是它比 Object.defineProperty 更加底层，并且能够支持更多操作。Proxy 可以直接监听对象而非属性，并且支持数组。

### 总结

Object.defineProperty 虽然兼容性好，但是只能对属性进行数据劫持，所以无法对整个对象进行劫持。Proxy 虽然兼容性不好，但是它可以劫持整个对象，并支持数组。Vue3 选择 Proxy 作为数据响应式系统的底层实现，是因为它更加底层，并且能够支持更多操作。
