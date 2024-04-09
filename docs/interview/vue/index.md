---
layout: doc
---

# 前端 vue 面试

## vue 思维导图

[vue 思维导图](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19a1dc801ab94811acd840414b4f4710~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1292&h=3958&s=737612&e=jpg&b=313131)

## Vue 生命周期以及每个生命周期都做了什么

- `beforeCreate` 是 new Vue()之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。

- `created` 在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 Dom 进行交互，如果非要想，可以通过 vm.\$nextTick 来访问 Dom。

- `beforeMount` 发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 Dom 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。

- `mounted` 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点，使用\$refs 属性对 Dom 进行操作。

- `beforeUpdate` 发生在更新之前，也就是响应式数据发生更新，虚拟 dom 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

- `updated` 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

- `beforeDestroy` 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

- `destroyed` 发生在实例销毁之后，这个时候只剩下了 dom 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

## Vue 的响应式原理

Vue 在初始化数据时，会使用 Object.defineProperty 重新定义 data 中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的 watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。
Vue3.x 改用 Proxy 替代 Object.defineProperty。因为 Proxy 可以直接监听对象和数组的变化，并且有多达 13 种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

## Vue3 和 Vue2 的区别

- 源码组织方式变化：使用 TS 重写
- 支持 Composition API：基于函数的 API，更加灵活组织组件逻辑（vue2 用的是 options api）
- 响应式系统提升：Vue3 中响应式数据原理改成 proxy，可监听动态新增删除属性，以及数组变化
- 编译优化：vue2 通过标记静态根节点优化 diff，Vue3 标记和提升所有静态根节点，diff 的时候只需要对比动态节点内容
- 打包体积优化：移除了一些不常用的 api（inline-template、filter）
- 生命周期的变化：使用 setup 代替了之前的 beforeCreate 和 created
- Vue3 的 template 模板支持多个根标签
- Vuex 状态管理：创建实例的方式改变,Vue2 为 new Store , Vue3 为 createStore
- Route 获取页面实例与路由信息：vue2 通过 this 获取 router 实例，vue3 通过使用 getCurrentInstance/ userRoute 和 userRouter 方法获取当前组件实例
- Props 的使用变化：vue2 通过 this 获取 props 里面的内容，vue3 直接通过 props
- 父子组件传值：vue3 在向父组件传回数据时，如使用的自定义名称，如 backData，则需要在 emits 中定义一下

## MVVM 的理解

MVVM 是 `Model-View-ViewModel` 缩写，也就是把 MVC 中的 Controller 演变成 ViewModel。Model 层代表数据模型，View 代表 UI 组件，ViewModel 是 View 和 Model 层的桥梁，数据会绑定到 viewModel 层并自动将数据渲染到页面中，视图变化的时候会通知 viewModel 层更新数据。
