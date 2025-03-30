---
layout: doc
---

# js 小案例&小技巧

## 数组去重

```js
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
  { d: 1, f: 4 },
];

const newArr = [...arr];
for (let i = 0; i < newArr.length; i++) {
  for (let j = i + 1; j < newArr.length; j++) {
    if (isEquals(newArr[i], newArr[j])) {
      newArr.splice(j, 1);
      j--; // 防止数组塌陷
    }
  }
}
```

## canvas 绘制文字

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  </style>

  <body>
    <canvas></canvas>
    <script>
      const canvas = document.querySelector("canvas");

      const ctx = canvas.getContext("2d");

      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function randomColor() {
        return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
      }

      function Ball(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
      }

      Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.font = `${52}px Arial`;
        ctx.fillText("孙明刚大傻逼", this.x, this.y);
        ctx.fill();
      };

      Ball.prototype.update = function () {
        if (this.x + this.size >= width) {
          this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
          this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
          this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
          this.velY = -this.velY;
        }
        if (this.velX === 0) this.velX = random(-4, 2);
        if (this.velY === 0) this.velY = random(-4, 2);

        this.x += this.velX;
        this.y += this.velY;
      };

      let balls = [];

      while (balls.length < 25) {
        let size = random(10, 20);
        let ball = new Ball(
          // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-2, 2),
          random(-2, 2),
          randomColor(),
          size
        );
        balls.push(ball);
        console.log(balls);
      }

      function loop() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
        }

        requestAnimationFrame(loop);
      }

      loop();
    </script>
  </body>
</html>
```
