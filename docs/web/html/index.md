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

## 一个例子

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .disclosure-nav {
      background-color: #eee;
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .disclosure-nav ul {
      background-color: #eee;
      border: 1px solid #005a9c;
      border-top-width: 5px;
      border-radius: 0 0 4px 4px;
      display: block;
      list-style-type: none;
      margin: 0;
      min-width: 200px;
      padding: 0;
      position: absolute;
      top: 100%;
    }

    .disclosure-nav li {
      margin: 0;
    }

    .disclosure-nav > li {
      display: flex;
      position: relative;
    }

    .disclosure-nav ul a {
      border: 0;
      color: #000;
      display: block;
      margin: 0;
      padding: 0.5em 1em;
      text-decoration: underline;
    }

    .disclosure-nav ul a:hover,
    .disclosure-nav ul a:focus {
      background-color: #ddd;
      margin-bottom: 0;
      text-decoration: none;
    }

    .disclosure-nav ul a:focus {
      outline: 5px solid rgb(0 90 156 / 75%);
      position: relative;
    }

    .disclosure-nav button,
    .disclosure-nav .main-link {
      align-items: center;
      background-color: transparent;
      border: 1px solid transparent;
      border-right-color: #ccc;
      display: flex;
      padding: 1em;
    }

    .disclosure-nav .main-link {
      border-right-color: transparent;
    }

    .disclosure-nav button::after {
      content: "";
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      height: 0.5em;
      margin-left: 0.75em;
      width: 0.5em;
      transform: rotate(45deg);
    }

    .disclosure-nav .main-link + button::after {
      margin-left: 0;
    }

    .disclosure-nav button:focus,
    .disclosure-nav .main-link:focus {
      border-color: #005a9c;
      outline: 5px solid rgb(0 90 156 / 75%);
      position: relative;
    }

    .disclosure-nav button:hover,
    .disclosure-nav button[aria-expanded="true"] {
      background-color: #005a9c;
      color: #fff;
    }

    .disclosure-nav button:hover::after,
    .disclosure-nav button[aria-expanded="true"]::after {
      border-color: #fff;
    }

    /* Styles for example page content section */
    .disclosure-page-content {
      border: 1px solid #ccc;
      padding: 1em;
    }

    .disclosure-page-content h3 {
      margin-top: 0.5em;
    }

    .sample-header {
      border: #005a9c solid 2px;
      background: #005a9c;
      color: white;
      text-align: center;
    }

    .sample-header .title {
      font-size: 2.5em;
      font-weight: bold;
      font-family: serif;
    }

    .sample-header .tagline {
      font-style: italic;
    }

    .sample-footer {
      border: #005a9c solid 2px;
      background: #005a9c;
      font-family: serif;
      color: white;
      font-style: italic;
      padding-left: 1em;
    }
  </style>

  <body>
    <nav aria-label="Mythical University">
      <ul id="exTest" class="disclosure-nav">
        <li>
          <button
            type="button"
            aria-expanded="true"
            aria-controls="id_about_menu"
          >
            About
          </button>
          <ul id="id_about_menu">
            <li>
              <a href="#mythical-page-content"> Overview </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Administration </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Facts </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Campus Tours </a>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            aria-expanded="true"
            aria-controls="id_admissions_menu"
          >
            Admissions
          </button>
          <ul id="id_admissions_menu">
            <li>
              <a href="#mythical-page-content"> Apply </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Tuition </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Sign Up </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Visit </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Photo Tour </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Connect </a>
            </li>
          </ul>
        </li>
        <li>
          <button
            type="button"
            aria-expanded="true"
            aria-controls="id_academics_menu"
          >
            Academics
          </button>
          <ul id="id_academics_menu">
            <li>
              <a href="#mythical-page-content"> Colleges & Schools </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Programs of Study </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Honors Programs </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Online Courses </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Course Explorer </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Register for Class </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Academic Calendar </a>
            </li>
            <li>
              <a href="#mythical-page-content"> Transcripts </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div
      id="mythical-page-content"
      class="disclosure-page-content"
      tabindex="-1"
      role="region"
      aria-label="Mythical University sample page content"
    >
      <h3 id="mythical-page-heading">Mythical University</h3>
      <p>
        Sample content section. Activating a link above will update and navigate
        to this region.
      </p>
    </div>

    <script>
      /*
       *   This content is licensed according to the W3C Software License at
       *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
       *
       *   Supplemental JS for the disclosure menu keyboard behavior
       */

      "use strict";

      class DisclosureNav {
        constructor(domNode) {
          this.rootNode = domNode;
          this.controlledNodes = [];
          this.openIndex = null;
          this.useArrowKeys = true;
          this.topLevelNodes = [
            ...this.rootNode.querySelectorAll(
              ".main-link, button[aria-expanded][aria-controls]"
            ),
          ];

          this.topLevelNodes.forEach((node) => {
            // handle button + menu
            if (
              node.tagName.toLowerCase() === "button" &&
              node.hasAttribute("aria-controls")
            ) {
              const menu = node.parentNode.querySelector("ul");
              if (menu) {
                // save ref controlled menu
                this.controlledNodes.push(menu);

                // collapse menus
                node.setAttribute("aria-expanded", "false");
                this.toggleMenu(menu, false);

                // attach event listeners
                menu.addEventListener("keydown", this.onMenuKeyDown.bind(this));
                node.addEventListener("click", this.onButtonClick.bind(this));
                node.addEventListener(
                  "keydown",
                  this.onButtonKeyDown.bind(this)
                );
              }
            }
            // handle links
            else {
              this.controlledNodes.push(null);
              node.addEventListener("keydown", this.onLinkKeyDown.bind(this));
            }
          });

          this.rootNode.addEventListener("focusout", this.onBlur.bind(this));
        }

        controlFocusByKey(keyboardEvent, nodeList, currentIndex) {
          switch (keyboardEvent.key) {
            case "ArrowUp":
            case "ArrowLeft":
              keyboardEvent.preventDefault();
              if (currentIndex > -1) {
                var prevIndex = Math.max(0, currentIndex - 1);
                nodeList[prevIndex].focus();
              }
              break;
            case "ArrowDown":
            case "ArrowRight":
              keyboardEvent.preventDefault();
              if (currentIndex > -1) {
                var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
                nodeList[nextIndex].focus();
              }
              break;
            case "Home":
              keyboardEvent.preventDefault();
              nodeList[0].focus();
              break;
            case "End":
              keyboardEvent.preventDefault();
              nodeList[nodeList.length - 1].focus();
              break;
          }
        }

        // public function to close open menu
        close() {
          this.toggleExpand(this.openIndex, false);
        }

        onBlur(event) {
          var menuContainsFocus = this.rootNode.contains(event.relatedTarget);
          if (!menuContainsFocus && this.openIndex !== null) {
            this.toggleExpand(this.openIndex, false);
          }
        }

        onButtonClick(event) {
          var button = event.target;
          var buttonIndex = this.topLevelNodes.indexOf(button);
          var buttonExpanded = button.getAttribute("aria-expanded") === "true";
          this.toggleExpand(buttonIndex, !buttonExpanded);
        }

        onButtonKeyDown(event) {
          var targetButtonIndex = this.topLevelNodes.indexOf(
            document.activeElement
          );

          // close on escape
          if (event.key === "Escape") {
            this.toggleExpand(this.openIndex, false);
          }

          // move focus into the open menu if the current menu is open
          else if (
            this.useArrowKeys &&
            this.openIndex === targetButtonIndex &&
            event.key === "ArrowDown"
          ) {
            event.preventDefault();
            this.controlledNodes[this.openIndex].querySelector("a").focus();
          }

          // handle arrow key navigation between top-level buttons, if set
          else if (this.useArrowKeys) {
            this.controlFocusByKey(
              event,
              this.topLevelNodes,
              targetButtonIndex
            );
          }
        }

        onLinkKeyDown(event) {
          var targetLinkIndex = this.topLevelNodes.indexOf(
            document.activeElement
          );

          // handle arrow key navigation between top-level buttons, if set
          if (this.useArrowKeys) {
            this.controlFocusByKey(event, this.topLevelNodes, targetLinkIndex);
          }
        }

        onMenuKeyDown(event) {
          if (this.openIndex === null) {
            return;
          }

          var menuLinks = Array.prototype.slice.call(
            this.controlledNodes[this.openIndex].querySelectorAll("a")
          );
          var currentIndex = menuLinks.indexOf(document.activeElement);

          // close on escape
          if (event.key === "Escape") {
            this.topLevelNodes[this.openIndex].focus();
            this.toggleExpand(this.openIndex, false);
          }

          // handle arrow key navigation within menu links, if set
          else if (this.useArrowKeys) {
            this.controlFocusByKey(event, menuLinks, currentIndex);
          }
        }

        toggleExpand(index, expanded) {
          // close open menu, if applicable
          if (this.openIndex !== index) {
            this.toggleExpand(this.openIndex, false);
          }

          // handle menu at called index
          if (this.topLevelNodes[index]) {
            this.openIndex = expanded ? index : null;
            this.topLevelNodes[index].setAttribute("aria-expanded", expanded);
            this.toggleMenu(this.controlledNodes[index], expanded);
          }
        }

        toggleMenu(domNode, show) {
          if (domNode) {
            domNode.style.display = show ? "block" : "none";
          }
        }

        updateKeyControls(useArrowKeys) {
          this.useArrowKeys = useArrowKeys;
        }
      }

      /* Initialize Disclosure Menus */

      window.addEventListener(
        "load",
        function () {
          var menus = document.querySelectorAll(".disclosure-nav");
          var disclosureMenus = [];

          for (var i = 0; i < menus.length; i++) {
            disclosureMenus[i] = new DisclosureNav(menus[i]);
          }

          // listen to arrow key checkbox
          var arrowKeySwitch = document.getElementById("arrow-behavior-switch");
          if (arrowKeySwitch) {
            arrowKeySwitch.addEventListener("change", function () {
              var checked = arrowKeySwitch.checked;
              for (var i = 0; i < disclosureMenus.length; i++) {
                disclosureMenus[i].updateKeyControls(checked);
              }
            });
          }

          // fake link behavior
          disclosureMenus.forEach((disclosureNav, i) => {
            var links = menus[i].querySelectorAll(
              '[href="#mythical-page-content"]'
            );
            var examplePageHeading = document.getElementById(
              "mythical-page-heading"
            );
            for (var k = 0; k < links.length; k++) {
              // The codepen export script updates the internal link href with a full URL
              // we're just manually fixing that behavior here
              links[k].href = "#mythical-page-content";

              links[k].addEventListener("click", (event) => {
                // change the heading text to fake a page change
                var pageTitle = event.target.innerText;
                examplePageHeading.innerText = pageTitle;

                // handle aria-current
                for (var n = 0; n < links.length; n++) {
                  links[n].removeAttribute("aria-current");
                }
                event.target.setAttribute("aria-current", "page");
              });
            }
          });
        },
        false
      );
    </script>
  </body>
</html>
```
