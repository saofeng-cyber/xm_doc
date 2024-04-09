---
layout: doc
---

# 前端 css 面试

## CSS 盒模型，在不同浏览器的差异

css 标准盒子模型

css 盒子模型 又称为框模型（Box Model），包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素。

### 区别

标准盒子模型和 IE 盒子模型的区别主要体现在 width 和 height 属性上。

标准盒子模型：

- width 和 height 指的是 content 的宽度 和高度。
- padding 和 border 所占的面积会计算在 width 和 height 中。

IE 盒子模型：

- width 和 height 指的是 content + padding + border 的宽度 和高度。
- padding 和 border 所占的面积不会计算在 width 和 height 中。

## 写出尽可能多的水平垂直居中的方案并对比它们的优缺点

### 方案一：flex 布局

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 方案二：grid 布局

```css
.parent {
  display: grid;
}
.child {
  justify-self: center;
  align-self: center;
}
```

### 方案三：绝对定位

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

### 方案四：绝对定位 + margin auto

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```

### 方案五：绝对定位 + margin

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  width: 50px;
  height: 50px;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

### 方案六：绝对定位 + calc

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: calc(50% - 25px);
  right: calc(50% - 25px);
  bottom: calc(50% - 25px);
  left: calc(50% - 25px);
}
```

### 方案七：绝对定位 + transform

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## BFC 的布局规则，实现原理，可以解决的问题

BFC 直译为块级格式化上下文，它是一个独立的渲染区域，只有 Block-level box 参与，它规定了内部的 Block-level Box 如何布局，并且与外部毫不相干。
注意：可以把 BFC 理解为一个大的盒子，其内部是由 Block-level box 组成的

### 布局规则

- 内部的 Box 会在垂直方向，一个接一个地放置。
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC 的区域不会与 float box 重叠。
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算 BFC 的高度时，浮动元素也参与计算。

### BFC 的作用及原理

1. 自适应两栏布局
2. 清除内部浮动
3. 防止垂直 margin 重叠

BFC 内部的元素和外部的元素绝对不会互相影响，因此， 当 BFC 外部存在浮动时，它不应该影响 BFC 内部 Box 的布局，BFC 会通过变窄，而不与浮动有重叠。同样的，当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包括浮动的高度。避免 margin 重叠也是这样的一个道理。

### CSS 函数有哪些？

根据 w3cplus 中可以划分为以下几类：

- 属性函数：attr()；

- 背景图片函数：linear-gradient()、radial-gradient()、conic-gradient()、repeating-linear-gradient()、repeating-radial-gradient()、repeating-conic-gradient()、image-set()、image()、url()、element()；

- 颜色函数：rgb()、rgba()、hsl()、hsla()、hwb()、color-mod()；

- 图形函数：circle()、ellipse()、inset()、polygon()、path()

- 滤镜函数：blur()、brightness()、contrast()、drop-shadow()、grayscale()、hue-rotate()、invert()、opacity()、saturate()、sepia()；

- 转换函数：matrix()、matrix3d()、perspective()、rotate()、rotate3d()、rotateX()、rotateY()、rotateZ()、scale()、scale3d()、scaleX()、scaleY()、scaleZ()、skew()、skewX()、skewY()、translate()、translateX()、translateY()、translateZ()、translate3d()；

- 数学函数：calc()、min()、max()、mixmax()、repeat()；

- 缓动函数：cubic-bezier()、steps()；

- 其他函数：counter()、counters()、toggle()、var()、 symbols()。

## PostCSS、Sass、Less 的异同，以及使用配置，至少掌握一种

- 编译环境不一样，Sass 的安装需要 Ruby 环境，是在服务端处理的，而 Less 是需要引入 less.js 来处理 Less 代码输出 css 到浏览器，也可以在开发环节使用 Less，然后编译成 css 文件，直接放到项目中；
- 变量符号不一样，Less 是@，而 Scss 是\$；
- 输出设置，Less 没有输出设置，Sass 提供 4 中输出选项：nested, compact, compressed 和 expanded；
- 处理条件语句，Sass 支持条件语句，可以使用 if{}else{},for{}循环等等。 LESS 的条件语句使用有些另类，他不是我们常见的关键词 if 和 else if 之类，而其实现方式是利用关键词“when”；
- 引用外部文件，文件名如果以下划线\_开头的话，Sass 会认为该文件是一个引用文件，不会将其编译为 css 文件，ess 引用外部文件和 css 中的@import 没什么差异；
- 工具库的不同，Sass 有工具库 Compass, 简单说，Sass 和 Compass 的关系有点像 Javascript 和 jQuery 的关系,Compass 在 Sass 的基础上，封装了一系列有用的模块和模板，补充强化了 Sass 的功能。Less 有 UI 组件库 Bootstrap,Bootstrap 是 web 前端开发中一个比较有名的前端 UI 组件库，Bootstrap 的样式文件部分源码就是采用 Less 语法编写。

## CSS 如何配置按需加载(以antd为例)

### 1. 安装插件

```bash
    npm install -D babel-plugin-import
```

### 2. 修改 babel 配置文件

```js
module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: "css",
      },
    ],
  ],
};
```

## 如何防止 CSS 阻塞渲染

### 1. 利用 preload 属性

```html
<link rel="preload" href="style.css" as="style" />
<link rel="stylesheet" href="style.css" />
```

### 2. 利用 prefetch 属性

```html
<link rel="prefetch" href="style.css" />
```

### 3. 利用 media 属性

```html
<link href="style.css" rel="stylesheet" />
<link href="print.css" rel="stylesheet" media="print" />
<link href="other.css" rel="stylesheet" media="(min-width: 40em)" />
```

## 熟练使用 CSS(3)实现常见动画，如渐变、移动、旋转、缩放等

我把一些常用的 CSS 动画效果代码上传到 github 了，有需要的同学可以点击下载，[CSS 常用动画](https://github.com/qappleh/Interview/blob/master/CSS/css%E5%B8%B8%E7%94%A8%E5%8A%A8%E7%94%BB.css)；

另外还有一些 CSS 动画库，比如：

- [animate.css](https://animate.style/)
- [magic.css](https://www.minimamente.com/project/magic/)
- [Hover.css](https://ianlunn.github.io/Hover/)
- [gsap](https://gsap.com/)
- [animista](https://animista.net/)

## CSS 知识图谱

- [CSS 知识图谱 1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d2a57e8944a437dae8ead803b73218b~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)
- [CSS 知识图谱 2](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6b28ec9e7a24c7c90a55e6429fdc016~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)
