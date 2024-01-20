---
layout: doc
---

# Js 常用工具方法

日常开发中，面对各种不同的需求，我们经常会用到以前开发过的一些工具函数，把这些工具函数收集起来，将大大提高我们的开发效率。

- [一个只用一行代码实现一个方法的实用网站](https://1loc.dev/)

## 校验数据类型

```js
export const typeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
```

## 防抖函数

```js
export const debounce = () => {
  let timer = null;
  return (callback, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
};
```

## 节流函数

```js
export const throttle = () => {
  let timer = null;
  return (callback, wait = 800) => {
    if (!timer) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, wait);
    }
  };
};
```

## 深拷贝

```js
export const deepClone = function (obj) {
  if (typeOf(obj) !== "object" || obj == null) return obj;
  let cloneObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
};
```

## 手机号脱敏

```js
export const desensitizePhone = function (phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};
```

## 身份证脱敏

```js
export const desensitizeIdCard = function (idCard) {
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, "$1****$2");
};
```

## 邮箱脱敏

```js
export const desensitizeEmail = function (email) {
  const index = email.indexOf("@");
  const prefix = email.slice(0, 3);
  const suffix = email.slice(index);
  return prefix + "****" + suffix;
};
```

## 开启全屏

```js
export const launchFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};
```

## 关闭全屏

```js
export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
```

## 判断是否全屏

```js
export const isFullscreen = () => {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};
```

## 大小写转换

```js
export const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};
```

## 解析 URL 参数

```js
export const getSearchParams = () => {
  const searchPar = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
};
```

## 判断手机是 Andoird 还是 IOS

```js
/**
 * 1: ios
 * 2: android
 * 3: 其它
 */
export const getOSType = () => {
  let u = navigator.userAgent,
    app = navigator.appVersion;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 1;
  }
  if (isAndroid) {
    return 2;
  }
  return 3;
};
```

## 滚动到页面顶部

```js
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);

    window.scrollTo(0, c - c / 8);
  }
};
```

## 滚动到元素位置

```js
export const smoothScroll = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
};
```

## uuid

```js
export const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf("/") + 1);
};
```

## 金额格式化

```js
export const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + "").replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
  const sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
  const dec = typeof dec_point === "undefined" ? "." : dec_point;
  let s = "";
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec);
    return "" + Math.ceil(n * k) / k;
  };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  const re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
```

## 存储操作

```js
class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key, value) {
    if (typeof value === "object") value = JSON.stringify(value);
    this.storage.setItem(key, value);
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (err) {
      return this.storage.getItem(key);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const localCache = new MyCache();
const sessionCache = new MyCache(false);

export { localCache, sessionCache };
```

## 下载文件

```js
const downloadFile = (api, params, fileName, type = "get") => {
  axios({
    method: type,
    url: api,
    responseType: "blob",
    params: params,
  })
    .then((res) => {
      let str = res.headers["content-disposition"];
      if (!res || !str) {
        return;
      }
      let suffix = "";
      // 截取文件名和文件类型
      if (str.lastIndexOf(".")) {
        fileName
          ? ""
          : (fileName = decodeURI(
              str.substring(str.indexOf("=") + 1, str.lastIndexOf("."))
            ));
        suffix = str.substring(str.lastIndexOf("."), str.length);
      }
      //  如果支持微软的文件下载方式(ie10+浏览器)
      if (window.navigator.msSaveBlob) {
        try {
          const blobObject = new Blob([res.data]);
          window.navigator.msSaveBlob(blobObject, fileName + suffix);
        } catch (e) {
          console.log(e);
        }
      } else {
        //  其他浏览器
        let url = window.URL.createObjectURL(res.data);
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", fileName + suffix);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

downloadFile("/api/download", { id }, "文件名");
```

## 模糊搜索

```js
export const fuzzyQuery = (list, keyWord, attribute = "name") => {
  const reg = new RegExp(keyWord);
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};

const list = [
  { id: 1, name: "树哥" },
  { id: 2, name: "黄老爷" },
  { id: 3, name: "张麻子" },
  { id: 4, name: "汤师爷" },
  { id: 5, name: "胡万" },
  { id: 6, name: "花姐" },
  { id: 7, name: "小梅" },
];
fuzzyQuery(list, "树", "name"); // [{id: 1, name: '树哥'}]
```

## 遍历树节点

```js
export const foreachTree = (data, callback, childrenName = "children") => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName);
    }
  }
};

const treeData = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
 }, {
  id: 2,
  label: '一级 2',
  children: [{
    id: 5,
    label: '二级 2-1'
  }, {
    id: 6,
    label: '二级 2-2'
  }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
}],

let result
foreachTree(data, (item) => {
  if (item.id === 9) {
    result = item
  }
})
console.log('result', result)  // {id: 9,label: "三级 1-1-1"}
```

## 生成随机字符串

```js
const randomString = () => Math.random().toString(36).slice(2);
randomString(); // gi1qtdego0b
```

## 单词首字母大写

```js
const uppercaseWords = (str) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
uppercaseWords("hello world"); // 'Hello World'
```

## 将字符串转换为小驼峰

```js
const toCamelCase = (str) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
toCamelCase("background-color"); // backgroundColor
toCamelCase("-webkit-scrollbar-thumb"); // WebkitScrollbarThumb
toCamelCase("_hello_world"); // HelloWorld
toCamelCase("hello_world"); // helloWorld
```

## 将数字截断到固定的小数点

```js
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
round(1.005, 2); //1.01
round(1.555, 2); //1.56
```

## 获取一个随机的颜色值

```js
const randomColor = () =>
  `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
randomColor(); // #9dae4f
randomColor(); // #6ef10e
```

## 将 RGB 颜色转换为十六进制颜色值

```js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(255, 255, 255); // '#ffffff'
```
