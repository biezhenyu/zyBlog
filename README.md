### supervisor
使用 supervisor 可以解决这个繁琐重启的问题，全局安装 supervisor：
```
npm i -g supervisor
```
运行
```
supervisor index
```

### ejs
模板引擎
通过调用 res.render 函数渲染 ejs 模板，res.render 第一个参数是模板的名字，这里是 users 则会匹配 views/users.ejs，第二个参数是传给模板的数据，这里传入 name，则在 ejs 模板中可使用 name。res.render 的作用就是将模板和数据结合生成 html，同时设置响应头中的 Content-Type: text/html，告诉浏览器我返回的是 html，不是纯文本，要按 html 展示。现在我们访问 localhost:3000/users/haha