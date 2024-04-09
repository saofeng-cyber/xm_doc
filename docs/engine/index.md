---
layout: doc
---

# 前端工程化

## 搭建一个符合大厂标准的 Vue3+Ts +Vite 脚手架

## vscode 插件

- Vue-Official: Vue3 的一款新的语法提示的插件
- ESLint：eslint 插件
- Prettier-Code-formatter：prettier 的格式化插件

## 开发工具

- VSCode：开发工具
- Chrome：浏览器
- Postman：接口调试工具
- Git：版本管理工具
- Typora：Markdown 编辑器

## 项目初始化

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

## tsconfig.json 配置

```json
{
  "compilerOptions": {
    "target": "esnext", // 目标语言的版本
    "module": "esnext", // 生成代码的模板标准
    "moduleResolution": "node", // 模块解析策略
    "strict": true, // 启用所有严格类型检查选项
    "forceConsistentCasingInFileNames": true, // 禁止对同一个文件的不一致的引用
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入
    "strictFunctionTypes": false, // 不允许函数参数双向协变
    "jsx": "preserve", // 在 .tsx 文件里支持 JSX
    "baseUrl": ".", // 解析非相对模块名的基准目录
    "allowJs": true, // 允许编译 javascript 文件
    "sourceMap": true, // 生成相应的 .map文件
    "esModuleInterop": true, // 支持 CommonJS 和 ES 模块之间的交互
    "resolveJsonModule": true, // 允许导入扩展名为.json的模块
    "noUnusedLocals": true, // 若有未使用的局部变量则抛错
    "noUnusedParameters": true, // 若有未使用的参数则抛错
    "experimentalDecorators": true, // 启用装饰器
    "lib": ["dom", "esnext"], // 编译过程中需要引入的库文件的列表
    "types": ["vite/client"], // 声明文件包的列表
    "typeRoots": ["./node_modules/@types/", "./types"], // 声明文件包的根目录
    "noImplicitAny": false, // 不允许隐式的 any 类型
    "skipLibCheck": true, // 忽略所有的声明文件（ *.d.ts）的类型检查
    "paths": {
      // 模块名到基于 baseUrl的路径映射的列表
      "/@/*": ["src/*"],
      "/#/*": ["types/*"]
    }
  },
  "include": [
    // 需要编译的文件列表
    "tests/**/*.ts",
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "types/**/*.d.ts",
    "types/**/*.ts",
    "build/**/*.ts",
    "build/**/*.d.ts",
    "mock/**/*.ts",
    "vite.config.ts",
    "src/settings/dist/theme.js",
    "src/tools.js"
  ],
  "exclude": ["node_modules", "tests/server/**/*.ts", "dist", "**/*.js"] // 需要排除的文件列表
}
```

## vite.config.ts 配置

```ts
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

## 支持 Less

直接项目中安装 less 就行，跟 webpack 区别就是，Webpack 需要安装 less、less-loader，而 Vite 不需要 less-loader

```bash
npm i -D less
```

## vscode 设置

主要配置一些 Eslint、Prettier、Stylelint 的使用，以及保存自动调用插件进行格式化，项目新建一个.vscode 文件夹，文件夹里新建一个 settings.json

```json
// .vscode/settings.json

