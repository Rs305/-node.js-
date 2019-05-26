## 说明

1. 用户请求 / 时，返回 html 内容
2. 该 html 内容里面由一个 css link 和一个 script
3. css link 会请求 /style.css，返回 css 内容
4. script 会请求 /main.js，返回 js 内容
5. 请求 `/`， `/style.css` ，`/main.js` 以外的路径，则一律返回 404 状态码

