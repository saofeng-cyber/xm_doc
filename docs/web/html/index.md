---
layout: doc
---

# Html5

## ARIA

无障碍富互联网应用（Accessible Rich Internet Applications，ARIA）是一组[角色](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles)和[属性](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes)，用于定义使残障人士更易于访问 web 内容和 web 应用程序（尤其是使用 JavaScript 开发的应用程序）的方法。

它补充了 HTML，以便在没有其他机制时可以将应用程序中常用的交互和小部件传递给辅助技术。例如，ARIA 支持无障碍 JavaScript 小部件、表单提示和错误消息、实时内容更新等。

::: danger
**警告**： 许多这些小部件在现代浏览器中都已经完全支持。如果有正确语义的 HTML 元素存在的话，开发人员应该更喜欢使用这样的元素而不是使用 ARIA。例如，原生元素具有内置的[键盘无障碍](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)、角色和状态。但是，如果你选择使用 ARIA，则你有责任在脚本中模仿等效的浏览器行为。
:::

使用 [ARIA 的第一规则](https://www.w3.org/TR/using-aria/#rule1)是“如果你能够使用原生的 HTML 元素或属性，并且有你需要但已经建立在里面的语义和行为，而不是重新调整元素的用途并添加 ARIA 角色、状态或者属性来使它更加无障碍，那么你就应该如此。

::: info
**备注**： 有个说法叫做“ARIA 宁缺毋滥”。在 WebAim 对超过 100 万个主页的调查中，他们发现，有 ARIA 存在的主页比那些没有 ARIA 的，多检测出了平均 41% 的错误。尽管 ARIA 是为了使网页更加无障碍而设计的，但是如果使用不当，可能适得其反。
:::

这是进度条小部件的标记：

```html
<div
  role="progressbar"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100"
  style="width:50%"
>
  <div style="width:15%">15%</div>
</div>
```

这个进度条是使用 `<div>` 构建的，没有任何意义。我们加入 ARIA 角色和属性以添加意义。在这个例子中，role="progressbar" (en-US) 属性告知浏览器，这个元素实际上是一个由 JavaScript 驱动的进度条小部件。aria-valuemin (en-US) 和 aria-valuemax (en-US) 属性指定进度条的最小值和最大值，aria-valuenow (en-US) 描述进度条的当前状态，因此必须使用 JavaScript 保持更新。

### aria-activedescendant

aria-activedescendant (en-US) 属性用于指定当前焦点所在的元素。

```html
<div role="listbox" aria-activedescendant="item2">
  <div id="item1" role="option">Item 1</div>
  <div id="item2" role="option">Item 2</div>
  <div id="item3" role="option">Item 3</div>
</div>
```

### aria-autocomplete

aria-autocomplete (en-US) 属性用于指定输入字段是否应该自动完成。

```html
<input type="text" aria-autocomplete="both" />
```

### aria-checked

aria-checked (en-US) 属性用于指定单选按钮或复选框是否被选中。

```html
<input type="radio" name="radio" id="radio1" aria-checked="false" />
<input type="radio" name="radio" id="radio2" aria-checked="true" />
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"
></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

### aria-controls

全局属性标识其内容或存在由设置此属性的元素控制的一个或多个元素

```html
<button aria-controls="details">Toggle details</button>
<div id="details" aria-live="polite" aria-relevant="additions removals">
  <p>Details go here</p>
</div>
```

### aria-describedby

aria-describedby (en-US) 属性用于指定与当前元素相关联的描述元素。

```html
<button aria-describedby="help">Help</button>
<div id="help" aria-live="polite">
  <p>Help text goes here</p>
</div>
```

### aria-disabled

aria-disabled (en-US) 属性用于指定当前元素是否被禁用。

```html
<button aria-disabled="true">Disabled</button>
```

### aria-expanded

aria-expanded (en-US) 属性用于指定当前元素是否被展开。

```html
<button aria-expanded="true">Toggle</button>
```

::: info

- [ARIA 状态和属性](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [ARIA 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [ARIA 操作指南](https://www.w3.org/WAI/ARIA/apg/)

:::