{
  //========================================
  //============== 编辑器 ===================
  //========================================
  // 光标的动画样式
  "editor.cursorBlinking": "phase",
  // 光标是否启用平滑插入的动画
  "editor.cursorSmoothCaretAnimation": true,
  // vscode重命名文件或移动文件自动更新导入路径
  "typescript.updateImportsOnFileMove.enabled": "always",
  // 自动替换为当前项目的内置的typescript版本
  "typescript.tsdk": "./node_modeles/typescript/lib",
  // 一个制表符占的空格数(可能会被覆盖)
  "editor.tabSize": 2,
  // 定义一个默认和的格式程序 (prettier)
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 取消差异编辑器忽略前空格和尾随空格的更改
  "diffEditor.ignoreTrimWhitespace": false,
  // 定义函数参数括号前的处理方式
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // 在键入的时候是否启动快速建议
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  //========================================
  //============== Other ===================
  //========================================
  // 启用导航路径
  "breadcrumbs.enabled": true,
  //========================================
  //============== Other ===================
  //========================================
  // 按下Tab键展开缩写 （例如Html的div,在键入的时候按Tab，快捷生成出来）
  "emmet.triggerExpansionOnTab": true,
  // 建议是否缩写 (如Html的<div />)
  "emmet.showAbbreviationSuggestions": true,
  // 建议是否展开 （如Html的 <div></div>）
  "emmet.showExpandedAbbreviation": "always",
  // 为制定语法文件定义当前的语法规则
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html",
    "xml": {
      "arrt_quotes": "single"
    }
  },
  // 在不受支持的语言中添加规则映射
  "emmet.includeLanguages": {
    "jsx-sublime-babel-tags": "javascriptreact"
  },
  //========================================
  //============== Files ==================
  //========================================
  // 删除行位空格
  "files.trimTrailingWhitespace": true,
  // 末尾插入一个新的空格
  "files.insertFinalNewline": true,
  // 删除新行后面的所有新行
  "files.trimFinalNewlines": true,
  // 默认行尾的字符
  "files.eol": "\n",
  // 在查找搜索的时候集成的文件
  "search.exclude": {
    "**/node_modules": true,
    "**/*.log": true,
    "**/*.log*": true,
    "**/bower_components": true,
    "**/dist": true,
    "**/elehukouben": true,
    "**/.git": true,
    "**/.gitignore": true,
    "**/.svn": true,
    "**/.DS_Store": true,
    "**/.idea": true,
    "**/.vscode": false,
    "**/yarn.lock": true,
    "**/tmp": true,
    "out": true,
    "dist": true,
    "node_modules": true,
    "CHANGELOG.md": true,
    "examples": true,
    "res": true,
    "screenshots": true
  },
  // 搜索文件夹时候排外的文件夹
  "files.exclude": {
    "**/bower_components": true,
    "**/.idea": true,
    "**/tmp": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": false
  },
  // 文件监视器排外的文件 可减少初始化打开项目的占用大量cpu
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/.vscode/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/bower_components/**": true,
    "**/dist/**": true,
    "**/yarn.lock": true
  },
  "stylelint.enable": true,
  "stylelint.packageManager": "yarn",
  //========================================
  //============== Eslint ==================
  //========================================
  // 状态栏显示Eslint的开启状态
  "eslint.alwaysShowStatus": true,
  // Eslint的选项
  "eslint.options": {
    // 要检查的文件拓展名数组
    "extensions": [".js", ".jsx", ".ts", ".tsx", ".vue"]
  },
  // Eslint校验的
  "eslint.validate": [
    "javascript",
    "typescript",
    "reacttypescript",
    "reactjavascript",
    "html",
    "vue"
  ],
  //========================================
  //============== Prettier ================
  //========================================
  //  使用当前项目的prettier配置文件，如果没有则使用默认的配置
  "prettier.requireConfig": true,
  "editor.formatOnSave": true,
  // 以下程序使用prettier默认进行格式化
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 保存文件的时候的配置
  "editor.codeActionsOnSave": {
    // 使用Eslint格式化代码
    "source.fixAll.eslint": true,
    // 使用stylelint格式化代码
    "source.fixAll.stylelint": true
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      // 使用Eslint格式化代码
      "source.fixAll.eslint": true,
      // 使用stylelint格式化代码
      "source.fixAll.stylelint": true
    },
    "editor.defaultFormatter": "johnsoncodehk.volar"
  },
  "compile-hero.disable-compile-files-on-did-save-code": true,
  "i18n-ally.localesPaths": ["src/locales", "src/locales/lang"]
}
```

## Eslint

Eslint 承担的更多的是代码质量上的一个严格规范，这里安装的包比较多

```bash
npm i
eslint eslint-define-config
eslint-plugin-import
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-vue
vue-eslint-parser
@typescript-eslint/parser
@typescript-eslint/eslint-plugin
eslint-config-prettier
eslint-plugin-jest
-D

