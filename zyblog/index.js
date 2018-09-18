const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

// 使用路由
app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)