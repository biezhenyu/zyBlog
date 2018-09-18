const express = require('express')
const app = express()
const path = require('path')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs


// 使用app.use挂载路由
app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)