```

### 项目中新建两个文件

- .eslintrc.js：eslint 配置文件
- .eslintignore：eslint 规范忽略配置

```js
// .eslintrc.js

// @ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    // 'prettier',
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "vue/script-setup-uses-vars": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/custom-event-name-casing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "space-before-function-paren": "off",

    "vue/attributes-order": "off",
    "vue/one-component-per-file": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
```

```bash
// .eslintignore
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
```

## Prettier

Prettier 更多的是对于代码格式的规范，先安装插件

```bash
npm i prettier -D
```

```js
// .prettierrc.js

module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  trailingComma: "all",
  jsxSingleQuote: false,
  arrowParens: "always",
  insertPragma: false,
  requirePragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  endOfLine: "auto",
};
```

## 环境变量文件

- .env
- .env.develoment
- .env.production

## 全局 types

创建 types 文件夹，存放全局相关的 typescript

## src 文件夹

在 src 文件夹中创建以下文件夹（当然这个看你自己喜好命名，这里只是我自己的习惯）

-api：存放 http 请求的接口

- assets：存放一些静态资源，如 icon、图片
- components：存放通用组件
- design：存放全局样式文件
- enums：存放全局的 ts 字典
- hooks：存放封装的自定义 hook
- layouts：存放布局方案
- locales：存放国际化的语言资料
- router：存放路由相关
- settings：存放一些全局的设置
- store：存放状态管理相关
- utils：存放通用的工具类函数
- views：存放项目的页面

## router 和 pinia

```bash
npm i vue-router pinia -D
```

- vue-router：路由
- pinia：状态管理（代替 vuex）

## husky

husky 是 git 提交代码的检查，包括代码是否合格、样式是否合格、commit 信息是否合格等检测

### 插件安装

```bash
    npm i pretty-quick husky @commitlint/cli @commitlint/config-conventional -D
```

### package.json

```json
    "install:husky": "husky install",
    "lint:pretty": "pretty-quick --staged",
    "lint:all": "npm run lint:eslint && npm run lint:stylelint"
```

### husky install

在终端里输入命令 `husky install`，项目会生成.husky 文件夹：

```bash
    .husky
    _
        .gitignore
        husky.sh
```

### 完善 husky

在.husky 文件夹中创建三个文件 `commit-msg`、`common.sh`、`pre-commit`

```bash
    .husky
    _
        .gitignore
        husky.sh
   commit-msg
   common.sh
   pre-commit
```

### commit-msg

```bash

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

### common.sh

```bash

// .husky/common.sh

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

### pre-commit

```bash
    // .husky/pre-commit

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

[ -n "$CI" ] && exit 0

yarn run lint:pretty
```

### commitlint.config.js

用来规范 git commit -m 'msg' 的 msg

```js
// commitlint.config.js

module.exports = {
  // ↓忽略包含init的提交消息
  ignores: [(commit) => commit.includes("init")],
  // ↓按照传统消息格式来验证
  extends: ["@commitlint/config-conventional"],
  // 自定义解析器
  parserPreset: {
    // 解析器配置
    parserOpts: {
      // commit 提交头的规则限制
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      // 匹配分组
      headerCorrespondence: ["type", "scope", "subject"],
      // 引用
      referenceActions: [
        "close",
        "closes",
        "closed",
        "fix",
        "fixes",
        "fixed",
        "resolve",
        "resolves",
        "resolved",
      ],
      // 对应issue要携带#符号
      issuePrefixes: ["#"],
      // 不兼容变更
      noteKeywords: ["BREAKING CHANGE"],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ["header", "hash"],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  // ↓自定义提交消息规则
  rules: {
    // ↓body以空白行开头
    "body-leading-blank": [2, "always"],
    // ↓footer以空白行开头
    "footer-leading-blank": [1, "always"],
    // ↓header的最大长度
    "header-max-length": [2, "always", 108],
    // ↓subject为空
    "subject-empty": [2, "never"],
    // ↓type为空
    "type-empty": [2, "never"],
    // ↓type的类型
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release",
        "update",
      ],
    ],
  },
};
```
