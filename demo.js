const isObject = (val) => typeof val === "object" && val !== null;
function isEquals(val1, val2) {
  if (!isObject(val1) || !isObject(val2)) return Object.is(val1, val2);
  if (val1 === val2) return true;
  const val1Keys = Object.keys(val1);
  const val2Keys = Object.keys(val2);
  if (val1Keys.length !== val2Keys.length) return false;
  for (const key of val1Keys) {
    if (!val2Keys.includes(key)) {
      return false;
    }
    const res = isEquals(val1[key], val2[key]);
    if (!res) return false;
  }
  return true;
}

const arr = [
  { a: 1, b: 2 },
  { b: 1, a: 2 },
  { a: 2, b: 1, c: 3 },
  { a: 2, b: 1 },
  2,
  3,
  5,
  3,
  { d: 1, f: 4 },
];

const newArr = [...arr];
for (let i = 0; i < newArr.length; i++) {
  for (let j = i + 1; j < newArr.length; j++) {
    if (isEquals(newArr[i], newArr[j])) {
      newArr.splice(j, 1);
      j--;
    }
  }
}

// 生成随机数

function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}

function getType(value) {
  if (typeof value !== "object") {
    return typeof value;
  }

  return Object.prototype.toString
    .call(value)
    .replace(/^\[object (\S+)\]$/, "$1")
    .toLowerCase();
}

console.log(getType([]));
